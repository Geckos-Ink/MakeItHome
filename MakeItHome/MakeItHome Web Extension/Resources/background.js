// background.js

///
/// image-blob-reduce
///

/*var reducer = new window.ImageBlobReduce({
  pica: window.ImageBlobReduce.pica({ features: [ 'js' ] })
});*/ // to implement?

///
///
///

async function sendJsMessage(msg){
    if(toConnect){
        console.warn("sendJsMessage blocked: not connected")
        return false
    }
    
    let req = await makeRequestUrl('/sendJSMessage')
    
    let body = {
        jsMessage: msg
    }
    
    try{
        let json = await makePost(req, body)
        if(json.status === "error"){
            if(json.description === "appNotConnected" || json.description === "invalidSecret" || json.description === "invalidToken" || json.description === "missingToken"){
                resetSecret = true
                toConnect = true
            }
            return false
        }
        return true
    } catch(err) {
        console.warn('Extension preview delivery failed')
        return false
    }
}

///
///
///

const bundleId = "com.apple.Safari"
const manifest = chrome.runtime.getManifest()
const extensionName = manifest?.name || "Unknown extension"
const extensionVersion = manifest?.version || "0"
const extensionClientId = chrome.runtime?.id || `${extensionName}@${extensionVersion}`

let secret = ""
let tokenCache = {
    secret: "",
    second: 0,
    token: ""
}

let storage = {}

let toConnect = true

function setSecret(nextSecret){
    secret = nextSecret || ""
    tokenCache = {
        secret: "",
        second: 0,
        token: ""
    }
}

async function sha256Hex(value){
    const encoder = new TextEncoder()
    const bytes = encoder.encode(value)
    const digest = await crypto.subtle.digest("SHA-256", bytes)
    const arr = Array.from(new Uint8Array(digest))
    return arr.map((byte)=>byte.toString(16).padStart(2, "0")).join("")
}

async function getRollingToken(secretValue){
    if(!secretValue){
        return ""
    }

    const nowSecond = Math.floor(Date.now() / 1000)
    if(tokenCache.secret === secretValue && tokenCache.second === nowSecond && tokenCache.token){
        return tokenCache.token
    }

    const token = await sha256Hex(`${secretValue}:${nowSecond}`)
    tokenCache = {
        secret: secretValue,
        second: nowSecond,
        token
    }
    return token
}

async function makeRequestUrl(req, options = {}){
    let url = 'http://127.0.0.1:19494/appExtension'+req
    
    if(url.includes('?'))
        url += '&'
    else
        url += '?'

    const params = []
    params.push('bundleId='+encodeURIComponent(bundleId))

    if(options.includeExtensionMeta){
        params.push('extensionName='+encodeURIComponent(extensionName))
        params.push('extensionVersion='+encodeURIComponent(extensionVersion))
        params.push('clientId='+encodeURIComponent(extensionClientId))
    }

    const effectiveSecret = options.secret !== undefined ? options.secret : secret
    if(effectiveSecret){
        params.push('secret='+encodeURIComponent(effectiveSecret))
        const token = await getRollingToken(effectiveSecret)
        if(token){
            params.push('token='+encodeURIComponent(token))
        }
    }

    url += params.join("&")

    return url
}

async function storageGet(){
    storage = await chrome.storage.local.get()
    return storage
}

function storageSave(){
    chrome.storage.local.set({secret: storage.secret || ""})
}

/**
 * Removes a wide range of invalid, problematic, or non-standard Unicode characters from a string.
 * This function is designed to be comprehensive, targeting characters that can cause issues
 * in data interchange, rendering, or XML/HTML parsing.
 *
 * What it removes:
 * 1. C0 and C1 Control Characters: Most non-printable control characters, while preserving
 * essential whitespace (tab, line feed, carriage return).
 * 2. Unicode Non-characters: Code points permanently reserved and guaranteed not to be characters
 * (e.g., U+FDD0-FDEF, U+FFFE, U+FFFF).
 * 3. Private Use Area (PUA) Characters: These are for custom use and not standardized, making
 * them unsuitable for public data interchange (U+E000-F8FF).
 * 4. Deprecated and Unassigned Characters: This includes format characters and other symbols
 * that are either deprecated or explicitly unassigned.
 *
 * @param {string} inputString The string to be sanitized.
 * @returns {string} A new string with the invalid characters removed.
 */
function sanitizeStringExtensive(inputString) {
    // Ensure the input is a valid string before proceeding.
    if (typeof inputString !== 'string') {
        console.error("Invalid input: The provided value is not a string.");
        return "";
    }

    // This comprehensive regular expression is designed to find and remove a wide
    // range of undesirable characters. The 'u' flag enables full Unicode support,
    // correctly handling surrogate pairs for characters outside the Basic Multilingual Plane (BMP).
    const invalidUnicodeRegex = new RegExp([
        // C0 Control Characters (excluding tab, line feed, carriage return)
        '[\u0000-\u0008\u000B\u000C\u000E-\u001F]',
        // DELETE character
        '[\u007F]',
        // C1 Control Characters
        '[\u0080-\u009F]',
        // Unicode Non-characters
        '[\uFDD0-\uFDEF]',
        // More Non-characters (last two code points of each plane)
        // Using a pattern that matches \uFFFE, \uFFFF, \u1FFFE, \u1FFFF, etc.
        // This part matches the high surrogate part of such characters.
        '[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]',
        // Private Use Areas (PUA)
        '[\uE000-\uF8FF]',
        // Specials block, containing replacement characters etc. We target the non-characters here.
        '[\uFFFE\uFFFF]'
    ].join('|'), 'gu'); // 'g' for global search, 'u' for unicode support

    // Replace all matched invalid characters with an empty string.
    return inputString.replace(invalidUnicodeRegex, '');
}


