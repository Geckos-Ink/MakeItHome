// Run with: node Tests/WebExtensionConnectionTests.cjs
// Production browser reconnect paths; synthetic credentials and no real network/storage.
const assert = require('node:assert/strict')
const {createHash} = require('node:crypto')
const {harness} = require('./WebExtensionTests.cjs')
let completed = false, checks = 0
process.on('beforeExit', ()=>{
    if(!completed){console.error('FAIL connection suite left an unresolved operation'); process.exitCode = 1}
})
async function until(predicate){
    for(let i=0; i<100 && !predicate(); i++) await new Promise(resolve=>setTimeout(resolve,2))
    assert.ok(predicate(),'asynchronous fixture did not reach the expected request')
}
const reply = value=>({ok:true,json:async()=>value})
async function connected(){
    const h = harness(), saved = {}
    h.ctx.chrome.storage.local.get = async()=>({...saved})
    h.ctx.chrome.storage.local.set = async value=>{Object.assign(saved,value); h.writes.push({...value})}
    h.ctx.fetch = async()=>reply({status:'ok',secret:'approved-fixture-secret'})
    assert.equal(await h.run('connect()'),true)
    return {h,saved}
}
async function check(name, callback){await callback();checks++;console.log('PASS '+name)}
;(async()=>{
    for(const error of ['invalidToken','missingToken','appNotConnected','invalidSecret']){
        for(const path of ['status','preview','content']){
            await check(`${path} ${error} reconnects with saved approval and a fresh token`,async()=>{
                const {h,saved} = await connected()
                h.advance(20000) // Well beyond native post-approval grace.
                h.ctx.fetch = async()=>reply({status:'error',description:error})
                if(path === 'status') await h.run('waitForStatus()')
                if(path === 'preview') assert.equal(await h.run('sendJsMessage("synthetic")'),false)
                if(path === 'content') assert.equal(await h.run('setHtmlContent("synthetic")'),false)
                assert.equal(h.run('toConnect'),true)
                assert.equal(h.run('secret'),saved.secret)
                let requests = 0
                h.ctx.fetch = async url=>{
                    requests++
                    const query = new URL(url).searchParams
                    assert.equal(query.get('secret'),saved.secret)
                    const expected = createHash('sha256').update(`${saved.secret}:${Math.floor(h.run('Date.now()')/1000)}`).digest('hex')
                    assert.equal(query.get('token'),expected)
                    return reply({status:'ok',secret:saved.secret})
                }
                assert.equal(await h.run('connect()'),true)
                assert.equal(requests,1)
                assert.equal(h.run('toConnect'),false)
                assert.ok(h.writes.every(write=>write.secret !== ''))
            })
        }
    }
    for(const path of ['status','preview','content']){
        await check(`a retired ${path} response cannot invalidate a newer accepted connection`,async()=>{
            const {h,saved} = await connected()
            let release
            h.ctx.fetch = async url=>url.includes('/connect?')
                ? reply({status:'ok',secret:'replacement-fixture-secret'})
                : new Promise(resolve=>{release=resolve})
            const pending = h.run(path === 'status' ? 'waitForStatus()' : path === 'preview'
                ? 'sendJsMessage("synthetic")' : 'setHtmlContent("synthetic")')
            await until(()=>typeof release === 'function')
            h.run('toConnect=true')
            assert.equal(await h.run('connect()'),true)
            release(reply({status:'error',description:'invalidSecret'}))
            await pending
            assert.equal(h.run('toConnect'),false)
            assert.equal(saved.secret,'replacement-fixture-secret')
        })
    }
    await check('a retired status success cannot replay commands after reconnect',async()=>{
        const {h} = await connected(), commands = []
        h.ctx.commands=commands
        h.run('handleStatusEvents=events=>commands.push(...events)')
        let release
        h.ctx.fetch = async url=>url.includes('/connect?')
            ? reply({status:'ok',secret:'replacement-fixture-secret'})
            : new Promise(resolve=>{release=resolve})
        const pending = h.run('waitForStatus()')
        await until(()=>typeof release === 'function')
        assert.equal(await h.run('connect()'),true)
        release(reply({status:'ok',statusEvents:[{id:'retired',value:'synthetic'}]}))
        await pending
        assert.deepEqual(commands,[])
    })
    await check('denial/deferred approval remains disconnected without erasing credentials',async()=>{
        const {h,saved} = await connected()
        h.run('toConnect=true')
        h.advance(20000)
        h.ctx.fetch = async()=>reply({status:'error',description:'connectionDeferred'})
        assert.equal(await h.run('connect()'),false)
        assert.equal(h.run('toConnect'),true)
        assert.equal(saved.secret,'approved-fixture-secret')
        assert.equal(h.run('secret'),saved.secret)
    })
    await check('a successful response without credentials cannot establish a connection',async()=>{
        const h = harness()
        h.ctx.fetch = async()=>reply({status:'ok'})
        assert.equal(await h.run('connect()'),false)
        assert.equal(h.run('toConnect'),true)
    })
    await check('connection completion waits for credential storage',async()=>{
        const h = harness()
        let release, done = false
        h.ctx.chrome.storage.local.set = ()=>new Promise(resolve=>{release=resolve})
        h.ctx.fetch = async()=>reply({status:'ok',secret:'approved-fixture-secret'})
        const pending = h.run('connect()').then(value=>{done=true;return value})
        await until(()=>typeof release === 'function')
        assert.equal(done,false)
        release()
        assert.equal(await pending,true)
    })
    await check('a stalled storage write is bounded and retains runtime proof for the next reconnect',async()=>{
        const h = harness()
        h.ctx.chrome.storage.local.set = ()=>new Promise(()=>{})
        h.ctx.fetch = async()=>reply({status:'ok',secret:'approved-fixture-secret'})
        const pending = h.run('connect()')
        await until(()=>[...h.timers.values()].some(timer=>timer.delay === 1200))
        h.fireTimer(1200)
        assert.equal(await pending,true)
        assert.equal(h.run('secret'),'approved-fixture-secret')
        h.ctx.chrome.storage.local.set = async()=>{}
        h.ctx.fetch = async url=>{
            assert.equal(new URL(url).searchParams.get('secret'),'approved-fixture-secret')
            return reply({status:'ok',secret:'approved-fixture-secret'})
        }
        assert.equal(await h.run('connect()'),true)
    })
    for(const path of ['preview','content']){
        await check(`a retired ${path} success cannot acknowledge delivery to the newer connection`,async()=>{
            const {h} = await connected()
            let release
            h.ctx.fetch = async url=>url.includes('/connect?')
                ? reply({status:'ok',secret:'replacement-fixture-secret'})
                : new Promise(resolve=>{release=resolve})
            const pending = h.run(path === 'preview' ? 'sendJsMessage("synthetic")' : 'setHtmlContent("synthetic")')
            await until(()=>typeof release === 'function')
            assert.equal(await h.run('connect()'),true)
            release(reply({status:'ok'}))
            assert.equal(await pending,false)
        })
    }
    completed = true
    console.log(`${checks} connection regression checks passed.`)
})().catch(error=>{completed=true;console.error(error);process.exitCode=1})
