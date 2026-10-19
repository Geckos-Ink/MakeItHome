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
    let lastFocusedWindow = {id:10, focused:true}
    const ctx = vm.createContext({
        console: {log(){}, warn(){}, error(){}}, TextEncoder, AbortController, crypto: webcrypto,
        Date: class extends Date { static now(){return now} },
        setTimeout(fn, delay){const id = nextTimer++; timers.set(id, {fn, delay}); return id},
        clearTimeout(id){timers.delete(id)},
        chrome: {
            runtime: {getManifest: ()=>({name:'Test', version:'1'}), id:'fixture', getURL:x=>x, onMessage:event('message')},
            storage: {local: {get: async()=>({}), set: async value=>writes.push(value)}},
            browserAction: {onClicked:event('action')},
            tabs: {
                query(query, callback){
                    const windowId = query.lastFocusedWindow || query.currentWindow ? lastFocusedWindow.id : query.windowId
                    const result = openTabs.filter(tab=>(!query.active || tab.active) && (windowId === undefined || tab.windowId === windowId))
                    if(callback) callback(result)
                    return Promise.resolve(result)
                },
                update: async()=>{},
                onActivated:event('activate'), onUpdated:event('update'), onRemoved:event('remove'),
                onCreated:event('create'), onMoved:event('move'), onAttached:event('attach'), onDetached:event('detach')
            },
            windows: {getLastFocused:async()=>({...lastFocusedWindow}), update:async()=>{}}
        }
    })
    vm.runInContext(background, ctx)
    return {ctx, timers, events, writes, run:code=>vm.runInContext(code, ctx),
        setTabs(value){openTabs = value}, setFocusedWindow(value){lastFocusedWindow = value}, advance(ms){now += ms},
        fireTimer(delay){
            const match = [...timers.entries()].find(([,timer])=>timer.delay === delay)
            assert.ok(match, `expected a ${delay} ms timer`)
            timers.delete(match[0]); now += delay
            return match[1].fn()
        }}
}
class Element {
    constructor(tag){this.tagName = tag; this.children = []; this.attrs = {}; this.style = {}}
    setAttribute(key, value){this.attrs[key] = String(value)}
    getAttribute(key){return this.attrs[key]}
    removeAttribute(key){delete this.attrs[key]}
    append(...nodes){for(const node of nodes){node.remove(); node.parentNode = this; this.children.push(node)}}
    replaceChildren(...nodes){for(const node of this.children) node.parentNode = null; this.children = []; this.append(...nodes)}
    insertBefore(node, before){
        if(node === before) return
        node.remove()
        const index = before ? this.children.indexOf(before) : this.children.length
        this.children.splice(index, 0, node); node.parentNode = this
    }
    replaceWith(node){
        const parent = this.parentNode
        if(!parent) return
        const index = parent.children.indexOf(this)
        node.remove(); parent.children[index] = node; node.parentNode = parent; this.parentNode = null
    }
    remove(){if(this.parentNode) this.parentNode.children = this.parentNode.children.filter(child=>child !== this); this.parentNode = null}
    getBoundingClientRect(){return {width:1200, height:600}}
}
function viewHarness(){
    let timerId = 0, urlId = 0, updates = 0, creates = 0, now = 1000000
    const timers = new Map(), events = {}, urls = new Set(), statuses = [], focusRequests = []
    const container = new Element('div'), wrapper = new Element('div')
    const ctx = vm.createContext({
        vars:{}, isShowing:true, isHorizontal:true, settingContentBundleId:null,curBundleId:'com-apple-Safari',console, Blob, Uint8Array, atob,
        Date: class extends Date {static now(){return now}},
        setTimeout(fn, delay){const id = ++timerId; timers.set(id, {fn,delay}); return id}, clearTimeout:id=>timers.delete(id),
        setEvent:(name, fn)=>events[name] = fn, sendStatus:msg=>statuses.push(JSON.parse(msg)), focusOnMe:status=>focusRequests.push(JSON.parse(status)),
        URL:class extends URL {
            static createObjectURL(){const url = 'blob:' + ++urlId; urls.add(url); return url}
            static revokeObjectURL(url){urls.delete(url)}
        },
        document: {getElementById:()=>container, querySelector:()=>wrapper, createElement:tag=>new Element(tag), addEventListener(){}},
        Swiper: class {
            constructor(selector, options){creates++; this.slides = [...wrapper.children]; this.activeIndex = options.initialSlide; this.options = options; this.keyboard = {enable(){}, disable(){}}}
            slideTo(index, speed, callbacks = true){this.activeIndex = index; if(callbacks) this.options.on.slideChange()}
            update(){updates++; this.slides = [...wrapper.children]}
            setTranslate(){}
            destroy(){this.destroyed = true}
        }
    })
    vm.runInContext(view, ctx)
    return {ctx, events, urls, statuses, focusRequests, run:code=>vm.runInContext(code, ctx),
        flush(){let count = 0; while(timers.size){const current = [...timers.entries()]; timers.clear(); for(const [,timer] of current){now += timer.delay || 0; timer.fn()}; assert.ok(++count < 30, 'bounded timers')}},
        advance(ms){now += ms},
        inject(force = false){if(force) vm.runInContext("vars['com-apple-Safari_forceReload']=true", ctx); vm.runInContext(view, ctx)}, get creates(){return creates}, get updates(){return updates}}
}
function seedPreviews(h, infos, position = null){
    h.run(`syncSafariTabs(${JSON.stringify(infos)}, ${JSON.stringify(position)}); applySafariScreenshots(${JSON.stringify(infos.map(tabInfo=>({blob:'YQ==',tabInfo})))})`)
}
;(async()=>{
    await check('macOS Safari declares a persistent background page and the matching toolbar entry point', ()=>{
        const manifest = JSON.parse(fs.readFileSync(path.join(resources, 'manifest.json'), 'utf8'))
        assert.equal(manifest.manifest_version,2,'Safari makes all Manifest V3 backgrounds nonpersistent')
        assert.equal(manifest.background.persistent,true)
        assert.deepEqual(manifest.background.scripts,['background.js'])
        assert.equal(manifest.browser_action.default_popup,'popup.html')
        assert.equal(manifest.action,undefined)
        const h=harness(),calls=[]
        assert.equal(h.ctx.chrome.action,undefined,'Safari MV2 need not expose the MV3 toolbar API')
        h.ctx.calls=calls
        h.run('checkConnect=()=>calls.push("connect");scheduleScreenshotLoop=delay=>calls.push(delay)')
        h.events.action.listener()
        assert.deepEqual(calls,['connect',120])
    })
    await check('Safari manifest and both extension configurations match the containing app version/build', ()=>{
        const manifest = JSON.parse(fs.readFileSync(path.join(resources, 'manifest.json'), 'utf8'))
        const project = fs.readFileSync(path.join(__dirname, '../MakeItHome.xcodeproj/project.pbxproj'), 'utf8')
        const configs = [...project.matchAll(/buildSettings = \{([\s\S]*?)\n\t\t\t\};/g)].map(match=>match[1])
        const versions = bundle=>configs.filter(config=>config.includes(`PRODUCT_BUNDLE_IDENTIFIER = ${bundle};`))
            .map(config=>({version:config.match(/MARKETING_VERSION = ([^;]+);/)[1], build:config.match(/CURRENT_PROJECT_VERSION = ([^;]+);/)[1]}))
        const app = versions('ink.geckos.MakeItHome'), extension = versions('ink.geckos.MakeItHome.WebExtension')
        assert.equal(app.length, 2)
        assert.equal(extension.length, 2)
        assert.deepEqual(extension, app)
        for(const config of extension) assert.equal(manifest.version, config.version)
    })
    await check('tab favicons render beside safe titles and update without replacing previews or position', ()=>{
        const h = viewHarness()
        seedPreviews(h, [{id:1,title:'One',favIconUrl:'https://example.test/favicon.ico'},{id:2,title:'Two'}], {id:1,index:0}); h.flush()
        const tab = h.run('vars.safari.tabs[1]'), image = tab.img, icon = tab.iconImage
        assert.equal(icon.src, 'https://example.test/favicon.ico')
        assert.equal(icon.referrerPolicy, 'no-referrer')
        icon.onload()
        assert.equal(icon.hidden, false)
        assert.equal(tab.iconFallback.hidden, true)
        h.run(`syncSafariTabs([{id:1,title:'<svg onload=alert(1)>',favIconUrl:'https://example.test/favicon.ico'},{id:2,title:'Two'}])`)
        assert.equal(tab.iconImage, icon)
        assert.equal(tab.title.textContent, '<svg onload=alert(1)>')
        const staleError = icon.onerror
        h.run(`syncSafariTabs([{id:1,title:'Updated',favIconUrl:'data:image/png;base64,YQ=='},{id:2,title:'Two'}])`)
        const replacement = tab.iconImage
        replacement.onload(); staleError()
        assert.equal(tab.iconImage, replacement)
        assert.equal(icon.onerror, null)
        assert.equal(tab.img, image)
        assert.equal(h.run('vars.safari.position.id'), 1)
        h.inject(); h.flush()
        assert.equal(tab.iconImage, replacement)
        replacement.onerror()
        assert.equal(tab.iconImage, null)
        assert.equal(tab.iconFallback.hidden, false)
        assert.equal(h.run('vars.safari.slides.length'), 2)
    })
    await check('missing, unsafe and failed favicons use a fallback without removing tab previews', ()=>{
        const h = viewHarness()
        seedPreviews(h, [{id:1,title:'One'}]); h.flush()
        const tab = h.run('vars.safari.tabs[1]')
        for(const url of ['', 'javascript:alert(1)', 'file:///tmp/icon.png', 'safari-web-extension://test/icon.png', 'https://user:pass@example.test/icon', 'data:text/html;base64,YQ==']){
            h.run(`syncSafariTabs([{id:1,title:'One',favIconUrl:${JSON.stringify(url)}}])`)
            assert.ok(!tab.iconImage)
            assert.equal(tab.iconFallback.hidden, false)
        }
        h.run(`syncSafariTabs([{id:1,title:'One',favIconUrl:'https://example.test/a.png'}])`)
        const icon = tab.iconImage
        h.inject(true)
        assert.equal(icon.onload, null)
        assert.equal(icon.onerror, null)
    })
    await check('updated HTML upgrades retained title-only cards without a new metadata delivery', ()=>{
        const h = viewHarness()
        seedPreviews(h, [{id:1,title:'One',favIconUrl:'https://example.test/icon.png'}]); h.flush()
        const tab = h.run('vars.safari.tabs[1]'), image = tab.img, slide = tab.slide
        // Simulate a retained card created by the previous title-only controller.
        h.run(`{
            const tab=vars.safari.tabs[1];releaseSafariTabIcon(tab);tab.slide.append(tab.title);tab.caption.remove();
            delete tab.caption;delete tab.icon;delete tab.iconURL;delete tab.iconFallback;
        }`)
        h.inject(); h.flush()
        assert.equal(tab.slide, slide)
        assert.equal(tab.img, image)
        assert.equal(tab.title.parentNode, tab.caption)
        assert.equal(tab.iconImage.src, 'https://example.test/icon.png')
    })
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
        h.setTabs([{id:1,windowId:10,index:0,title:'Renamed',favIconUrl:'https://example.test/icon.png'}])
        await h.run('checkOpenTabs()')
        assert.match(messages.at(-1), /"favIconUrl":"https:\/\/example.test\/icon.png"/)
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
        assert.ok([...h.timers.values()].at(-1).delay <= 300)
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
        h.run(`cachedExtensionPayload='fixture'; storage.tabPosition={id:1,index:2}; setHtmlContent=async(html,options)=>{installations.push(options.forceReload); return true}; checkOpenTabs=async()=>{calls.push('metadata');return true}; sendAllTabsScreenshot=async()=>{calls.push('previews')}`)
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
    await check('metadata-only tabs stay out of the carousel; captured titles remain safe text', ()=>{
        const h = viewHarness()
        h.run(`syncSafariTabs([{id:1,title:'<img src=x onerror=alert(1)>'},{id:2,title:'Second'}])`)
        h.flush()
        assert.equal(h.run('vars.safari.slides.length'), 0)
        assert.equal(h.run('Object.keys(vars.safari.tabs).length'), 0)
        h.run(`applySafariScreenshots([{blob:'YQ==',tabInfo:{id:1,title:'Stale title'}}])`)
        h.flush()
        assert.equal(h.run('vars.safari.slides.length'), 1)
        assert.equal(h.run('vars.safari.tabs[1].title.textContent'), '<img src=x onerror=alert(1)>')
        assert.equal(h.run('vars.safari.tabs[2]'), undefined)
    })
    await check('position survives reopen, orientation, metadata updates, closure, and content reinjection', ()=>{
        const h = viewHarness()
        seedPreviews(h, [{id:1,title:'One'},{id:2,title:'Two'},{id:3,title:'Three'}], {id:2,index:1})
        h.flush()
        assert.equal(h.run('vars.safari.swiper.activeIndex'), 1)
        h.events.exit(); h.run('isShowing=false')
        h.run('isHorizontal=false; isShowing=true'); h.events.show(); h.flush()
        assert.equal(h.run('vars.safari.swiper.activeIndex'), 1)
        h.run(`syncSafariTabs([{id:2,title:'Updated'},{id:3,title:'Three'}])`); h.flush()
        assert.equal(h.run('vars.safari.swiper.activeIndex'), 0)
        h.inject(); seedPreviews(h, [{id:2,title:'Updated'},{id:3,title:'Three'}]); h.flush()
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
        h.inject(true)
        assert.equal(h.urls.size, 0)
        h.run(`syncSafariTabs([{id:1,title:'One'}]); applySafariScreenshots([{blob:'YQ==',tabInfo:{id:1,title:'One'}}]); removeSafariTab(1)`)
        assert.equal(h.urls.size, 0)
    })
    await check('a screenshot batch avoids per-image carousel layout updates', ()=>{
        const h = viewHarness()
        seedPreviews(h, [{id:1,title:'One'},{id:2,title:'Two'}]); h.flush()
        const before = h.updates
        h.run(`applySafariScreenshots([{blob:'YQ==',tabInfo:{id:1,title:'One'}},{blob:'Yg==',tabInfo:{id:2,title:'Two'}}])`)
        h.flush()
        assert.equal(h.updates, before)
    })
    await check('closed and undecodable preview tabs cannot reappear or receive a click', ()=>{
        const h = viewHarness()
        seedPreviews(h, [{id:1,title:'One'},{id:2,title:'Two'}]); h.flush()
        h.run(`syncSafariTabs([{id:2,title:'Two'}]); applySafariScreenshots([{blob:'YQ==',tabInfo:{id:1,title:'Closed'}}]); vars.safari.tabs[2].img.onerror(); clickedOnSafariTab(1); clickedOnSafariTab(2)`)
        h.flush()
        assert.equal(h.run('vars.safari.slides.length'), 0)
        assert.equal(h.urls.size, 0)
        assert.equal(h.focusRequests.length, 0)
    })
    await check('evicting a preview removes its card without disturbing the selected remaining tab', ()=>{
        const h = viewHarness()
        seedPreviews(h, [{id:1,title:'One'},{id:2,title:'Two'}], {id:2,index:1}); h.flush()
        h.run('releaseSafariPreview(vars.safari.tabs[1]); refreshSafariSlides()'); h.flush()
        assert.equal(h.run('vars.safari.slides.length'), 1)
        assert.equal(h.run('vars.safari.swiper.activeIndex'), 0)
        assert.equal(h.run('vars.safari.slides[0].getAttribute("tabId")'), '2')
    })
    await check('click sends one combined focus/selection request with the selected position', ()=>{
        const h = viewHarness()
        seedPreviews(h, [{id:1,title:'One'},{id:2,title:'Two'}]); h.flush()
        h.run('clickedOnSafariTab(2)'); h.flush()
        assert.equal(JSON.stringify(h.focusRequests), '[{"type":"clickedOn","id":2,"index":1}]')
        assert.equal(h.statuses.filter(status=>status.type==='clickedOn').length, 0)
        const host = fs.readFileSync(path.join(__dirname, '../MakeItHome/Resources/assets/appExtensionView.html'), 'utf8')
        const focusBridge = host.match(/function focusOnMe\([^]*?\n        }/)[0]
        const messages = []
        const bridge = vm.createContext({sendMessage:message=>messages.push(message)})
        vm.runInContext(focusBridge, bridge)
        vm.runInContext('focusOnMe("selection"); focusOnMe()', bridge)
        assert.equal(JSON.stringify(messages), '[{"type":"focusOnMe","value":"selection"},{"type":"focusOnMe","value":null}]')
    })
    await check('current tab status comes from Safari without changing activity or relying on cached order', async()=>{
        const h = harness()
        h.run('tabs={99:{id:99,windowId:99,active:true}};activeTabId=99;lastActiveAt=123')
        h.setTabs([{id:1,windowId:10,active:true},{id:2,windowId:20,active:true}])
        h.setFocusedWindow({id:20,focused:true})
        assert.equal((await h.run('getCurrentTabInfo()')).id,2)
        assert.equal(h.run('lastActiveAt'),123)
        assert.equal(h.run('activeTabId'),99,'A status read has no bookkeeping side effects')
        h.setTabs([])
        assert.equal(await h.run('getCurrentTabInfo()'),null,'No tabs must resolve instead of leaving a pending Promise')
        h.ctx.chrome.tabs.query=(query,callback)=>callback([{id:0,windowId:0,active:true}])
        assert.equal((await h.run('getCurrentTabInfo()')).id,0,'Status reads also support callback-only Safari')
        h.ctx.chrome.tabs.query=async()=>{throw Error('fixture read failure')}
        await assert.rejects(h.run('getCurrentTabInfo()'),/fixture read failure/)
    })
    await check('opening a tab works from fresh Safari state in the same, another, or minimized window', async()=>{
        for(const target of [
            {windowId:10,active:false,state:'normal'},
            {windowId:10,active:true,state:'normal'},
            {windowId:20,active:false,state:'normal'},
            {windowId:20,active:true,state:'normal'},
            {windowId:20,active:true,state:'minimized'}
        ]){
            const h = harness(), calls = []
            const tab = {id:773,windowId:target.windowId,active:target.active}
            h.setTabs([tab,{id:2,windowId:10,active:target.windowId !== 10 || !target.active}])
            h.run('tabs={773:{id:773,windowId:99,active:true}};activeTabId=773')
            h.ctx.chrome.windows.get=async id=>({id,state:target.state})
            h.ctx.chrome.windows.update=async(id,options)=>{
                calls.push(['window',id,options.state])
                h.setFocusedWindow({id,focused:true})
            }
            h.ctx.chrome.tabs.update=async(id,options)=>{
                calls.push(['tab',id]); tab.active=options.active
                h.setTabs([tab])
            }
            const request=h.run('requestTabFocus(773)')
            await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(150)
            await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(400)
            assert.equal(await request,'selected',JSON.stringify(target))
            assert.deepEqual(calls.map(call=>call.slice(0,2)),[
                ['window',target.windowId],['tab',773],['window',target.windowId],['tab',773]
            ])
            assert.equal(calls[0][2],target.state === 'minimized' ? 'normal' : undefined)
        }
    })
    await check('selection verifies the queried active tab rather than trusting an active flag or update result', async()=>{
        const h=harness()
        h.setTabs([{id:2,windowId:10,active:true}])
        h.ctx.chrome.tabs.get=async()=>({id:1,windowId:10,active:true})
        const request=h.run('requestTabFocus(1)')
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(150)
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(400)
        assert.equal(await request,'failed')
        assert.equal(h.run('lastTabFocusFailureStage'),'verifyActiveTab')
    })
    await check('background-window activation and metadata cannot replace the queried current tab', async()=>{
        const h=harness()
        h.run('activeTabId=1')
        h.setTabs([{id:1,windowId:10,active:true},{id:2,windowId:20,active:true}])
        h.events.activate.listener({tabId:2,windowId:20})
        h.run('captureRequested=false')
        h.events.update.listener(2,{url:'https://example.test/changed'},{id:2,windowId:20,active:true})
        assert.equal(h.run('activeTabId'),1)
        assert.equal(h.run('captureRequested'),false)
        assert.equal((await h.run('getCurrentTabInfo()')).id,1)
    })
    await check('capture reads the selected tab in the last focused window without manufacturing activity', async()=>{
        const h=harness(),captures=[]
        h.setTabs([{id:1,windowId:10,active:true},{id:2,windowId:20,active:true}])
        h.setFocusedWindow({id:20,focused:true})
        h.run(`appIsShowing=true;activeTabId=1;lastActiveAt=123;resizeAndCompressImage=async()=>({});blobToBase64=async()=> 'YQ=='`)
        h.ctx.fetch=async()=>({blob:async()=>({})})
        h.ctx.chrome.tabs.captureVisibleTab=async windowId=>{captures.push(windowId);return 'data:image/jpeg;base64,YQ=='}
        assert.equal((await h.run('captureScreenshotAndSend()')).changed,true)
        assert.deepEqual(captures,[20])
        assert.equal(h.run('activeTabId'),2)
        assert.equal(h.run('lastActiveAt'),123)
        assert.equal(h.run('tabs[2].lastStrBlob'),'YQ==')
    })
    await check('browser awaits Safari window focus before selecting the tab', async()=>{
        const h = harness(), calls = []
        let ready
        h.ctx.chrome.windows.update = async(id, options)=>{calls.push(['window', id, options.focused]); await new Promise(resolve=>ready=resolve)}
        h.ctx.chrome.tabs.update = async(id, options)=>calls.push(['tab', id, options.active])
        const switchTask = h.run('focusOnTab(1)')
        await new Promise(resolve=>setImmediate(resolve))
        assert.equal(JSON.stringify(calls), '[["window",10,true]]')
        ready()
        await new Promise(resolve=>setImmediate(resolve))
        assert.equal(JSON.stringify(calls), '[["window",10,true]]')
        h.fireTimer(150)
        await switchTask
        assert.equal(JSON.stringify(calls), '[["window",10,true],["tab",1,true]]')
        h.setTabs([])
        await h.run('focusOnTab(1)')
        assert.equal(calls.length, 2)
    })
    await check('selection waits 150 ms, retries exactly once after 400 ms, and re-focuses its window', async()=>{
        const h = harness(), calls = []
        h.ctx.chrome.windows.update = async(id)=>calls.push(['window',id])
        h.ctx.chrome.tabs.update = async(id)=>calls.push(['tab',id])
        const request = h.run('requestTabFocus(1)')
        await new Promise(resolve=>setImmediate(resolve))
        assert.equal(JSON.stringify(calls), '[["window",10]]')
        h.fireTimer(150)
        await new Promise(resolve=>setImmediate(resolve))
        assert.equal(JSON.stringify(calls), '[["window",10],["tab",1]]')
        h.fireTimer(400)
        assert.equal(await request, 'selected')
        assert.equal(JSON.stringify(calls), '[["window",10],["tab",1],["window",10],["tab",1]]')
        assert.equal(h.run('tabFocusRetryTimer'), null)
        assert.equal(h.run('pendingTabFocusId'), null)
        assert.equal([...h.timers.values()].filter(timer=>timer.delay===400).length,0)
    })
    await check('one retry also recovers an initial API rejection', async()=>{
        const h = harness(), calls = []
        let fail = true
        h.ctx.chrome.windows.update = async(id)=>calls.push(['window',id])
        h.ctx.chrome.tabs.update = async(id)=>{calls.push(['tab',id]); if(fail){fail=false; throw Error('fixture')}}
        const request = h.run('requestTabFocus(1)')
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(150)
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(400)
        assert.equal(await request, 'selected')
        assert.equal(calls.filter(call=>call[0]==='tab').length,2)
        assert.equal(h.run('tabFocusRetryTimer'), null)
    })
    await check('a newer focus request cancels both pending selection and the older retry', async()=>{
        const h = harness(), calls = []
        h.setTabs([{id:1,windowId:10},{id:2,windowId:20}])
        h.ctx.chrome.windows.update = async(id)=>calls.push(['window',id])
        h.ctx.chrome.tabs.update = async(id)=>calls.push(['tab',id])
        const first = h.run('requestTabFocus(1)')
        await new Promise(resolve=>setImmediate(resolve))
        const second = h.run('requestTabFocus(2)')
        await new Promise(resolve=>setImmediate(resolve))
        h.fireTimer(150); await first
        h.fireTimer(150); await new Promise(resolve=>setImmediate(resolve))
        h.fireTimer(400); await second
        assert.equal(JSON.stringify(calls.filter(call=>call[0]==='tab')), '[["tab",2],["tab",2]]')
    })
    await check('late Safari activation events do not cancel the retry; closing the target does', async()=>{
        for(const action of ['activate','remove']){
            const h = harness(), calls = []
            h.ctx.chrome.tabs.update = async(id)=>calls.push(id)
            const request = h.run('requestTabFocus(1)')
            await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(150)
            await new Promise(resolve=>setImmediate(resolve))
            if(action==='activate'){
                h.events.activate.listener({tabId:2})
                assert.notEqual(h.run('tabFocusRetryTimer'),null)
                h.fireTimer(400); await request
                assert.equal(calls.length,2)
            } else {
                h.events.remove.listener(1)
                assert.equal(h.run('tabFocusRetryTimer'),null)
                assert.equal([...h.timers.values()].filter(timer=>timer.delay===400).length,0)
                assert.equal(calls.length,1)
                assert.equal(await request, 'superseded')
            }
        }
    })
    await check('WebKit bridge delivers repeated clicks and captures their owner without navigation', ()=>{
        const host = fs.readFileSync(path.join(__dirname, '../MakeItHome/Resources/assets/appExtensionView.html'), 'utf8')
        const script = host.match(/function sendMessage\(message\)[^]*?\n        function sendStatus/)[0].replace(/\n        function sendStatus$/, '')
        const messages = [], navigations = []
        const location = {set href(value){navigations.push(value)}}
        const ctx = vm.createContext({curBundleId:'com-apple-Safari', window:{location, webkit:{messageHandlers:{appExtensionMessage:{postMessage:message=>messages.push(message)}}}}})
        vm.runInContext(script, ctx)
        vm.runInContext(`sendMessage({type:'focusOnMe',value:'same'}); sendMessage({type:'focusOnMe',value:'same'}); curBundleId='other'; sendMessage({type:'status',value:'position'})`,ctx)
        assert.equal(messages.length,3)
        assert.equal(messages[0].strId,'com-apple-Safari')
        assert.equal(messages[1].strId,'com-apple-Safari')
        assert.equal(messages[2].strId,'other')
        assert.equal(navigations.length,0)
        vm.runInContext(`delete window.webkit; sendMessage({type:'focusOnMe'})`,ctx)
        assert.equal(navigations.length,1)
    })
    await check('a resolved tabs.update without an actual switch is detected and recovered by the retry', async()=>{
        const h = harness()
        h.setTabs([{id:1,windowId:10,active:false},{id:2,windowId:10,active:true}])
        let calls = 0
        h.ctx.chrome.tabs.update = async()=>{if(++calls===2) h.setTabs([{id:1,windowId:10,active:true}])}
        const request = h.run('requestTabFocus(1)')
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(150)
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(400)
        assert.equal(await request,'selected')
        assert.equal(calls,2)
    })
    await check('selection is unconfirmed when its window remains unfocused, even if the tab API resolves', async()=>{
        const h = harness()
        h.ctx.chrome.windows.getLastFocused = async()=>({id:10,focused:false})
        const request = h.run('requestTabFocus(1)')
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(150)
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(400)
        assert.equal(await request,'failed')
        assert.equal(h.run('pendingTabFocusId'),null)
    })
    await check('expired window focus operations cannot later select a tab and polling remains recoverable', async()=>{
        const h = harness(), completions = [], selections = []
        h.ctx.chrome.windows.update = ()=>new Promise(resolve=>completions.push(resolve))
        h.ctx.chrome.tabs.update = async id=>selections.push(id)
        const request = h.run('requestTabFocus(1)')
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(1200)
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(400)
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(1200)
        assert.equal(await request,'failed')
        for(const resolve of completions) resolve()
        await new Promise(resolve=>setImmediate(resolve))
        assert.deepEqual(selections,[])
    })
    await check('ACK loss redelivers the same request without repeating tab selection', async()=>{
        const h = harness(), acks = [], selections = []
        h.ctx.chrome.tabs.update = async id=>selections.push(id)
        h.ctx.fetch = async(url,options)=>{
            acks.push({url, body:JSON.parse(options.body)})
            if(acks.length===1) throw Error('lost response')
            return {ok:true,json:async()=>({status:'ok'})}
        }
        const events = JSON.stringify([{id:'fixture:1',value:JSON.stringify({type:'clickedOn',id:1,index:0})}])
        const first = h.run(`handleStatusEvents(${events})`)
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(150)
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(400)
        await first
        assert.deepEqual(selections,[1,1])
        await h.run(`handleStatusEvents(${events})`)
        assert.deepEqual(selections,[1,1])
        assert.equal(acks.length,2)
        assert.deepEqual(acks[1].body,{ids:['fixture:1']})
        assert.match(acks[1].url,/\/ackStatusMessages\?/)
    })
    await check('concurrent delivery shares in-flight completion and ACK follows the final verification', async()=>{
        const h = harness(), acks = [], selections = []
        h.ctx.chrome.tabs.update = async id=>selections.push(id)
        h.ctx.fetch = async(url,options)=>{acks.push(JSON.parse(options.body));return {ok:true,json:async()=>({status:'ok'})}}
        const events = JSON.stringify([{id:'fixture:1',value:'{"type":"clickedOn","id":1}'}])
        const first = h.run(`handleStatusEvents(${events})`)
        const duplicate = h.run(`handleStatusEvents(${events})`)
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(150)
        await new Promise(resolve=>setImmediate(resolve))
        assert.equal(acks.length,0)
        h.fireTimer(400); await Promise.all([first,duplicate])
        assert.deepEqual(selections,[1,1])
        assert.equal(acks.length,2)
    })
    await check('position-storage failures do not block requested tab selection', async()=>{
        const h = harness(), selections = []
        h.run('tabs[1]={id:1}; chrome.storage.local.set=async()=>{throw Error("fixture")}')
        h.ctx.chrome.tabs.update = async id=>selections.push(id)
        const task = h.run('handleStatusMessages([\'{"type":"clickedOn","id":1,"index":0}\'])')
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(150)
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(400); await task
        assert.deepEqual(selections,[1,1])
    })
    await check('poll timeout covers the response body and a late stale body cannot execute selection', async()=>{
        const h = harness(), selections = []
        let resolveBody, signal
        h.run('toConnect=false')
        h.ctx.fetch = async(url,options)=>{
            assert.match(url,/reliableStatus=1/)
            signal = options.signal
            return {ok:true,json:()=>new Promise(resolve=>resolveBody=resolve)}
        }
        h.ctx.chrome.tabs.update = async id=>selections.push(id)
        const poll = h.run('waitForStatus()')
        await new Promise(resolve=>setImmediate(resolve))
        h.fireTimer(3500); await poll
        assert.equal(signal.aborted,true)
        assert.equal(h.run('waitForStatusInFlight'),false)
        resolveBody({status:'ok',statusEvents:[{id:'stale',value:'{"type":"clickedOn","id":1}'}]})
        await new Promise(resolve=>setImmediate(resolve))
        assert.deepEqual(selections,[])
    })
    await check('failed polls retain requests for the next response, and authentication errors never execute statuses', async()=>{
        const h = harness(), acks = [], selections = []
        h.run('toConnect=false')
        let polls = 0
        h.ctx.chrome.tabs.update = async id=>selections.push(id)
        const events = [{id:'native:1',value:'{"type":"clickedOn","id":1}'}]
        h.ctx.fetch = async(url,options)=>{
            if(url.includes('/ackStatusMessages')){acks.push(JSON.parse(options.body)); return {ok:true,json:async()=>({status:'ok'})}}
            if(++polls===1) throw Error('lost poll response')
            return {ok:true,json:async()=>({status:'ok',statusEvents:events})}
        }
        await h.run('waitForStatus()')
        assert.deepEqual(selections,[])
        const retry = h.run('waitForStatus()')
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(150)
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(400); await retry
        assert.deepEqual(selections,[1,1])
        assert.equal(acks.length,1)
        h.ctx.fetch = async()=>({ok:true,json:async()=>({status:'error',description:'invalidSecret',statusEvents:events})})
        await h.run('waitForStatus()')
        assert.equal(h.run('toConnect'),true)
        assert.deepEqual(selections,[1,1])
    })
    await check('receipt cache stays bounded while preserving IDs still pending on the server', async()=>{
        const h = harness()
        h.ctx.fetch = async()=>({ok:true,json:async()=>({status:'ok'})})
        const pinned = {id:'pinned',value:'{"type":"ignored"}'}
        for(let batch=0; batch<10; batch++){
            const events = [pinned, ...Array.from({length:127},(_,i)=>({id:`${batch}:${i}`,value:'{"type":"ignored"}'}))]
            await h.run(`handleStatusEvents(${JSON.stringify(events)})`)
            assert.ok(h.run('statusReceipts.size')<=128)
            assert.equal(h.run('statusReceipts.has("pinned")'),true)
        }
    })
    await check('a stalled connection response releases reconnect state and the next connection can succeed', async()=>{
        const h = harness()
        h.ctx.fetch = async()=>({ok:true,json:()=>new Promise(()=>{})})
        const connect = h.run('connect()')
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(5000)
        assert.equal(await connect,false)
        assert.equal(h.run('connectInFlight'),false)
        h.advance(2000)
        h.ctx.fetch = async()=>({ok:true,json:async()=>({status:'ok',secret:'fixture-only'})})
        assert.equal(await h.run('connect()'),true)
        assert.equal(h.run('toConnect'),false)
    })
    await check('preview delivery times out through the body and retries once without leaving a pending send', async()=>{
        const h = harness()
        let fetches = 0
        h.run('toConnect=false')
        h.ctx.fetch = async()=>{fetches++; return {ok:true,json:()=>new Promise(()=>{})}}
        const send = h.run('sendJsMessage("synthetic")')
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(5000)
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(120)
        await new Promise(resolve=>setImmediate(resolve)); h.fireTimer(5000)
        assert.equal(await send,false)
        assert.equal(fetches,2)
    })
    await check('reopen reports cached preview IDs and old image errors cannot delete a replacement', ()=>{
        const h = viewHarness()
        seedPreviews(h,[{id:1,title:'One'},{id:2,title:'Two'}]); h.flush()
        const oldImage = h.run('vars.safari.tabs[1].img'), oldError = oldImage.onerror
        h.run(`applySafariScreenshots([{blob:'Yg==',tabInfo:{id:1,title:'One'}}])`)
        assert.notEqual(oldImage,h.run('vars.safari.tabs[1].img'))
        assert.equal(oldImage.onerror,null)
        oldError()
        assert.equal(h.run('vars.safari.slides.length'),2)
        assert.equal(h.urls.size,2)
        h.run('clickedOnSafariTab(2)');h.events.exit();h.run('isShowing=false;isShowing=true');h.events.show();h.flush()
        assert.equal(h.run('vars.safari.swiper.activeIndex'),1)
        assert.deepEqual(h.statuses.findLast(status=>status.type==='safariViewReady'),{type:'safariViewReady',inventoryReady:true,position:{id:2,index:1},previewIds:[1,2]})
        assert.equal(h.run('vars.safari.tabs[2].title.textContent'),'Two')
    })
    await check('show callbacks observe visible host state before they run', ()=>{
        const host = fs.readFileSync(path.join(__dirname, '../MakeItHome/Resources/assets/appExtensionView.html'),'utf8')
        const show = host.match(/function showAppExtension\([^]*?\n        function exitingAppExtension/)[0].replace(/\n        function exitingAppExtension$/,'')
        const calls=[]
        const ctx=vm.createContext({isShowing:false,isHorizontal:true,curBundleId:'',vars:{},$:()=>({hide(){},show(){}}),calls})
        vm.runInContext(show,ctx)
        vm.runInContext(`vars['com-apple-Safari_event_show']=()=>calls.push(isShowing);showAppExtension('com.apple.Safari',false)`,ctx)
        assert.deepEqual(calls,[true])
    })
    await check('missing view previews recover from the Safari cache after clicking and content reconstruction', async()=>{
        const h = harness(), v = viewHarness()
        const infos=[{id:1,windowId:10,index:0,active:true,title:'One'}, {id:2,windowId:10,index:1,title:'Two'}, {id:3,windowId:10,index:2,title:'Three'}]
        h.setTabs(infos)
        h.ctx.deliver = message=>v.run(message)
        h.run(`toConnect=false; contentNeedsLoad=false; appIsShowing=true; sendJsMessage=async message=>{deliver(message);return true}`)
        await h.run('checkOpenTabs()')
        h.run(`for(const tab of Object.values(tabs)){tab.lastStrBlob='YQ==';tab.lastFrameFingerprint=String(tab.id);tab.needsResend=true}`)
        await h.run('sendAllTabsScreenshot()');v.flush()
        assert.equal(v.run('vars.safari.slides.length'),3)
        v.run('clickedOnSafariTab(2)');v.events.exit();v.run('isShowing=false')
        h.ctx.chrome.tabs.update=async id=>h.setTabs(infos.map(tab=>({...tab,active:tab.id===id})))
        const focus=h.run(`handleStatusMessages(['{"type":"clickedOn","id":2,"index":1}'])`)
        await new Promise(resolve=>setImmediate(resolve));h.fireTimer(150)
        await new Promise(resolve=>setImmediate(resolve));h.fireTimer(400);await focus
        v.inject(true);v.run('isShowing=true');v.events.show();v.flush()
        assert.equal(v.run('vars.safari.slides.length'),0)
        const ready=JSON.stringify(v.statuses.findLast(status=>status.type==='safariViewReady'))
        await h.run(`handleStatusMessages([${JSON.stringify(ready)}])`)
        h.run('captureScreenshotAndSend=async()=>({changed:false})')
        await h.run('runScreenshotLoop()');v.flush()
        assert.equal(v.run('vars.safari.slides.length'),3)
        assert.equal(v.run('vars.safari.tabs[2].title.textContent'),'Two')
        assert.equal(v.run('vars.safari.swiper.activeIndex'),1)
        assert.equal(h.run('pendingPreviewTabs().length'),0)
        await h.run(`handleStatusMessages(['{"type":"safariViewReady","previewIds":[1,2,3]}'])`)
        assert.equal(h.run('pendingPreviewTabs().length'),0,'Retained cards must not resend frames on normal reopen')
    })
    await check('partial recovery sends missing previews only, and a racing old ACK cannot clear recovery work', async()=>{
        const h=harness(),messages=[]
        h.ctx.messages=messages
        h.run(`tabs={1:{id:1,lastStrBlob:'YQ==',lastFrameFingerprint:'1',lastSentFrameFingerprint:'1'},2:{id:2,lastStrBlob:'Yg==',lastFrameFingerprint:'2',lastSentFrameFingerprint:'2'}}; sendJsMessage=async message=>{messages.push(message);return true}`)
        await h.run(`handleStatusMessages(['{"type":"safariViewReady","previewIds":[1]}'])`)
        assert.equal(h.run('pendingPreviewTabs().map(tab=>tab.id).join()'),'2')
        await h.run('sendAllTabsScreenshot()')
        assert.match(messages[0],/"id":2/)
        assert.doesNotMatch(messages[0],/"id":1/)
        h.run(`tabs[2].needsResend=true; sendJsMessage=async()=>{await handleStatusMessage('{"type":"safariViewReady","previewIds":[]}');return true}`)
        await h.run('sendAllTabsScreenshot()')
        assert.equal(h.run('tabs[2].needsResend'),true)
        h.run(`sendJsMessage=async()=>{await handleStatusMessage('{"type":"safariViewReady","previewIds":[1,2]}');return true}`)
        await h.run('sendAllTabsScreenshot({maxTabs:2})')
        assert.equal(h.run('tabs[2].needsResend'),false,'A retained in-flight image needs no extra resend on normal reopen')
    })
    await check('callback-only Safari APIs select exact non-sequential IDs, including tab/window zero', async()=>{
        for(const id of [0,800003]){
            const h=harness(),calls=[],windowId=id===0?0:99
            let tab={id,windowId,active:false},focused={id:windowId,focused:false}
            h.setTabs([tab]); h.setFocusedWindow(focused)
            h.ctx.chrome.tabs.get=(target,callback)=>{assert.equal(target,id);h.ctx.setTimeout(()=>callback({...tab}),40)}
            h.ctx.chrome.windows.update=(target,options,callback)=>{
                calls.push(['window',target]);h.ctx.setTimeout(()=>{focused={id:target,focused:true};h.setFocusedWindow(focused);callback(focused)},80)
            }
            h.ctx.chrome.tabs.update=(target,options,callback)=>{
                calls.push(['tab',target]);h.ctx.setTimeout(()=>{tab.active=true;callback({...tab})},50)
            }
            h.ctx.chrome.windows.getLastFocused=callback=>{h.ctx.setTimeout(()=>callback(focused),30)}
            const request=h.run(`requestTabFocus(${id})`)
            const tick=async delay=>{h.fireTimer(delay);await new Promise(resolve=>setImmediate(resolve))}
            await new Promise(resolve=>setImmediate(resolve))
            await tick(40)
            assert.deepEqual(calls,[['window',windowId]])
            await tick(80);await tick(150);await tick(40)
            await tick(50);await tick(30);await tick(40)
            await tick(400);await tick(40);await tick(80);await tick(40)
            await tick(50);await tick(30);await tick(40)
            assert.equal(await request,'selected')
            assert.deepEqual(calls,[['window',windowId],['tab',id],['window',windowId],['tab',id]])
        }
    })
    await check('a rejected window-focus API cannot suppress selection within the active Safari window', async()=>{
        const h=harness(),calls=[]
        h.setTabs([{id:1,windowId:10,active:false},{id:2,windowId:10,active:true}])
        h.ctx.chrome.windows.update=async()=>{throw Error('window focus unsupported')}
        h.ctx.chrome.tabs.update=async id=>{calls.push(id);h.setTabs([{id,windowId:10,active:true}])}
        const request=h.run('requestTabFocus(1)')
        await new Promise(resolve=>setImmediate(resolve));h.fireTimer(150)
        await new Promise(resolve=>setImmediate(resolve));h.fireTimer(400)
        assert.equal(await request,'selected')
        assert.deepEqual(calls,[1,1])
    })
    await check('a tab moved during activation focuses its new window and uses the same exact tab ID', async()=>{
        const h=harness(),windows=[],selections=[]
        let tab={id:773,windowId:10,active:false},focused=10
        h.setTabs([tab])
        h.ctx.chrome.tabs.get=async id=>{assert.equal(id,773);return {...tab}}
        h.ctx.chrome.windows.update=async id=>{windows.push(id);focused=id;h.setFocusedWindow({id,focused:true});if(id===10)tab.windowId=20}
        h.ctx.chrome.tabs.update=async id=>{selections.push(id);tab.active=true}
        h.ctx.chrome.windows.getLastFocused=async()=>({id:focused,focused:true})
        const request=h.run('requestTabFocus(773)')
        await new Promise(resolve=>setImmediate(resolve));h.fireTimer(150)
        await new Promise(resolve=>setImmediate(resolve));h.fireTimer(400)
        assert.equal(await request,'selected')
        assert.deepEqual(windows,[10,20,20])
        assert.deepEqual(selections,[773,773])
    })
    await check('minimized target windows restore before selection; wrong-ID results never select a substitute', async()=>{
        const h=harness(),options=[]
        h.ctx.chrome.windows.get=async()=>({id:10,state:'minimized'})
        h.ctx.chrome.windows.update=async(id,value)=>options.push(value)
        const request=h.run('requestTabFocus(1)')
        await new Promise(resolve=>setImmediate(resolve));h.fireTimer(150)
        await new Promise(resolve=>setImmediate(resolve));h.fireTimer(400);await request
        assert.equal(options[0].state,'normal')
        h.ctx.chrome.tabs.get=async()=>({id:99,windowId:10,active:true})
        h.ctx.chrome.tabs.update=async()=>{throw Error('must not select substitute')}
        const invalid=h.run('requestTabFocus(1)')
        await new Promise(resolve=>setImmediate(resolve));h.fireTimer(400)
        assert.equal(await invalid,'failed')
        assert.equal(h.run('lastTabFocusFailureStage'),'resolveTab')
    })
    await check('preview arrival order and active-tab metadata cannot reorder the logical carousel', ()=>{
        const h=viewHarness()
        h.run(`syncSafariTabs([{id:91,title:'First'},{id:3,title:'Second'},{id:70,title:'Third'}]);applySafariScreenshots([{blob:'YQ==',tabInfo:{id:70}}])`);h.flush()
        h.run(`applySafariScreenshots([{blob:'YQ==',tabInfo:{id:91}}])`);h.flush()
        assert.equal(h.run('vars.safari.slides.map(slide=>slide.getAttribute("tabId")).join()'),'91,70')
        assert.equal(h.run('safariPositionIndex()'),1)
        h.run(`applySafariScreenshots([{blob:'YQ==',tabInfo:{id:3}}]);syncSafariTabs([{id:70,title:'Third',active:true},{id:3,title:'Renamed'},{id:91,title:'First'}])`);h.flush()
        assert.equal(h.run('vars.safari.slides.map(slide=>slide.getAttribute("tabId")).join()'),'91,3,70')
        assert.equal(h.run('vars.safari.swiper.activeIndex'),2)
    })
    await check('incoming cards wait during navigation and preserve the current tab after the gesture', ()=>{
        const h=viewHarness()
        seedPreviews(h,[{id:91,title:'First'},{id:3,title:'Second'},{id:70,title:'Third'}]);h.flush()
        h.run(`noteSafariInteraction({type:'keydown',key:'ArrowDown'});vars.safari.swiper.slideTo(1,0);syncSafariTabs([{id:91},{id:3},{id:70},{id:4}]);applySafariScreenshots([{blob:'YQ==',tabInfo:{id:4}}])`)
        assert.equal(h.run('vars.safari.slides.length'),3)
        assert.equal(h.run('vars.safari.position.id'),3)
        const updates=h.updates
        h.run(`noteSafariInteraction({type:'keydown',key:'ArrowDown'});vars.safari.swiper.slideTo(2,0)`)
        assert.equal(h.updates,updates)
        h.flush()
        assert.equal(h.run('vars.safari.slides.length'),4)
        assert.equal(h.run('vars.safari.position.id'),70)
        assert.equal(h.run('vars.safari.swiper.activeIndex'),2)
    })
    await check('duplicate images and content reinjection retain cached nodes, URLs, order and selected tab', ()=>{
        const h=viewHarness()
        seedPreviews(h,[{id:91,title:'First'},{id:3,title:'Second'},{id:70,title:'Third'}]);h.flush()
        h.run('clickedOnSafariTab(3)')
        const image=h.run('vars.safari.tabs[3].img'),url=h.run('vars.safari.tabs[3].previewURL'),updates=h.updates
        h.run(`applySafariScreenshots([{blob:'YQ==',tabInfo:{id:3}}])`);h.flush()
        assert.equal(h.run('vars.safari.tabs[3].img'),image)
        assert.equal(h.run('vars.safari.tabs[3].previewURL'),url)
        assert.equal(h.updates,updates)
        h.inject();h.flush()
        assert.equal(h.run('vars.safari.tabs[3].img'),image)
        assert.equal(h.run('vars.safari.tabs[3].previewURL'),url)
        assert.equal(h.run('vars.safari.slides.map(slide=>slide.getAttribute("tabId")).join()'),'91,3,70')
        assert.equal(h.run('vars.safari.swiper.activeIndex'),1)
        assert.equal(h.urls.size,3)
    })
    await check('cache eviction protects the selected tab without exceeding preview budgets', ()=>{
        const h=viewHarness(),infos=Array.from({length:120},(_,i)=>({id:i+1,title:'Tab '+(i+1)}))
        h.run(`syncSafariTabs(${JSON.stringify(infos)});applySafariScreenshots(${JSON.stringify(infos.slice(0,60).map(tabInfo=>({tabInfo,blob:'YQ=='})))})`);h.flush()
        h.run('clickedOnSafariTab(2)');h.advance(2000)
        h.run(`applySafariScreenshots(${JSON.stringify(infos.slice(60).map(tabInfo=>({tabInfo,blob:'Yg=='})))})`);h.flush()
        assert.equal(h.urls.size,60)
        assert.ok(h.run('vars.safari.tabs[2].previewURL'))
        assert.equal(h.run('vars.safari.slides[vars.safari.swiper.activeIndex].getAttribute("tabId")'),'2')
    })
    await check('a warm view-ready report causes no metadata or image resend', async()=>{
        const h=harness()
        h.run(`tabs[1]={id:1,lastStrBlob:'YQ==',lastFrameFingerprint:'same',lastSentFrameFingerprint:'same'};lastConfirmedTabsSignature='warm';tabsListDirty=false`)
        await h.run(`handleStatusMessage('{"type":"safariViewReady","inventoryReady":true,"previewIds":[1]}')`)
        assert.equal(h.run('lastConfirmedTabsSignature'),'warm')
        assert.equal(h.run('tabsListDirty'),false)
        assert.equal(h.run('pendingPreviewTabs().length'),0)
    })
    await check('a cold WebKit page restores saved non-private position with its missing cached previews', async()=>{
        const h=harness(),v=viewHarness()
        h.setTabs([{id:1,windowId:10,index:0,title:'One'},{id:2,windowId:10,index:1,title:'Two'}])
        h.ctx.deliver=message=>v.run(message)
        h.run(`appIsShowing=true;storage.tabPosition={id:2,index:1};tabs={1:{id:1,lastStrBlob:'YQ==',lastFrameFingerprint:'1',lastSentFrameFingerprint:'1'},2:{id:2,lastStrBlob:'Yg==',lastFrameFingerprint:'2',lastSentFrameFingerprint:'2'}};sendJsMessage=async message=>{deliver(message);return true}`)
        await h.run(`handleStatusMessage('{"type":"safariViewReady","inventoryReady":false,"position":null,"previewIds":[]}')`)
        await h.run('checkOpenTabs()');await h.run('sendAllTabsScreenshot()');v.flush()
        assert.equal(v.run('vars.safari.swiper.activeIndex'),1)
        assert.equal(v.run('vars.safari.position.id'),2)
        assert.equal(h.run('pendingViewPosition'),null)
    })
    await check('direct tab/window read rejections still allow exact-ID inventory resolution and window activation', async()=>{
        const h=harness(),windows=[]
        h.ctx.chrome.tabs.get=async()=>{throw Error('read unsupported')}
        h.ctx.chrome.windows.get=async()=>{throw Error('read unsupported')}
        h.ctx.chrome.windows.update=async id=>windows.push(id)
        const request=h.run('requestTabFocus(1)')
        await new Promise(resolve=>setImmediate(resolve));h.fireTimer(150)
        await new Promise(resolve=>setImmediate(resolve));h.fireTimer(400)
        assert.equal(await request,'selected')
        assert.deepEqual(windows,[10,10])
    })
    await check('browser-side logical order survives window/index changes and a cold native view replay', async()=>{
        const h=harness(),messages=[]
        h.ctx.messages=messages
        h.run('sendJsMessage=async message=>{messages.push(message);return true}')
        h.setTabs([{id:91,windowId:10,index:0},{id:3,windowId:10,index:1},{id:70,windowId:20,index:0}])
        await h.run('checkOpenTabs()')
        h.setTabs([{id:70,windowId:10,index:0},{id:91,windowId:20,index:1},{id:3,windowId:20,index:0}])
        await h.run('checkOpenTabs()')
        assert.equal(h.run('safariCarouselOrder.join()'),'91,3,70')
        await h.run(`handleStatusMessage('{"type":"safariViewReady","inventoryReady":false,"position":null,"previewIds":[]}')`)
        await h.run('checkOpenTabs()')
        const replay=JSON.parse(messages.at(-1).slice('syncSafariTabs('.length,-1).replace(/,null$/,''))
        assert.deepEqual(replay.map(tab=>tab.id),[91,3,70])
        h.setTabs([{id:91,windowId:20,index:1},{id:4,windowId:20,index:0}])
        await h.run('checkOpenTabs()')
        assert.equal(h.run('safariCarouselOrder.join()'),'91,4')
    })
    await check('placeholder/invalid tab IDs never enter the preview inventory; zero remains selectable', async()=>{
        const h=harness(),v=viewHarness(),messages=[]
        h.setTabs([{id:-1,windowId:10,title:'Placeholder'},{id:1.5,windowId:10,title:'Invalid'},{id:0,windowId:10,title:'Valid zero'}])
        h.ctx.messages=messages
        h.run('sendJsMessage=async message=>{messages.push(message);return true}')
        await h.run('checkOpenTabs()')
        assert.equal(h.run('Object.keys(tabs).join()'),'0')
        assert.equal(h.run('normalizeTabInfo({id:-1})'),null)
        v.run(`syncSafariTabs([{id:-1},{id:0}]);applySafariScreenshots([{blob:'YQ==',tabInfo:{id:-1}},{blob:'Yg==',tabInfo:{id:0}}])`);v.flush()
        assert.equal(v.run('vars.safari.slides.length'),1)
        assert.equal(v.run('vars.safari.slides[0].getAttribute("tabId")'),'0')
    })
    await check('title and inventory refresh during capture preserve its stable tab state', async()=>{
        const h=harness()
        h.run(`appIsShowing=true; sendJsMessage=async()=>true; resizeAndCompressImage=async()=>({}); blobToBase64=async()=> 'YQ=='`)
        h.ctx.fetch=async()=>({blob:async()=>({})})
        h.ctx.chrome.tabs.captureVisibleTab=(id,options,callback)=>{
            h.setTabs([{id:1,windowId:10,index:0,active:true,title:'Renamed',url:'https://example.test'}])
            h.events.update.listener(1,{title:'Renamed'},{id:1,windowId:10,index:0,active:true,title:'Renamed',url:'https://example.test'})
            h.run('checkOpenTabs()').then(()=>callback('data:image/jpeg;base64,YQ=='))
        }
        assert.equal((await h.run('captureScreenshotAndSend()')).changed,true)
        assert.equal(h.run('tabs[1].title'),'Renamed')
    })
    await check('switching away and back during capture cannot cache another tab image', async()=>{
        const h=harness()
        h.run(`appIsShowing=true; resizeAndCompressImage=async()=>({}); blobToBase64=async()=> 'YQ=='`)
        h.ctx.fetch=async()=>({blob:async()=>({})})
        h.ctx.chrome.tabs.captureVisibleTab=(id,options,callback)=>{
            h.events.activate.listener({tabId:2,windowId:10})
            h.events.activate.listener({tabId:1,windowId:10})
            callback('data:image/jpeg;base64,YQ==')
        }
        assert.equal((await h.run('captureScreenshotAndSend()')).changed,false)
        assert.equal(h.run('tabs[1].lastStrBlob'),undefined)
        assert.equal(h.run('captureRequested'),true,'The later switch still needs a capture')
    })
    await check('stalled capture releases the refresh loop and ignores its late callback', async()=>{
        const h=harness()
        h.timers.clear() // Isolate the operation deadline from background startup timers.
        let completeCapture
        h.run(`toConnect=false;contentNeedsLoad=false;appIsShowing=true;tabsListDirty=false;lastOpenTabsSyncAt=Date.now();resizeAndCompressImage=async()=>({});blobToBase64=async()=> 'YQ=='`)
        h.ctx.fetch=async()=>({blob:async()=>({})})
        h.ctx.chrome.tabs.captureVisibleTab=(id,options,callback)=>{completeCapture=callback}
        const loop=h.run('runScreenshotLoop()')
        await new Promise(resolve=>setImmediate(resolve))
        h.fireTimer(h.run('screenshotPolicy.captureTimeoutMs'))
        await loop
        assert.equal(h.run('screenshotInProgress'),false)
        completeCapture('data:image/jpeg;base64,YQ==')
        await new Promise(resolve=>setImmediate(resolve))
        assert.equal(h.run('tabs[1].lastStrBlob'),undefined)
        h.advance(2000)
        h.ctx.chrome.tabs.captureVisibleTab=(id,options,callback)=>callback('data:image/jpeg;base64,YQ==')
        assert.equal((await h.run('captureScreenshotAndSend()')).changed,true)
    })
    await check('failed metadata delivery cannot acknowledge previews that the view would ignore', async()=>{
        const h=harness(),v=viewHarness(),messages=[]
        h.ctx.deliver=message=>{messages.push(message);return v.run(message)}
        h.run(`toConnect=false;contentNeedsLoad=false;appIsShowing=true;captureScreenshotAndSend=async()=>({changed:false});tabs[1]={id:1,lastStrBlob:'YQ==',lastFrameFingerprint:'frame',needsResend:true};sendJsMessage=async message=>!message.startsWith('syncSafariTabs') && (deliver(message),true)`)
        await h.run('runScreenshotLoop()')
        assert.equal(messages.length,0)
        assert.equal(h.run('tabs[1].needsResend'),true)
        h.run('sendJsMessage=async message=>{deliver(message);return true}')
        await h.run('runScreenshotLoop()');v.flush()
        assert.equal(v.run('vars.safari.slides.length'),1)
        assert.equal(h.run('tabs[1].needsResend'),false)
    })
    await check('title-only changes do not re-encode or resend identical preview pixels', async()=>{
        const h=harness()
        let encodes=0
        h.run(`appIsShowing=true; blobToBase64=async()=> 'YQ=='`)
        h.ctx.chrome.tabs.captureVisibleTab=(id,options,callback)=>callback('data:image/jpeg;base64,YQ==')
        h.ctx.resizeAndCompressImage=async()=>{encodes++;return {}}
        h.ctx.fetch=async()=>({blob:async()=>({})})
        assert.equal((await h.run('captureScreenshotAndSend()')).changed,true)
        h.run('tabs[1].needsResend=false')
        h.setTabs([{id:1,windowId:10,index:0,active:true,title:'Changed title',url:'https://example.test'}])
        h.advance(2000)
        assert.equal((await h.run('captureScreenshotAndSend()')).reason,'sameRawFrame')
        assert.equal(encodes,1)
        assert.equal(h.run('tabs[1].needsResend'),false)
        assert.equal(h.run('tabs[1].title'),'Changed title')
    })
    await check('frame fingerprints detect changes outside the old sampled JPEG regions', ()=>{
        const h=harness()
        assert.notEqual(h.run(`makeFrameFingerprint('a'.repeat(2000))`),h.run(`makeFrameFingerprint('a'.repeat(400)+'b'+'a'.repeat(1599))`))
    })
    await check('capture awaits callback-only Safari query and capture APIs', async()=>{
        const h=harness()
        h.run(`appIsShowing=true;resizeAndCompressImage=async()=>({});blobToBase64=async()=> 'YQ=='`)
        h.ctx.fetch=async()=>({blob:async()=>({})})
        h.ctx.chrome.tabs.query=(query,callback)=>callback([{id:1,windowId:10,index:0,active:true,title:'One',url:'https://example.test'}])
        h.ctx.chrome.tabs.captureVisibleTab=(id,options,callback)=>callback('data:image/jpeg;base64,YQ==')
        assert.equal((await h.run('captureScreenshotAndSend()')).changed,true)
    })
    await check('an expired inventory query cannot remove cached previews when its callback eventually arrives', async()=>{
        const h=harness()
        h.timers.clear()
        let completeQuery
        h.run(`tabs[1]={id:1,lastStrBlob:'YQ=='};sendJsMessage=async()=>true`)
        h.ctx.chrome.tabs.query=(query,callback)=>{completeQuery=callback}
        const sync=h.run('checkOpenTabs()')
        const rejected=assert.rejects(sync,/timed out/)
        await new Promise(resolve=>setImmediate(resolve));h.fireTimer(h.run('screenshotPolicy.captureTimeoutMs'));await rejected
        completeQuery([])
        await new Promise(resolve=>setImmediate(resolve))
        assert.equal(h.run('tabs[1].lastStrBlob'),'YQ==')
    })
    await check('title tickers cannot postpone a scheduled screenshot refresh indefinitely', async()=>{
        const h=harness()
        h.run('globalThis.refreshRuns=0;runScreenshotLoop=async()=>{refreshRuns++};scheduleScreenshotLoop(120)')
        const timer=h.run('screenshotLoopTimeout')
        for(let i=0;i<20;i++){
            h.advance(50)
            h.events.update.listener(1,{title:'Ticker '+i},{id:1,windowId:10,active:true,title:'Ticker '+i})
        }
        assert.equal(h.run('screenshotLoopTimeout'),timer)
        await h.fireTimer(120)
        assert.equal(h.run('refreshRuns'),1)
    })
    await check('background-page navigation cannot discard a valid foreground capture', async()=>{
        const h=harness()
        h.run(`appIsShowing=true;resizeAndCompressImage=async()=>({});blobToBase64=async()=> 'YQ=='`)
        h.ctx.fetch=async()=>({blob:async()=>({})})
        h.ctx.chrome.tabs.captureVisibleTab=(id,options,callback)=>{
            h.events.update.listener(2,{status:'loading',url:'https://background.test'},{id:2,windowId:10,active:false,url:'https://background.test'})
            callback('data:image/jpeg;base64,YQ==')
        }
        assert.equal((await h.run('captureScreenshotAndSend()')).changed,true)
    })
    await check('a waiting receive delivers a newer click while the older selection is stalled', async()=>{
        const h=harness(),requests=[],selected=[]
        let releaseOld,focusCalls=0
        h.setTabs([{id:1,windowId:10,active:true},{id:2,windowId:10,active:false}])
        h.run('toConnect=false')
        h.ctx.chrome.windows.update=()=>++focusCalls===1 ? new Promise(resolve=>releaseOld=resolve) : Promise.resolve()
        h.ctx.chrome.tabs.update=async id=>{selected.push(id);h.setTabs([{id:1,windowId:10,active:id===1},{id:2,windowId:10,active:id===2}])}
        h.ctx.fetch=async(url,options)=>{
            if(url.includes('/ackStatusMessages'))return {ok:true,json:async()=>({status:'ok'})}
            requests.push({url,options})
            const id=requests.length
            return {ok:true,json:async()=>({status:'ok',statusWaitSupported:true,statusEvents:[{id:'click:'+id,value:JSON.stringify({type:'clickedOn',id})}]})}
        }
        const first=h.run('waitForStatus()')
        await new Promise(resolve=>setImmediate(resolve))
        assert.equal(h.run('waitForStatusInFlight'),false,'Receive must not wait for command execution')
        const second=h.run('waitForStatus()')
        await new Promise(resolve=>setImmediate(resolve))
        assert.match(requests[1].url,/waitMs=20000/)
        assert.deepEqual(JSON.parse(requests[1].options.body),{receivedIds:['click:1']})
        h.fireTimer(150)
        await new Promise(resolve=>setImmediate(resolve));h.fireTimer(400);await second
        releaseOld()
        await first
        assert.deepEqual(selected,[2,2],'Old work must never select after the newer click')
        assert.equal(h.run('captureRequested'),true,'Selection requests a fresh frame without relying on a Safari activation event')
    })
    await check('a batch starts its newest click without waiting for an older stalled command', async()=>{
        const h=harness(),selected=[]
        h.setTabs([{id:1,windowId:10,active:false},{id:2,windowId:10,active:true}])
        h.ctx.chrome.tabs.update=async id=>selected.push(id)
        h.ctx.fetch=async()=>({ok:true,json:async()=>({status:'ok'})})
        const batch=h.run(`handleStatusEvents([{id:'old',value:'{"type":"clickedOn","id":1}'},{id:'new',value:'{"type":"clickedOn","id":2}'}])`)
        await new Promise(resolve=>setImmediate(resolve));h.fireTimer(150)
        await new Promise(resolve=>setImmediate(resolve));h.fireTimer(400);await batch
        assert.deepEqual(selected,[2,2])
    })
    await check('the waiting response deadline includes its body and a late body cannot run commands', async()=>{
        const h=harness(),selected=[]
        let finishBody,signal
        h.run('toConnect=false;statusWaitSupported=true')
        h.ctx.fetch=async(url,options)=>{
            assert.match(url,/waitMs=20000/)
            signal=options.signal
            return {ok:true,json:()=>new Promise(resolve=>finishBody=resolve)}
        }
        h.ctx.chrome.tabs.update=async id=>selected.push(id)
        const receive=h.run('waitForStatus()')
        await new Promise(resolve=>setImmediate(resolve));h.fireTimer(23500);await receive
        assert.equal(signal.aborted,true)
        assert.equal(h.run('waitForStatusInFlight'),false)
        finishBody({status:'ok',statusWaitSupported:true,statusEvents:[{id:'expired',value:'{"type":"clickedOn","id":1}'}]})
        await new Promise(resolve=>setImmediate(resolve))
        assert.deepEqual(selected,[])
    })
    await check('an older native server retains ordinary polling without a waiting body', async()=>{
        const h=harness(),requests=[]
        h.run('toConnect=false')
        h.ctx.fetch=async(url,options)=>{requests.push({url,options});return {ok:true,json:async()=>({status:'ok',nextPollInMs:700,statusEvents:[]})}}
        await h.run('waitForStatus()');await h.run('waitForStatus()')
        assert.equal(h.run('statusWaitSupported'),false)
        assert.ok(requests.every(req=>!req.url.includes('waitMs') && !req.options.body))
    })
    completed = true
    console.log(`${checks} Web Extension regression checks passed.`)
})().catch(error=>{completed = true; console.error(error); process.exitCode = 1})