// Function to read the text file
async function readTextFile(asset) {
    try {
        let aurl = chrome.runtime.getURL(asset)
        console.log("asset url: ", aurl)
        
        // Fetch the text file from the assets
        const response = await fetch(aurl);
        // Ensure the fetch was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Read the content as text
        let text = await response.text();
        //console.log(text); // Log the text to the console
        
        return text
    } catch (error) {
        console.error("Error reading the text file:", error);
    }
}


async function makeGet(url){
    return await fetchJSONWithTimeout(url, {}, 5000)
}

async function makePost(url, body, maxRetries = 1){
    if(typeof body === "object"){
        body = JSON.stringify(body)
    }

    for(let attempt = 0; attempt <= maxRetries; attempt++){
        try{
            return await fetchJSONWithTimeout(url, {
                method: "POST",
                body: body,
                headers: {
                    "Content-Type": "application/json",
                    "Body-Length": body.length.toString()
                }
            }, 5000)
        }
        catch(error){
            if(attempt >= maxRetries){
                throw error
            }
            await new Promise((resolve)=>setTimeout(resolve, 120 * (attempt + 1)))
        }
    }

    throw new Error("unreachable")
}

function waitFor(ms, cbk){
    setTimeout(cbk, ms)
}

// Function to get the current active tab information
function getCurrentTabInfo() {
    return new Promise((res, err)=>{
        // Query the active tab in the current window
        chrome.tabs.query({ active: true, currentWindow: true })
            .then((tabs) => {
                if (tabs.length === 0) {
                    console.log('No active tab found');
                    return;
                }

                // Assuming the first tab in the array is the active tab
                let activeTab = tabs[0];
                
                if(false){
                    console.log('Tab ID:', activeTab.id);
                    console.log('Tab URL:', activeTab.url);
                    console.log('Tab Title:', activeTab.title);
                    console.log("activeTab", activeTab)
                }
                
                confirmTabOrder(activeTab.id)

                // You can also access other properties of the tab if needed
                // console.log('Tab Index:', activeTab.index);
                // console.log('Tab Window ID:', activeTab.windowId);
                
                res(activeTab)
            })
            .catch((error) => {
                console.error('Error getting active tab:', error);
                err(error)
            });
    })
}

let tabs = {}
let orderedTabs = []
let safariCarouselOrder = [] // Runtime ID order, independent of capture/MRU priority.

const screenshotPolicy = {
    minCaptureGapMs: 1000,
    appShowingCaptureMs: 1500,
    activeCaptureMs: 4000,
    idleCaptureMs: 15000,
    deepIdleAfterMs: 5 * 60 * 1000,
    deepIdleCaptureMs: 30000,
    tabSyncIntervalMs: 30000,
    statusPollActiveMs: 700,
    statusPollIdleMs: 3200,
    statusRequestTimeoutMs: 3500,
    statusMaxInFlightMs: 12000,
    captureTimeoutMs: 3500,
    maxSendWhenShowing: 4,
    maxPreviewCount: 60,
    maxPreviewChars: 8 * 1024 * 1024,
    maxFrameChars: 256 * 1024,
    maxBatchChars: 768 * 1024,
    maxSendWhenIdle: 1
}

let activeTabId = null
let lastActiveAt = 0
let lastCaptureAt = 0
let captureRequested = false
let captureRevision = 0 // Switch/navigation edges, including an away-and-back switch.
let lastOpenTabsSyncAt = 0
let tabsListDirty = true
let tabsListRevision = 0
function markTabsDirty(){
    tabsListDirty = true
    tabsListRevision++
}
let lastConfirmedTabsSignature = ""

let screenshotLoopTimeout = null
let screenshotInProgress = false
let pendingViewPosition = null
let connectionRetryMs = 1000
let cachedExtensionPayload = null
let contentNeedsLoad = true
let contentLoadInFlight = false
let previewRetryAfter = 0
let previewDeliveryRevision = 0

let waitForStatusInFlight = false
let waitForStatusStartedAt = 0
let waitForStatusRunId = 0
let lastServerSuggestedStatusPollMs = null
let connectionBlockedUntil = 0

function spliceOrderedTabs(index){
    orderedTabs.splice(index, 1)
}

let tabFocusRunId = 0
let tabFocusRetryTimer = null
let tabFocusRetryResolve = null
let pendingTabFocusId = null

function cancelTabFocusRetry(){
    tabFocusRunId++
    clearTimeout(tabFocusRetryTimer)
    tabFocusRetryTimer = null
    if(tabFocusRetryResolve) tabFocusRetryResolve()
    tabFocusRetryResolve = null
    pendingTabFocusId = null
}

function boundedOperation(operation, timeoutMs, onTimeout = ()=>{}){
    let timer
    return Promise.race([
        Promise.resolve().then(operation),
        new Promise((_, reject)=>{
            timer = setTimeout(()=>{onTimeout(); reject(new Error('Operation timed out'))}, timeoutMs)
        })
    ]).finally(()=>clearTimeout(timer))
}

// Safari supports callback-style Chrome APIs as well as Promise implementations.
// Await the actual completion in either case; awaiting undefined ends too early.
function safariAPI(owner, method, ...args){
    return new Promise((resolve, reject)=>{
        const callback = value=>{
            const failure = chrome.runtime.lastError
            if(failure) reject(new Error('Safari API rejected '+method))
            else resolve(value)
        }
        try {
            const result = owner[method](...args, callback)
            if(result && typeof result.then === 'function') result.then(resolve, reject)
        } catch(error){ reject(error) }
    })
}

async function resolveSafariTab(id){
    if(!Number.isSafeInteger(id) || id < 0) return null
    if(typeof chrome.tabs.get === 'function'){
        try {
            const tab = await safariAPI(chrome.tabs, 'get', id)
            return tab && tab.id === id ? tab : null
        } catch(error){
            // Older Safari implementations can reject a direct lookup. A fresh
            // inventory may resolve only the same ID, never a URL/index alias.
        }
    }
    const inventory = await getAllOpenTabs()
    return inventory[id] || null
}

