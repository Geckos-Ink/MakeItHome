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
        let res = await makePost(req, body)
        let json = await res.json()
        if(json.status === "error"){
            if(json.description === "appNotConnected" || json.description === "invalidSecret" || json.description === "invalidToken" || json.description === "missingToken"){
                resetSecret = true
                toConnect = true
            }
            return false
        }
        return true
    } catch(err) {
        console.error("sendJsMessage failed", err)
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
    return await fetchWithTimeout(url)
}

async function makePost(url, body, maxRetries = 1){
    if(typeof body === "object"){
        body = JSON.stringify(body)
    }

    for(let attempt = 0; attempt <= maxRetries; attempt++){
        try{
            return await fetchWithTimeout(url, {
                method: "POST",
                body: body,
                headers: {
                    "Content-Type": "application/json",
                    "Body-Length": body.length.toString()
                }
            })
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
    statusMaxInFlightMs: 7000,
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

let waitForStatusInFlight = false
let waitForStatusStartedAt = 0
let waitForStatusRunId = 0
let lastServerSuggestedStatusPollMs = null
let connectionBlockedUntil = 0

function spliceOrderedTabs(index){
    orderedTabs.splice(index, 1)
}

async function focusOnTab(id){
    let tabsObj = await getAllOpenTabs()
    let tab = tabsObj[id]
    if(!tab){
        return
    }
    console.log("opening tab", id, tab)
    await chrome.tabs.update(tab.id, { active: true });
    await chrome.windows.update(tab.windowId, { focused: true });
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
    if(!tab){
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
    
    let chunk = 180
    let size = str.length
    let first = str.slice(0, chunk)
    let middleStart = Math.max(0, Math.floor(size / 2) - Math.floor(chunk / 2))
    let middle = str.slice(middleStart, middleStart + chunk)
    let tail = str.slice(Math.max(0, size - chunk))
    return `${size}:${first}:${middle}:${tail}`
}

async function getAllOpenTabs(){
    const allTabs = await chrome.tabs.query({})
    return Object.fromEntries(allTabs.map(tab=>[tab.id, tab]))
}

async function checkOpenTabs(options = {}){
    const tabsObj = await getAllOpenTabs()
    for(const source of Object.values(tabsObj)){
        const tab = normalizeTabInfo(source)
        tabs[tab.id] = {...(tabs[tab.id] || {}), ...tab}
    }
    // A successful empty query is authoritative too (e.g. the final window
    // closed). API failures reject and retain the previous inventory.
    for(const id of Object.keys(tabs)){
        if(!tabsObj[id]) delete tabs[id]
    }
    orderedTabs = orderedTabs.filter(id=>tabsObj[id])

    // Titles and placeholders do not wait for a screenshot. Keep existing tab
    // order in the view; newly discovered tabs follow Safari window/index order.
    let tabInfos = Object.values(tabsObj).map(normalizeTabInfo)
        .sort((a, b)=>a.windowId - b.windowId || a.index - b.index)
    let tabsSignature = JSON.stringify(tabInfos)
    if(tabsSignature !== lastConfirmedTabsSignature){
        let sent = await sendJsMessage('syncSafariTabs('+tabsSignature+','+JSON.stringify(pendingViewPosition)+')')
        if(sent){
            lastConfirmedTabsSignature = tabsSignature
            pendingViewPosition = null
        } else {
            markTabsDirty()
        }
    }

    if(options.refreshPreviews === true){
        await sendAllTabsScreenshot({force: true, onlyFocused: false})
    }
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

async function fetchWithTimeout(url, options = {}, timeoutMs = 5000){
    const controller = new AbortController()
    const timeout = setTimeout(()=>controller.abort(), timeoutMs)
    try {
        return await fetch(url, {...options, signal: controller.signal})
    } finally {
        clearTimeout(timeout)
    }
}

async function makeGetWithTimeout(url, timeoutMs){
    return fetchWithTimeout(url, {}, timeoutMs)
}

async function handleStatusMessages(statusMessages){
    if(!statusMessages){
        return
    }
    
    for(let msg of statusMessages){
        try {
            let status = JSON.parse(msg)
            if(status.type === "clickedOn"){
                let id = parseInt(status.id, 10)
                if(Number.isFinite(id)){
                    await focusOnTab(id)
                    scheduleScreenshotLoop(120)
                }
            } else if(status.type === "tabPosition"){
                const id = Number(status.id)
                const index = Number(status.index)
                if(Number.isInteger(id) && Number.isInteger(index) && index >= 0 && tabs[id] && !tabs[id].incognito){
                    storage.tabPosition = {id, index}
                    await chrome.storage.local.set({tabPosition: storage.tabPosition})
                }
            }
        }
        catch (err){
            console.error("error in status message:", msg, err)
        }
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
        let req = await makeRequestUrl('/checkStatus')
        let res = await makeGetWithTimeout(req, screenshotPolicy.statusRequestTimeoutMs);

        res = await res.json();
        if(Number.isFinite(res.nextPollInMs)){
            lastServerSuggestedStatusPollMs = res.nextPollInMs
        } else {
            lastServerSuggestedStatusPollMs = null
        }

        await handleStatusMessages(res.statusMessages)
        
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
        
        let nextAppIsShowing = !!res.appExtensionIsShowing
        if(appIsShowing != nextAppIsShowing){
            appIsShowing = nextAppIsShowing
                
            if(appIsShowing){
                markTabsDirty()
                scheduleScreenshotLoop(100)
            }
        }
        
    } catch (err) {
        console.error("waitForStatus: ", err)
        lastServerSuggestedStatusPollMs = null
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

    let res = null
    let json = null
    try {
        res = await makeGet(req)
        json = await res.json()
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
        let res = await makePost(req, body)
        let json = await res.json()

        if(json.status === "error"){
            if(json.description === "appNotConnected" || json.description === "invalidSecret" || json.description === "invalidToken" || json.description === "missingToken"){
                resetSecret = true
                toConnect = true
            }
            return false
        }

        return true
    } catch(err){
        console.error("setHtmlContent failed", err)
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
    return new Promise((resolve, reject)=>{
        chrome.tabs.captureVisibleTab(windowId, { format: "jpeg", quality: 50 }, (dataUrl)=>{
            if(chrome.runtime.lastError){
                reject(chrome.runtime.lastError)
                return
            }
            
            resolve(dataUrl)
        })
    })
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
        let win = await chrome.windows.getLastFocused()
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
    try {
        if(Date.now() - lastCaptureAt < (captureRequested ? screenshotPolicy.minCaptureGapMs : getCaptureIntervalMs())){
            return {changed: false, reason: "throttled"}
        }

        if(await shouldSkipBackgroundCapture()){
            captureRequested = false
            return {changed: false, reason: "windowUnfocused"}
        }

        const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true })
        if(!activeTab){
            captureRequested = false
            return {changed: false, reason: "noActiveTab"}
        }
        
        confirmTabOrder(activeTab.id, false)
        activeTabId = activeTab.id
        
        let tabInfo = normalizeTabInfo(activeTab)
        let tabState = tabs[tabInfo.id] = {
            ...(tabs[tabInfo.id] || {}),
            ...tabInfo
        }
        tabState.lastCaptureAt = Date.now()
        
        let strTabInfo = JSON.stringify(tabInfo)
        let tabInfoChanged = tabState.lastStrTabInfo !== strTabInfo
        tabState.lastStrTabInfo = strTabInfo

        // Pace attempts as well as changed frames, including failed captures.
        lastCaptureAt = Date.now()
        captureRequested = false
        const dataUrl = await captureVisibleTabAsDataUrl(activeTab.windowId)
        const [stillActive] = await chrome.tabs.query({active: true, windowId: activeTab.windowId})
        if(!stillActive || stillActive.id !== activeTab.id || stillActive.url !== activeTab.url || tabs[tabInfo.id] !== tabState){
            return {changed: false, reason: "tabChangedDuringCapture"}
        }
        let rawFrameFingerprint = makeFrameFingerprint(dataUrl)
        if(tabState.lastRawFrameFingerprint === rawFrameFingerprint && !tabInfoChanged){
            return {changed: false, reason: "sameRawFrame"}
        }
        
        let response = await fetch(dataUrl)
        let blob = await response.blob()
        blob = await resizeAndCompressImage(blob)
        
        let strBlob = await blobToBase64(blob)
        if(strBlob.length > screenshotPolicy.maxFrameChars){
            return {changed: false, reason: "frameTooLarge"}
        }
        if(tabs[tabInfo.id] !== tabState || tabState.url !== tabInfo.url){
            return {changed: false, reason: "tabChangedDuringCompression"}
        }
        
        tabState.lastRawFrameFingerprint = rawFrameFingerprint
        let frameFingerprint = makeFrameFingerprint(strBlob)
        if(tabState.lastFrameFingerprint === frameFingerprint && !tabInfoChanged){
            return {changed: false, reason: "sameCompressedFrame"}
        }
        
        tabState.lastFrameFingerprint = frameFingerprint
        tabState.lastStrBlob = strBlob
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
    return Object.values(tabs).filter(tab=>tab.lastStrBlob &&
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
        batch.push({tab, blob: tab.lastStrBlob, info: normalizeTabInfo(tab), fingerprint: tab.lastFrameFingerprint})
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
        item.tab.needsResend = item.tab.lastFrameFingerprint !== item.fingerprint
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
            await checkOpenTabs()
            tabsListDirty = tabsListRevision !== revision
            lastOpenTabsSyncAt = Date.now()
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
    await checkOpenTabs()
    await sendAllTabsScreenshot()
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
    captureRequested = true
    markTabsDirty()
    scheduleScreenshotLoop(120)
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
    if(tab){
        let normalized = normalizeTabInfo(tab)
        if(normalized){
            tabs[tabId] = {
                ...(tabs[tabId] || {}),
                ...normalized
            }
            
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
        markTabsDirty()
        scheduleScreenshotLoop(150)
    })
}

chrome.tabs.onRemoved.addListener((tabId)=>{
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
