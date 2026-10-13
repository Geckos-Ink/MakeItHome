// Run with: node Tests/WebExtensionTests.cjs
// Executes production scripts with deterministic browser/API doubles. No packages.
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const {webcrypto} = require('node:crypto')
const resources = path.join(__dirname, '../MakeItHome/MakeItHome Web Extension/Resources')
const background = fs.readFileSync(path.join(resources, 'background.js'), 'utf8')
const view = fs.readFileSync(path.join(resources, 'assets/extension.html'), 'utf8').match(/<script>([\s\S]*)<\/script>/)[1]
let checks = 0
let completed = false
process.on('beforeExit', ()=>{
    if(!completed){console.error('FAIL regression suite left an unresolved operation'); process.exitCode = 1}
})
function check(name, callback){
    return Promise.resolve().then(callback).then(()=>{checks++; console.log(`PASS ${name}`)})
}
function harness(){
    let now = 1000000
    let nextTimer = 1
    const timers = new Map(), events = {}, writes = []
    function event(name){ return events[name] = {addListener(fn){this.listener = fn}} }
    let openTabs = [{id: 1, windowId: 10, index: 0, active: true, title: 'One', url: 'https://example.test'}]
    const ctx = vm.createContext({
        console: {log(){}, warn(){}, error(){}}, TextEncoder, AbortController, crypto: webcrypto,
        Date: class extends Date { static now(){return now} },
        setTimeout(fn, delay){const id = nextTimer++; timers.set(id, {fn, delay}); return id},
        clearTimeout(id){timers.delete(id)},
        chrome: {
            runtime: {getManifest: ()=>({name:'Test', version:'1'}), id:'fixture', getURL:x=>x, onMessage:event('message')},
            storage: {local: {get: async()=>({}), set: async value=>writes.push(value)}},
            action: {onClicked:event('action')},
            tabs: {
                query(query, callback){
                    const result = openTabs.filter(tab=>(!query.active || tab.active) && (!query.windowId || tab.windowId === query.windowId))
                    if(callback) callback(result)
                    return Promise.resolve(result)
                },
                update: async()=>{},
                onActivated:event('activate'), onUpdated:event('update'), onRemoved:event('remove'),
                onCreated:event('create'), onMoved:event('move'), onAttached:event('attach'), onDetached:event('detach')
            },
            windows: {getLastFocused:async()=>({focused:true}), update:async()=>{}}
        }
    })
    vm.runInContext(background, ctx)
    return {ctx, timers, events, writes, run:code=>vm.runInContext(code, ctx),
        setTabs(value){openTabs = value}, advance(ms){now += ms}}
}
class Element {
    constructor(tag){this.tagName = tag; this.children = []; this.attrs = {}; this.style = {}}
    setAttribute(key, value){this.attrs[key] = String(value)}
    getAttribute(key){return this.attrs[key]}
    removeAttribute(key){delete this.attrs[key]}
    append(...nodes){for(const node of nodes){node.remove(); node.parentNode = this; this.children.push(node)}}
    replaceChildren(...nodes){for(const node of this.children) node.parentNode = null; this.children = []; this.append(...nodes)}
    remove(){if(this.parentNode) this.parentNode.children = this.parentNode.children.filter(child=>child !== this); this.parentNode = null}
    getBoundingClientRect(){return {width:1200, height:600}}
}
function viewHarness(){
    let timerId = 0, urlId = 0, updates = 0, creates = 0
    const timers = new Map(), events = {}, urls = new Set(), statuses = []
    const container = new Element('div'), wrapper = new Element('div')
    const ctx = vm.createContext({
        vars:{}, isShowing:true, isHorizontal:true, console, Blob, Uint8Array, atob,
        setTimeout(fn){const id = ++timerId; timers.set(id, fn); return id}, clearTimeout:id=>timers.delete(id),
        setEvent:(name, fn)=>events[name] = fn, sendStatus:msg=>statuses.push(JSON.parse(msg)), focusOnMe(){},
        URL:{createObjectURL(){const url = 'blob:' + ++urlId; urls.add(url); return url}, revokeObjectURL:url=>urls.delete(url)},
        document: {getElementById:()=>container, querySelector:()=>wrapper, createElement:tag=>new Element(tag), addEventListener(){}},
        Swiper: class {
            constructor(selector, options){creates++; this.activeIndex = options.initialSlide; this.options = options; this.keyboard = {enable(){}, disable(){}}}
            slideTo(index, speed, callbacks = true){this.activeIndex = index; if(callbacks) this.options.on.slideChange()}
            update(){updates++}
            setTranslate(){}
            destroy(){this.destroyed = true}
        }
    })
    vm.runInContext(view, ctx)
    return {ctx, events, urls, statuses, run:code=>vm.runInContext(code, ctx),
        flush(){let count = 0; while(timers.size){const current = [...timers.entries()]; timers.clear(); for(const [,fn] of current) fn(); assert.ok(++count < 30, 'bounded timers')}},
        inject(){vm.runInContext(view, ctx)}, get creates(){return creates}, get updates(){return updates}}
}
;(async()=>{
    await check('content script creates no per-page timers or messages', ()=>{
        vm.runInNewContext(fs.readFileSync(path.join(resources, 'content.js'), 'utf8'), {})
    })
    await check('all titles arrive before screenshots, metadata retries after failed sends', async()=>{
        const h = harness(), messages = []
        h.ctx.messages = messages
        h.run('sendJsMessage = async message=>{messages.push(message); return false}')
        await h.run('checkOpenTabs()')
        assert.equal(h.run('lastConfirmedTabsSignature'), '')
        h.run('sendJsMessage = async message=>{messages.push(message); return true}')
        await h.run('checkOpenTabs()')
        assert.match(messages[1], /syncSafariTabs.*One/)
        const count = messages.length
        await h.run('checkOpenTabs()')
        assert.equal(messages.length, count)
        h.setTabs([{id:1, windowId:10, index:0, title:'Renamed'}])
        await h.run('checkOpenTabs()')
        assert.match(messages.at(-1), /Renamed/)
    })
    await check('closing the final tab clears the inventory; failed queries preserve it', async()=>{
        const h = harness(), messages = []
        h.ctx.messages = messages
        h.run('sendJsMessage = async message=>{messages.push(message); return true}')
        await h.run('checkOpenTabs()')
        h.setTabs([])
        await h.run('checkOpenTabs()')
        assert.equal(h.run('Object.keys(tabs).length'), 0)
        assert.match(messages.at(-1), /syncSafariTabs\(\[\]/)
        h.run(`tabs[99]={id:99}; chrome.tabs.query=async()=>{throw Error('fixture')}`)
        await assert.rejects(h.run('checkOpenTabs()'))
        assert.equal(h.run('tabs[99].id'), 99)
    })
    await check('tab events during inventory delivery trigger another sync', async()=>{
        const h = harness()
        h.run(`toConnect=false; contentNeedsLoad=false; sendJsMessage=async()=>{markTabsDirty(); return true}; captureScreenshotAndSend=async()=>({changed:false})`)
        await h.run('runScreenshotLoop()')
        assert.equal(h.run('tabsListDirty'), true)
    })
    await check('real tab switches request a prompt capture within the minimum gap', async()=>{
        const h = harness()
        h.run('lastCaptureAt=Date.now(); lastActiveAt=Date.now()')
        h.events.activate.listener({tabId:1})
        assert.equal(h.run('captureRequested'), true)
        assert.equal((await h.run('captureScreenshotAndSend()')).reason, 'throttled')
        h.run(`toConnect=false; contentNeedsLoad=false; tabsListDirty=false; lastOpenTabsSyncAt=Date.now(); captureScreenshotAndSend=async()=>({changed:false})`)
        h.advance(700)
        await h.run('runScreenshotLoop()')
        assert.equal(h.run('captureRequested'), true)
        assert.equal([...h.timers.values()].at(-1).delay, 300)
    })
    await check('an unfocused Safari window clears prompt capture work instead of spinning', async()=>{
        const h = harness()
        h.run(`captureRequested=true; chrome.windows.getLastFocused=async()=>({focused:false})`)
        assert.equal((await h.run('captureScreenshotAndSend()')).reason, 'windowUnfocused')
        assert.equal(h.run('captureRequested'), false)
    })
    await check('preview batches are bounded and failed sends remain pending', async()=>{
        const h = harness(), messages = []
        h.ctx.messages = messages
        h.run(`appIsShowing = true; tabs = {}; for(let id=1; id<=12; id++) tabs[id] = {id, lastStrBlob:'x'.repeat(256*1024), lastFrameFingerprint:String(id), needsResend:true}`)
        h.run('sendJsMessage = async message=>{messages.push(message); return false}')
        await h.run('sendAllTabsScreenshot({force:true})')
        assert.equal(h.run('pendingPreviewTabs().length'), 12)
        assert.equal(JSON.parse(messages[0].slice('applySafariScreenshots('.length, -1)).length, 3)
        h.advance(2000)
        h.run('sendJsMessage = async message=>{messages.push(message); return true}')
        await h.run('sendAllTabsScreenshot()')
        assert.equal(h.run('pendingPreviewTabs().length'), 9)
    })
    await check('in-flight replacement frames remain pending after acknowledgement', async()=>{
        const h = harness()
        h.run(`tabs = {1:{id:1, lastStrBlob:'old', lastFrameFingerprint:'old', needsResend:true}}; sendJsMessage = async()=>{tabs[1].lastStrBlob='new'; tabs[1].lastFrameFingerprint='new'; return true}`)
        await h.run('sendAllTabsScreenshot()')
        assert.equal(h.run('tabs[1].needsResend'), true)
        assert.equal(h.run('tabs[1].lastSentFrameFingerprint'), 'old')
    })
    await check('preview cache obeys count and byte budgets without losing tab metadata', ()=>{
        const h = harness()
        h.run(`tabs = {}; for(let id=1; id<=100; id++) tabs[id] = {id, title:'Tab '+id, lastCaptureAt:id, lastStrBlob:'x'.repeat(200000)}; trimPreviewCache()`)
        assert.equal(h.run('Object.keys(tabs).length'), 100)
        assert.ok(h.run('Object.values(tabs).filter(tab=>tab.lastStrBlob).length') <= 60)
        assert.ok(h.run('Object.values(tabs).reduce((sum,tab)=>sum+(tab.lastStrBlob?.length || 0),0)') <= 8*1024*1024)
        assert.equal(h.run('tabs[1].title'), 'Tab 1')
    })
    await check('unchanged captures and errors are paced; bitmaps close even on compression failure', async()=>{
        const h = harness()
        h.run('appIsShowing = true; lastCaptureAt = Date.now()')
        assert.equal((await h.run('captureScreenshotAndSend()')).reason, 'throttled')
        let closed = false
        h.ctx.createImageBitmap = async()=>({width:4000, height:2000, close(){closed = true}})
        h.ctx.OffscreenCanvas = class {constructor(w,h){assert.ok(w<=640 && h<=360)} getContext(){return {drawImage(){}}} async convertToBlob(){throw Error('fixture')}}
        await assert.rejects(h.run('resizeAndCompressImage({})'))
        assert.equal(closed, true)
    })
    await check('position persistence excludes private tabs and screenshot data', async()=>{
        const h = harness()
        h.run('tabs[1]={id:1}; tabs[2]={id:2, incognito:true}')
        await h.run(`handleStatusMessages(['{"type":"tabPosition","id":1,"index":4}', '{"type":"tabPosition","id":2,"index":5}'])`)
        assert.equal(JSON.stringify(h.writes), '[{"tabPosition":{"id":1,"index":4}}]')
    })
    await check('reconnect installs unchanged HTML without forcing a carousel rebuild; Reset is explicit', async()=>{
        const h = harness(), installations = [], calls = []
        h.ctx.installations = installations
        h.ctx.calls = calls
        h.run(`cachedExtensionPayload='fixture'; storage.tabPosition={id:1,index:2}; setHtmlContent=async(html,options)=>{installations.push(options.forceReload); return true}; checkOpenTabs=async()=>{calls.push('metadata')}; sendAllTabsScreenshot=async()=>{calls.push('previews')}`)
        await h.run('loadScripts()')
        assert.equal(JSON.stringify(installations), '[false]')
        assert.equal(JSON.stringify(calls), '["metadata","previews"]')
        assert.equal(h.run('pendingViewPosition.id'), 1)
        assert.equal(h.run('contentNeedsLoad'), false)
        await h.run('loadScripts({forceReload:true})')
        assert.equal(JSON.stringify(installations), '[false,true]')
    })
    await check('failed content installation stays eligible for retry', async()=>{
        const h = harness()
        h.run(`cachedExtensionPayload='fixture'; setHtmlContent=async()=>false`)
        await h.run('loadScripts()')
        assert.equal(h.run('contentNeedsLoad'), true)
        assert.equal(h.run('contentLoadInFlight'), false)
    })
    await check('compression errors do not suppress the next identical capture attempt', async()=>{
        const h = harness()
        h.run(`appIsShowing=true; captureVisibleTabAsDataUrl=async()=> 'data:image/jpeg;base64,YQ=='; resizeAndCompressImage=async()=>{throw Error('fixture')}`)
        h.ctx.fetch = async()=>({blob:async()=>({})})
        assert.equal((await h.run('captureScreenshotAndSend()')).reason, 'error')
        assert.equal(h.run('tabs[1].lastRawFrameFingerprint'), undefined)
        h.advance(2000)
        h.run(`resizeAndCompressImage=async()=>({}); blobToBase64=async()=> 'YQ=='`)
        assert.equal((await h.run('captureScreenshotAndSend()')).changed, true)
    })
    await check('normal show/hide does not rebuild content or resend cached frames', async()=>{
        const h = harness(), messages = []
        h.ctx.messages = messages
        h.run(`toConnect=false; appIsShowing=true; tabs[1]={id:1, needsResend:false}; makeRequestUrl=async()=>''; makeGetWithTimeout=async()=>({json:async()=>({appExtensionIsShowing:false})}); sendJsMessage=async msg=>{messages.push(msg); return true}`)
        await h.run('waitForStatus()')
        h.run('makeGetWithTimeout=async()=>({json:async()=>({appExtensionIsShowing:true})})')
        await h.run('waitForStatus()')
        assert.equal(messages.length, 0)
        assert.equal(h.run('tabs[1].needsResend'), false)
    })
    await check('titles are safe text and every uncaptured tab has a selectable card', ()=>{
        const h = viewHarness()
        h.run(`syncSafariTabs([{id:1,title:'<img src=x onerror=alert(1)>'},{id:2,title:'Second'}])`)
        h.flush()
        assert.equal(h.run('vars.safari.slides.length'), 2)
        assert.equal(h.run('vars.safari.tabs[1].title.textContent'), '<img src=x onerror=alert(1)>')
        assert.equal(h.run('vars.safari.tabs[1].img.hidden'), true)
    })
    await check('position survives reopen, orientation, metadata updates, closure, and content reinjection', ()=>{
        const h = viewHarness()
        h.run(`syncSafariTabs([{id:1,title:'One'},{id:2,title:'Two'},{id:3,title:'Three'}], {id:2,index:1})`)
        h.flush()
        assert.equal(h.run('vars.safari.swiper.activeIndex'), 1)
        h.events.exit(); h.run('isShowing=false')
        h.run('isHorizontal=false; isShowing=true'); h.events.show(); h.flush()
        assert.equal(h.run('vars.safari.swiper.activeIndex'), 1)
        h.run(`syncSafariTabs([{id:2,title:'Updated'},{id:3,title:'Three'}])`); h.flush()
        assert.equal(h.run('vars.safari.swiper.activeIndex'), 0)
        h.inject(); h.run(`syncSafariTabs([{id:2,title:'Updated'},{id:3,title:'Three'}])`); h.flush()
        assert.equal(h.run('vars.safari.swiper.activeIndex'), 0)
        h.run(`syncSafariTabs([{id:3,title:'Three'}])`); h.flush()
        assert.equal(h.run('vars.safari.swiper.activeIndex'), 0)
    })
    await check('preview replacement, removal and reinjection revoke every object URL', ()=>{
        const h = viewHarness()
        h.run(`syncSafariTabs([{id:1,title:'One'}]); applySafariScreenshots([{blob:'YQ==',tabInfo:{id:1,title:'One'}}])`)
        assert.equal(h.urls.size, 1)
        h.run(`applySafariScreenshots([{blob:'Yg==',tabInfo:{id:1,title:'One'}}])`)
        assert.equal(h.urls.size, 1)
        h.inject()
        assert.equal(h.urls.size, 0)
        h.run(`applySafariScreenshots([{blob:'YQ==',tabInfo:{id:1,title:'One'}}]); removeSafariTab(1)`)
        assert.equal(h.urls.size, 0)
    })
    await check('a screenshot batch avoids per-image carousel layout updates', ()=>{
        const h = viewHarness()
        h.run(`syncSafariTabs([{id:1,title:'One'},{id:2,title:'Two'}])`); h.flush()
        const before = h.updates
        h.run(`applySafariScreenshots([{blob:'YQ==',tabInfo:{id:1,title:'One'}},{blob:'Yg==',tabInfo:{id:2,title:'Two'}}])`)
        h.flush()
        assert.equal(h.updates, before)
    })
    completed = true
    console.log(`${checks} Web Extension regression checks passed.`)
})().catch(error=>{completed = true; console.error(error); process.exitCode = 1})