let lastTabFocusFailureStage = null // runtime diagnostic; no titles, URLs or credentials
async function focusOnTab(id, options = {}){
    const isCurrent = ()=> (options.runId === undefined || options.runId === tabFocusRunId) &&
                           (!options.isCurrent || options.isCurrent())
    lastTabFocusFailureStage = 'resolveTab'
    let tab = await resolveSafariTab(id)
    if(!tab || !isCurrent()) return false
    const focusWindow = async windowId=>{
        lastTabFocusFailureStage = 'focusWindow'
        const options = {focused: true}
        if(typeof chrome.windows.get === 'function'){
            try {
                const window = await safariAPI(chrome.windows, 'get', windowId)
                if(window?.state === 'minimized') options.state = 'normal'
            } catch(error){ /* A read failure must not suppress window activation. */ }
        }
        if(!isCurrent()) return
        try {
            await safariAPI(chrome.windows, 'update', windowId, options)
        } catch(error){
            // A window-focus rejection must not suppress selection of a valid
            // tab in the Safari app that native code has already activated.
        }
    }
    await focusWindow(tab.windowId)
    if(!isCurrent()) return false
    const settleMs = options.settleMs ?? 150
    if(settleMs > 0) await new Promise(resolve=>setTimeout(resolve, settleMs))
    if(!isCurrent()) return false
    // The tab can move/detach while its window is being activated. Re-resolve
    // the exact ID rather than using an old window/index or substituting a tab.
    const current = await resolveSafariTab(id)
    if(!current || !isCurrent()) return false
    if(current.windowId !== tab.windowId){
        await focusWindow(current.windowId)
        if(!isCurrent()) return false
    }
    tab = current
    lastTabFocusFailureStage = 'selectTab'
    await safariAPI(chrome.tabs, 'update', id, {active: true})
    if(!isCurrent()) return false
    lastTabFocusFailureStage = 'verifyTab'
    const [selected, focusedWindow] = await Promise.all([
        resolveSafariTab(id), safariAPI(chrome.windows, 'getLastFocused')
    ])
    const confirmed = isCurrent() && selected?.id === id && selected.active === true &&
                      focusedWindow?.id === selected.windowId && focusedWindow.focused === true
    if(confirmed) lastTabFocusFailureStage = null
    else if(isCurrent()) lastTabFocusFailureStage = selected?.id !== id ? 'verifyTabId' :
        selected.active !== true ? 'verifyActiveTab' : 'verifyFocusedWindow'
    return confirmed
}

async function requestTabFocus(id){
    cancelTabFocusRetry()
    const runId = tabFocusRunId
    pendingTabFocusId = id
    async function attempt(settleMs){
        let expired = false
        try {
            return await boundedOperation(()=>focusOnTab(id, {
                runId, settleMs, isCurrent:()=>!expired
            }), 1200, ()=>{expired = true})
        } catch(error){
            return false
        }
    }
    try {
        await attempt(150)
        if(runId !== tabFocusRunId) return 'superseded'
        // Complete the receipt only after the single requested retry finishes.
        await new Promise(resolve=>{
            tabFocusRetryResolve = resolve
            tabFocusRetryTimer = setTimeout(()=>{
                tabFocusRetryTimer = null
                tabFocusRetryResolve = null
                resolve()
            }, 400)
        })
        if(runId !== tabFocusRunId) return 'superseded'
        const selected = await attempt(0)
        if(runId !== tabFocusRunId) return 'superseded'
        if(!selected) console.warn('Safari tab selection unconfirmed after one retry; tab ID:', id, 'stage:', lastTabFocusFailureStage)
        return selected ? 'selected' : 'failed'
    } finally {
        if(runId === tabFocusRunId) pendingTabFocusId = null
    }
}

const maxOpenedTabs = 10
// markActive: only real user interactions (tab switch, navigation, click) should
// refresh lastActiveAt. The capture loop also confirms the order, and if it marked
// activity too, the loop would keep itself in the fast "active" gear forever
function confirmTabOrder(id, markActive = true){
    activeTabId = id
    if(markActive){
        lastActiveAt = Date.now()
    }

    let index = orderedTabs.indexOf(id)
    if(index >= 0){
        spliceOrderedTabs(index)
    }
    
    orderedTabs.push(id)
    
    while(orderedTabs.length > maxOpenedTabs)
        spliceOrderedTabs(0)
}

function normalizeTabInfo(tab){
    if(!tab || !Number.isSafeInteger(tab.id) || tab.id < 0){
        return null
    }
    
    return {
        id: tab.id,
        windowId: tab.windowId,
        index: tab.index,
        active: !!tab.active,
        pinned: !!tab.pinned,
        title: tab.title || "",
        url: tab.url || "",
        favIconUrl: tab.favIconUrl || "",
        incognito: !!tab.incognito
    }
}

function makeFrameFingerprint(str){
    if(!str){
        return "0:empty"
    }
    
    let first = 2166136261, second = 5381
    for(let i=0; i<str.length; i++){
        first = Math.imul(first ^ str.charCodeAt(i), 16777619)
        second = Math.imul(second, 33) ^ str.charCodeAt(i)
    }
    return `${str.length}:${first >>> 0}:${second >>> 0}`
}

async function getAllOpenTabs(){
    const allTabs = await boundedOperation(()=>safariAPI(chrome.tabs, 'query', {}), screenshotPolicy.captureTimeoutMs)
    return Object.fromEntries(allTabs.filter(tab=>tab && Number.isSafeInteger(tab.id) && tab.id >= 0).map(tab=>[tab.id, tab]))
}

async function checkOpenTabs(options = {}){
    const tabsObj = await getAllOpenTabs()
    for(const source of Object.values(tabsObj)){
        const tab = normalizeTabInfo(source)
        Object.assign(tabs[tab.id] ||= {}, tab)
    }
    // A successful empty query is authoritative too (e.g. the final window
    // closed). API failures reject and retain the previous inventory.
    for(const id of Object.keys(tabs)){
        if(!tabsObj[id]) delete tabs[id]
    }
    orderedTabs = orderedTabs.filter(id=>tabsObj[id])

    // Title metadata does not wait for a screenshot. Keep existing tab
    // order in the view; newly discovered tabs follow Safari window/index order.
    const inventory = Object.values(tabsObj).map(normalizeTabInfo)
        .sort((a, b)=>a.windowId - b.windowId || a.index - b.index)
    safariCarouselOrder = safariCarouselOrder.filter(id=>tabsObj[id])
    const known = new Set(safariCarouselOrder)
    for(const info of inventory){
        if(!known.has(info.id)){safariCarouselOrder.push(info.id); known.add(info.id)}
    }
    const tabInfos = safariCarouselOrder.map(id=>normalizeTabInfo(tabsObj[id]))
    let tabsSignature = JSON.stringify(tabInfos)
    if(tabsSignature !== lastConfirmedTabsSignature){
        let sent = await sendJsMessage('syncSafariTabs('+tabsSignature+','+JSON.stringify(pendingViewPosition)+')')
        if(sent){
            lastConfirmedTabsSignature = tabsSignature
            pendingViewPosition = null
        } else {
            markTabsDirty()
            return false
        }
    }

    if(options.refreshPreviews === true){
        await sendAllTabsScreenshot({force: true, onlyFocused: false})
    }
    return true
}

// currently used due to api limitations
let appIsShowing = false

let nextWaitForStatusTimeout = null;
function getStatusPollIntervalMs(){
    if(Number.isFinite(lastServerSuggestedStatusPollMs)){
        return Math.max(160, lastServerSuggestedStatusPollMs)
    }

    if(appIsShowing){
        return screenshotPolicy.statusPollActiveMs
    }
    
    return screenshotPolicy.statusPollIdleMs
}

function nextWaitForStatus(delayMs = getStatusPollIntervalMs()){
    clearTimeout(nextWaitForStatusTimeout)
    nextWaitForStatusTimeout = setTimeout(() => {
        waitForStatus();
    }, Math.max(160, delayMs));
}

// Include the response body in the deadline; fetch alone ends at the headers.
async function fetchJSONWithTimeout(url, options = {}, timeoutMs = 3500){
    const controller = new AbortController()
    return boundedOperation(async()=>{
        const response = await fetch(url, {...options, signal: controller.signal})
        if(!response.ok) throw new Error('Local extension request failed')
        return await response.json()
    }, timeoutMs, ()=>controller.abort())
}

async function handleStatusMessage(msg){
    const status = JSON.parse(msg)
    if(status.type === 'safariViewReady'){
        if(!Array.isArray(status.previewIds)) return 'ignored'
        const present = new Set(status.previewIds.filter(Number.isInteger).slice(0, screenshotPolicy.maxPreviewCount))
        const deliveryRevision = ++previewDeliveryRevision
        let missing = false
        for(const tab of Object.values(tabs)){
            if(tab.lastStrBlob && !present.has(tab.id)){
                missing = true
                tab.needsResend = true
                tab.previewDeliveryRevision = deliveryRevision
            }
        }
        // Recovery needs authoritative metadata before image batches, even
        // when the Safari inventory itself has not changed since the last send.
        if(missing || status.inventoryReady !== true){
            if(!status.position) pendingViewPosition = storage.tabPosition || null
            lastConfirmedTabsSignature = ''
            markTabsDirty()
            scheduleScreenshotLoop(100)
        }
        return 'ready'
    }
    if(status.type === 'clickedOn' || status.type === 'tabPosition'){
        const id = Number(status.id), index = Number(status.index)
        if(!Number.isInteger(id)) return 'ignored'
        const focus = status.type === 'clickedOn' ? requestTabFocus(id) : null
        if(Number.isInteger(index) && index >= 0 && tabs[id] && !tabs[id].incognito){
            storage.tabPosition = {id, index}
            try { await boundedOperation(()=>chrome.storage.local.set({tabPosition: storage.tabPosition}), 1200) }
            catch(error){ console.warn('Safari carousel position could not be saved') }
        }
        if(focus){
            const outcome = await focus
            scheduleScreenshotLoop(120)
            return outcome
        }
    }
    return 'ignored'
}

async function handleStatusMessages(statusMessages){
    for(const msg of statusMessages || []){
        try { await handleStatusMessage(msg) }
        catch(error){ console.warn('Invalid or failed extension status message') }
    }
}

// Runtime-only receipts: repeated delivery after an ACK loss cannot repeat a
// selection. In-flight entries share their completion rather than racing it.
const statusReceipts = new Map()
async function handleStatusEvents(events){
    if(!Array.isArray(events)) return
    const ids = []
    const pendingIds = new Set(events.map(event=>event.id))
    for(const event of events.slice(0, 128)){
        if(typeof event.id !== 'string' || event.id.length > 128 || !event.id ||
           typeof event.value !== 'string') continue
        let receipt = statusReceipts.get(event.id)
        if(!receipt){
            // Native mailbox capacity is also 128. Do not evict unfinished work.
            if(statusReceipts.size >= 128){
                const oldest = [...statusReceipts].find(([id,value])=>value.done && !pendingIds.has(id))
                if(!oldest) continue
                statusReceipts.delete(oldest[0])
            }
            receipt = {done: false}
            statusReceipts.set(event.id, receipt)
            receipt.promise = handleStatusMessage(event.value).catch(()=>{
                console.warn('Extension status request failed')
                return 'failed'
            }).then(outcome=>{receipt.done = true; return outcome})
        }
        await receipt.promise
        ids.push(event.id)
    }
    if(!ids.length) return
    try {
        const req = await makeRequestUrl('/ackStatusMessages')
        const result = await fetchJSONWithTimeout(req, {
            method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ids})
        }, 1200)
        if(result.status !== 'ok') throw new Error('Acknowledgement rejected')
    } catch(error){
        // Keep receipts: the next poll redelivers and retries the ACK only.
        console.warn('Extension acknowledgement pending; will retry on redelivery')
    }
}

async function waitForStatus() {
    if(toConnect){
        lastServerSuggestedStatusPollMs = null
        nextWaitForStatus(screenshotPolicy.statusPollIdleMs)
        return
    }

    let now = Date.now()
    if(waitForStatusInFlight){
        if(now - waitForStatusStartedAt > screenshotPolicy.statusMaxInFlightMs){
            console.warn("waitForStatus watchdog released a stalled poll")
            waitForStatusInFlight = false
            waitForStatusStartedAt = 0
        }
        else {
            nextWaitForStatus()
            return
        }
    }
    
    if(waitForStatusInFlight){
        nextWaitForStatus()
        return
    }
    
    waitForStatusInFlight = true
    waitForStatusStartedAt = now
    let runId = ++waitForStatusRunId

    try {
        let req = await makeRequestUrl('/checkStatus?reliableStatus=1')
        let res = await fetchJSONWithTimeout(req, {}, screenshotPolicy.statusRequestTimeoutMs)
        if(runId !== waitForStatusRunId) return
        if(Number.isFinite(res.nextPollInMs)){
            lastServerSuggestedStatusPollMs = res.nextPollInMs
        } else {
            lastServerSuggestedStatusPollMs = null
        }

        
        if (res.status === "error") {
            if (res.description === "appNotConnected") {
                toConnect = true;
            }
            
            if (res.description === "invalidSecret" || res.description === "invalidToken" || res.description === "missingToken") {
                resetSecret = true;
                toConnect = true;
            }

            if(toConnect){
                lastServerSuggestedStatusPollMs = null
            }
        }
        
        if(res.status === 'ok'){
            if(Array.isArray(res.statusEvents)) await handleStatusEvents(res.statusEvents)
            else await handleStatusMessages(res.statusMessages) // older native versions
        }
        if(runId !== waitForStatusRunId) return
        let nextAppIsShowing = !!res.appExtensionIsShowing
        if(appIsShowing != nextAppIsShowing){
            appIsShowing = nextAppIsShowing
                
            if(appIsShowing){
                markTabsDirty()
                scheduleScreenshotLoop(100)
            }
        }
        
    } catch (err) {
        if(runId === waitForStatusRunId){
            console.warn('Extension status poll failed; pending requests remain queued')
            lastServerSuggestedStatusPollMs = null
        }
    } finally {
        if(runId == waitForStatusRunId){
            waitForStatusInFlight = false
            waitForStatusStartedAt = 0
            nextWaitForStatus()
        }
    }
}

let resetSecret = false
let connectInFlight = false
async function connect(){
    if(Date.now() < connectionBlockedUntil){
        return false
    }

    // Only allow a single /connect at a time. Several entry points (startup timer, screenshot
    // loop, toolbar click, extensionStart message) can call connect() at once; overlapping
    // requests used to reach the native side with an empty secret while an approval prompt was
    // open, which made it re-prompt and rotate the secret on every click ("Allow" never stuck).
    if(connectInFlight){
        return false
    }
    connectInFlight = true

    try {
        return await runConnect()
    } finally {
        connectInFlight = false
    }
}

async function runConnect(){
    await storageGet()
    if(!secret && storage.secret){
        setSecret(storage.secret)
    }

    if(resetSecret){
        setSecret("")
        storage.secret = ""
        storageSave()
    }

    let req = await makeRequestUrl('/connect', {
        secret: secret,
        includeExtensionMeta: true
    })

    let json = null
    try {
        json = await makeGet(req)
    } catch(err){
        connectionBlockedUntil = Date.now() + connectionRetryMs
        connectionRetryMs = Math.min(30000, connectionRetryMs * 2)
        return false
    }

    if(json?.status === "error"){
        if(json.description === "connectionDenied"){
            connectionBlockedUntil = Date.now() + 15000
        }
        if(json.description === "connectionIgnored"){
            connectionBlockedUntil = Date.now() + 30000
        }
        if(json.description === "connectionDeferred"){
            connectionBlockedUntil = Date.now() + 1000
        }

        if(json.description === "invalidSecret" || json.description === "invalidToken" || json.description === "missingToken"){
            resetSecret = true
        }

        toConnect = true
        return false
    }

    if(json?.secret){
        setSecret(json.secret)
        storage.secret = json.secret
        storageSave()
    }

    resetSecret = false
    connectionBlockedUntil = 0
    connectionRetryMs = 1000
    toConnect = false
    lastServerSuggestedStatusPollMs = null

    nextWaitForStatus(40)
    return true
}

/**
 * btoaUnicode — Base64-encodes a JavaScript string as UTF-8.
 * Works like window.btoa, but supports all Unicode characters.
 * No line breaks are inserted.
 */
function btoaUnicode(input) {
  // 1) Convert JS string (UTF-16) -> UTF-8 byte array
  const bytes = [];
  for (let i = 0; i < input.length; i++) {
    let cp = input.codePointAt(i);
    if (cp > 0xFFFF) i++; // skip the surrogate pair tail

    if (cp <= 0x7F) {
      bytes.push(cp);
    } else if (cp <= 0x7FF) {
      bytes.push(
        0xC0 | (cp >> 6),
        0x80 | (cp & 0x3F)
      );
    } else if (cp <= 0xFFFF) {
      bytes.push(
        0xE0 | (cp >> 12),
        0x80 | ((cp >> 6) & 0x3F),
        0x80 | (cp & 0x3F)
      );
    } else {
      bytes.push(
        0xF0 | (cp >> 18),
        0x80 | ((cp >> 12) & 0x3F),
        0x80 | ((cp >> 6) & 0x3F),
        0x80 | (cp & 0x3F)
      );
    }
  }

  // 2) Base64-encode the bytes
  const table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let out = '';
  for (let i = 0; i < bytes.length; i += 3) {
    const a = bytes[i]     ?? 0;
    const b = bytes[i + 1] ?? 0;
    const c = bytes[i + 2] ?? 0;

    const triple = (a << 16) | (b << 8) | c;
    const enc1 = (triple >> 18) & 0x3F;
    const enc2 = (triple >> 12) & 0x3F;
    const enc3 = (triple >> 6)  & 0x3F;
    const enc4 = triple & 0x3F;

    const remain = bytes.length - i;
    if (remain >= 3) {
      out += table[enc1] + table[enc2] + table[enc3] + table[enc4];
    } else if (remain === 2) {
      out += table[enc1] + table[enc2] + table[enc3] + '=';
    } else { // remain === 1
      out += table[enc1] + table[enc2] + '==';
    }
  }

  return out;
}

// Example:
// const html = '<!doctype html><meta charset="utf-8">Caffè — ✓ 💡';
// console.log(btoaUnicode(html));


async function setHtmlContent(html, options = {}){
    if(toConnect){
        console.warn("setHtmlContent blocked: not connected")
        return false
    }
    
    let req = await makeRequestUrl('/setHtmlContent')
    
    html = sanitizeStringExtensive(html)
    html = btoaUnicode(html)
    
    let body = {
        content: html,
        forceReload: options.forceReload === true
    }
    
    try {
        let json = await makePost(req, body)

        if(json.status === "error"){
            if(json.description === "appNotConnected" || json.description === "invalidSecret" || json.description === "invalidToken" || json.description === "missingToken"){
                resetSecret = true
                toConnect = true
            }
            return false
        }

        return true
    } catch(err){
        console.warn('Extension content delivery failed')
        return false
    }
}

function formatStrForJsMessage(str){
    //console.log("formatting", str)
    return str.replaceAll('"', '\\"')
}

// Function to convert a Blob to a Base64 string
async function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            resolve(reader.result.split(',')[1]); // Remove the "data:..." part
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

async function resizeAndCompressImage(blob, maxHeight = 360, quality = 0.5) {
    const bitmap = await createImageBitmap(blob)
    try {
        const scale = Math.min(1, maxHeight / bitmap.height, 640 / bitmap.width)
        const width = Math.max(1, Math.round(bitmap.width * scale))
        const height = Math.max(1, Math.round(bitmap.height * scale))
        const canvas = new OffscreenCanvas(width, height)
        canvas.getContext('2d').drawImage(bitmap, 0, 0, width, height)
        return await canvas.convertToBlob({type: 'image/jpeg', quality})
    } finally {
        bitmap.close()
    }
}

// Images stay in memory and have both a count and byte budget. Metadata is
// independent, so evicting a preview never removes its title or switch action.
function trimPreviewCache(){
    const previews = Object.values(tabs).filter(tab=>tab.lastStrBlob)
        .sort((a, b)=>(b.lastCaptureAt || 0) - (a.lastCaptureAt || 0))
    let chars = 0
    previews.forEach((tab, index)=>{
        chars += tab.lastStrBlob.length
        if(index >= screenshotPolicy.maxPreviewCount || chars > screenshotPolicy.maxPreviewChars){
            delete tab.lastStrBlob
            delete tab.lastRawFrameFingerprint
            delete tab.lastFrameFingerprint
            tab.needsResend = false
        }
    })
}

async function captureVisibleTabAsDataUrl(windowId){
    return safariAPI(chrome.tabs, 'captureVisibleTab', windowId, {format: 'jpeg', quality: 50})
}

function getCaptureIntervalMs(){
    if(appIsShowing){
        return screenshotPolicy.appShowingCaptureMs
    }

    if(Date.now() - lastActiveAt < 15000){
        return screenshotPolicy.activeCaptureMs
    }

    if(Date.now() - lastActiveAt > screenshotPolicy.deepIdleAfterMs){
        return screenshotPolicy.deepIdleCaptureMs
    }

    return screenshotPolicy.idleCaptureMs
}

// Capturing a tab forces a repaint + JPEG encode in the browser: avoid it
// while the browser is in the background and MakeItHome isn't consuming frames
async function shouldSkipBackgroundCapture(){
    if(appIsShowing){
        return false
    }

    try {
        let win = await safariAPI(chrome.windows, 'getLastFocused')
        if(win && win.focused === false){
            return true
        }
    } catch(err){
        // chrome.windows may be unavailable: never block captures on errors
    }

    return false
}

function scheduleScreenshotLoop(delayMs = getCaptureIntervalMs()){
    clearTimeout(screenshotLoopTimeout)
    screenshotLoopTimeout = setTimeout(()=>{
        runScreenshotLoop()
    }, Math.max(100, delayMs))
}

async function captureScreenshotAndSend() {
    let expired = false
    try {
        return await boundedOperation(()=>captureScreenshot(()=>!expired), screenshotPolicy.captureTimeoutMs, ()=>{expired = true})
    } catch(error){
        // The entire pipeline (queries, capture and encoding) has a deadline.
        // Late API callbacks cannot publish into a subsequent capture run.
        return {changed: false, reason: 'error'}
    }
}

async function captureScreenshot(isCurrent) {
    const revision = captureRevision
    const valid = ()=>isCurrent() && revision === captureRevision
    try {
        if(Date.now() - lastCaptureAt < (captureRequested ? screenshotPolicy.minCaptureGapMs : getCaptureIntervalMs())){
            return {changed: false, reason: "throttled"}
        }

        if(await shouldSkipBackgroundCapture()){
            if(!valid()) return {changed: false, reason: 'captureSuperseded'}
            captureRequested = false
            return {changed: false, reason: "windowUnfocused"}
        }

        if(!valid()) return {changed: false, reason: 'captureSuperseded'}
        const [activeTab] = await safariAPI(chrome.tabs, 'query', {active: true, currentWindow: true})
        if(!valid()) return {changed: false, reason: 'captureSuperseded'}
        if(!activeTab){
            captureRequested = false
            return {changed: false, reason: "noActiveTab"}
        }
        
        confirmTabOrder(activeTab.id, false)
        activeTabId = activeTab.id
        
        let tabInfo = normalizeTabInfo(activeTab)
        if(!tabInfo){
            captureRequested = false
            return {changed: false, reason: 'unaddressableTab'}
        }
        const tabState = tabs[tabInfo.id] ||= {}
        Object.assign(tabState, tabInfo)

        // Pace attempts as well as changed frames, including failed captures.
        lastCaptureAt = Date.now()
        captureRequested = false
        const dataUrl = await captureVisibleTabAsDataUrl(activeTab.windowId)
        if(!valid()) return {changed: false, reason: 'captureSuperseded'}
        const [stillActive] = await safariAPI(chrome.tabs, 'query', {active: true, windowId: activeTab.windowId})
        if(!valid() || !stillActive || stillActive.id !== activeTab.id || stillActive.url !== activeTab.url || tabs[tabInfo.id] !== tabState){
            return {changed: false, reason: "tabChangedDuringCapture"}
        }
        let rawFrameFingerprint = makeFrameFingerprint(dataUrl)
        if(tabState.lastStrBlob && tabState.lastRawFrameFingerprint === rawFrameFingerprint){
            return {changed: false, reason: "sameRawFrame"}
        }
        
        let response = await fetch(dataUrl)
        let blob = await response.blob()
        if(!valid()) return {changed: false, reason: 'captureSuperseded'}
        blob = await resizeAndCompressImage(blob)
        if(!valid()) return {changed: false, reason: 'captureSuperseded'}
        
        let strBlob = await blobToBase64(blob)
        if(strBlob.length > screenshotPolicy.maxFrameChars){
            return {changed: false, reason: "frameTooLarge"}
        }
        if(!valid() || tabs[tabInfo.id] !== tabState || tabState.url !== tabInfo.url){
            return {changed: false, reason: "tabChangedDuringCompression"}
        }
        
        tabState.lastRawFrameFingerprint = rawFrameFingerprint
        let frameFingerprint = makeFrameFingerprint(strBlob)
        if(tabState.lastStrBlob && tabState.lastFrameFingerprint === frameFingerprint){
            return {changed: false, reason: "sameCompressedFrame"}
        }
        
        tabState.lastFrameFingerprint = frameFingerprint
        tabState.lastStrBlob = strBlob
        tabState.lastCaptureAt = Date.now()
        tabState.needsResend = true
        
        trimPreviewCache()
        return {changed: true}
    } catch (error) {
        console.error("Failed to capture screenshot: ", error)
        return {changed: false, reason: "error", error}
    }
}

function getTabPriorityScore(tabId){
    let tab = tabs[tabId]
    if(!tab){
        return -1
    }
    
    let score = 0
    if(tab.id == activeTabId){
        score += 1000
    }
    if(tab.active){
        score += 500
    }
    if(tab.needsResend){
        score += 250
    }
    
    let orderIndex = orderedTabs.indexOf(tab.id)
    if(orderIndex >= 0){
        score += orderIndex * 10
    }
    
    if(tab.lastCaptureAt){
        score += Math.max(0, 120 - Math.floor((Date.now() - tab.lastCaptureAt) / 1000))
    }
    
    return score
}

function pendingPreviewTabs(options = {}){
    return Object.values(tabs).filter(tab=>Number.isSafeInteger(tab.id) && tab.id >= 0 && tab.lastStrBlob &&
        (!options.onlyFocused || tab.id === activeTabId) &&
        (options.force || tab.needsResend || tab.lastSentFrameFingerprint !== tab.lastFrameFingerprint))
        .sort((a, b)=>getTabPriorityScore(b.id) - getTabPriorityScore(a.id))
}

async function sendAllTabsScreenshot(options = {}){
    const maxTabs = options.maxTabs ?? (appIsShowing ? screenshotPolicy.maxSendWhenShowing : screenshotPolicy.maxSendWhenIdle)
    const batch = []
    let chars = 0
    for(const tab of pendingPreviewTabs(options)){
        if(batch.length >= maxTabs || chars + tab.lastStrBlob.length > screenshotPolicy.maxBatchChars) break
        batch.push({tab, blob: tab.lastStrBlob, info: normalizeTabInfo(tab), fingerprint: tab.lastFrameFingerprint,
                    deliveryRevision: tab.previewDeliveryRevision || 0})
        chars += tab.lastStrBlob.length
    }
    if(!batch.length || Date.now() < previewRetryAfter) return false
    const payload = batch.map(item=>({blob: item.blob, tabInfo: item.info}))
    const sent = await sendJsMessage('applySafariScreenshots('+JSON.stringify(payload)+')')
    if(!sent){
        previewRetryAfter = Date.now() + 1500
        return false
    }
    previewRetryAfter = 0
    for(const item of batch){
        // A capture/update can finish during the HTTP request. Acknowledge only
        // the exact version sent, retaining new work and all failed sends.
        item.tab.lastSentFrameFingerprint = item.fingerprint
        item.tab.lastSentAt = Date.now()
        item.tab.needsResend = (item.tab.previewDeliveryRevision || 0) !== item.deliveryRevision || item.tab.lastFrameFingerprint !== item.fingerprint
    }
    return true
}

async function runScreenshotLoop(){
    if(screenshotInProgress){
        scheduleScreenshotLoop(250)
        return
    }
    
    screenshotInProgress = true
    
    try {
        if(toConnect){
            await checkConnect()
            return
        }
        
        if(contentNeedsLoad){
            await loadScripts()
            return
        }

        let now = Date.now()
        let deepIdle = !appIsShowing && now - lastActiveAt > screenshotPolicy.deepIdleAfterMs
        if(tabsListDirty || (!deepIdle && now - lastOpenTabsSyncAt > screenshotPolicy.tabSyncIntervalMs)){
            const revision = tabsListRevision
            const metadataReady = await checkOpenTabs()
            tabsListDirty = tabsListRevision !== revision
            lastOpenTabsSyncAt = Date.now()
            // Images for unknown IDs are intentionally ignored by the view.
            // Do not acknowledge them before its inventory has been delivered.
            if(!metadataReady) return
        }
        
        // Deliver cached previews first; capture/encoding must not delay them.
        await sendAllTabsScreenshot({onlyFocused: !appIsShowing})
        const captureResult = await captureScreenshotAndSend()
        if(captureResult.changed){
            await sendAllTabsScreenshot({onlyFocused: !appIsShowing})
        }
    }
    catch (err){
        console.error("runScreenshotLoop error:", err)
    }
    finally {
        screenshotInProgress = false
        const pending = appIsShowing && pendingPreviewTabs().length > 0
        const retryDelay = toConnect ? Math.max(1000, connectionBlockedUntil - Date.now()) : getCaptureIntervalMs()
        const captureDelay = captureRequested && !toConnect ? Math.max(100, screenshotPolicy.minCaptureGapMs - (Date.now() - lastCaptureAt)) : retryDelay
        scheduleScreenshotLoop(pending && !toConnect ? Math.max(100, previewRetryAfter - Date.now()) : captureDelay)
    }
}

// Add a listener for the browser action
chrome.action.onClicked.addListener(()=>{
    checkConnect()
    scheduleScreenshotLoop(120)
});

async function loadScripts(options = {}){
    if(contentLoadInFlight) return
    contentLoadInFlight = true
    try {
        await installExtensionContent(options)
    } finally {
        contentLoadInFlight = false
    }
}

async function installExtensionContent(options){
    if(!cachedExtensionPayload){
        const [extension, swiperCss, swiperJs] = await Promise.all([
            readTextFile("extension.html"), readTextFile("swiper.css"), readTextFile("swiper.min.js")
        ])
        if(!extension || !swiperCss || !swiperJs) return
        cachedExtensionPayload = "<style>"+swiperCss+"\r\n</style><script>"+swiperJs+"\r\n</script>\r\n\r\n" + extension
    }

    const loaded = await setHtmlContent(cachedExtensionPayload, {forceReload: options.forceReload === true})
    if(!loaded) return
    contentNeedsLoad = false
    pendingViewPosition = storage.tabPosition || null
    lastConfirmedTabsSignature = ""
    for(const tab of Object.values(tabs)) tab.needsResend = true
    markTabsDirty()
    // Native queues messages until content is ready; no fixed 1.5-second sleep.
    if(await checkOpenTabs()) await sendAllTabsScreenshot()
    scheduleScreenshotLoop(100)
}

async function checkConnect(){
    if(toConnect && Date.now() >= connectionBlockedUntil){
        if(await connect()){
            await loadScripts()
        }
    }
}

setTimeout(()=>{
    checkConnect()
}, 500)

chrome.tabs.onActivated.addListener((activeInfo)=>{
    if(!activeInfo || !Number.isFinite(activeInfo.tabId)){
        return
    }
    
    confirmTabOrder(activeInfo.tabId)
    captureRevision++
    captureRequested = true
    markTabsDirty()
    scheduleScreenshotLoop(120)
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
    if(tab){
        let normalized = normalizeTabInfo(tab)
        if(normalized){
            Object.assign(tabs[tabId] ||= {}, normalized)
            
            let nextTabInfo = JSON.stringify(normalized)
            tabs[tabId].lastStrTabInfo = nextTabInfo
            
            if(tab.active){
                activeTabId = tabId
                if(changeInfo.url || changeInfo.status === "complete"){
                    lastActiveAt = Date.now()
                    captureRequested = true
                }
            }
        }
    }
    
    if(changeInfo.url || changeInfo.status === 'loading') captureRevision++
    // Ignore intermediate "loading" events: pages can fire dozens of them,
    // and title tickers on background tabs must not tighten the capture loop
    let meaningfulChange = changeInfo.status === "complete" || changeInfo.url || changeInfo.title || changeInfo.favIconUrl
    if(meaningfulChange){
        markTabsDirty()

        if((tab && tab.active) || appIsShowing){
            scheduleScreenshotLoop(tab && tab.active ? 120 : 450)
        }
    }
})

for(const event of [chrome.tabs.onCreated, chrome.tabs.onMoved, chrome.tabs.onAttached, chrome.tabs.onDetached]){
    event.addListener(()=>{
        captureRevision++
        markTabsDirty()
        scheduleScreenshotLoop(150)
    })
}

chrome.tabs.onRemoved.addListener((tabId)=>{
    captureRevision++
    if(tabId === pendingTabFocusId) cancelTabFocusRetry()
    delete tabs[tabId]
    let index = orderedTabs.indexOf(tabId)
    if(index >= 0){
        spliceOrderedTabs(index)
    }
    
    markTabsDirty()
    scheduleScreenshotLoop(120)
})

chrome.runtime.onMessage.addListener(async function(message, sender, sendResponse){
    if(message.extensionStart) {
        checkConnect()
        nextWaitForStatus(80)
        scheduleScreenshotLoop(150)
    }
    
    if(message.takeScreenshot){
        captureRequested = true
        scheduleScreenshotLoop(20)
    }
    
    if(message.action == 'checkConnectionStatus'){
        sendResponse({toConnect})
    }
    
    if(message.action == 'reset'){
        console.log("resetting connection...")
        await loadScripts({forceReload: true})
    }
});

setTimeout(()=>{
    nextWaitForStatus(80)
    scheduleScreenshotLoop(200)
}, 1000)
