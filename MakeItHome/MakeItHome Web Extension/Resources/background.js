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
    return new Promise((res)=>{
        chrome.storage.local.get().then((val)=>{
            storage = val
            res(val)
        })
    })
}

function storageSave(){
    chrome.storage.local.set(storage)
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
    return await fetch(url)
}

async function makePost(url, body, maxRetries = 1){
    if(typeof body === "object"){
        body = JSON.stringify(body)
    }

    for(let attempt = 0; attempt <= maxRetries; attempt++){
        try{
            return await fetch(url, {
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
    minCaptureGapMs: 450,
    appShowingCaptureMs: 900,
    activeCaptureMs: 2500,
    idleCaptureMs: 9500,
    tabSyncIntervalMs: 7000,
    statusPollActiveMs: 700,
    statusPollIdleMs: 3200,
    statusRequestTimeoutMs: 3500,
    statusMaxInFlightMs: 7000,
    maxSendWhenShowing: 2,
    maxSendWhenIdle: 1
}

let activeTabId = null
let lastActiveAt = 0
let lastCaptureAt = 0
let lastOpenTabsSyncAt = 0
let tabsListDirty = true
let lastConfirmedTabsSignature = ""

let screenshotLoopTimeout = null
let screenshotInProgress = false
let suppressSendsUntil = 0
let cachedExtensionPayload = null

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
function confirmTabOrder(id){
    activeTabId = id
    lastActiveAt = Date.now()
    
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
        favIconUrl: tab.favIconUrl || ""
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

function getAllOpenTabs() {
    return new Promise((res)=>{
        chrome.tabs.query({}, function(allTabs) {
            let tabsObj = {}
            allTabs.forEach(tab => {
                tabsObj[tab.id] = tab
            });
            res(tabsObj)
        });
    })
}

let lastNumOfTabs = 0
let voteTabsForRemove = {}
async function checkOpenTabs(options = {}){
    let shouldRefreshPreviews = options.refreshPreviews === true
    let tabsObj = await getAllOpenTabs()
    
    let tabsIds = []
    for(let t in tabsObj){
        let tab = normalizeTabInfo(tabsObj[t])
        
        voteTabsForRemove[tab.id] = 0
        tabs[tab.id] = {
            ...(tabs[tab.id] || {}),
            ...tab
        }
        
        tabsIds.push(tab.id)
    }
    tabsIds.sort((a, b)=>a - b)
    
    for(let i = orderedTabs.length - 1; i >= 0; i--){
        let tabId = orderedTabs[i]
        if(!tabsObj[tabId]){
            let votes = voteTabsForRemove[tabId] = (voteTabsForRemove[tabId] || 0) + 1
            if(votes > 1){
                spliceOrderedTabs(i)
                delete tabs[tabId]
            }
        }
    }
    
    let openIdsSet = new Set(tabsIds.map((id)=>id.toString()))
    for(let tabId in tabs){
        if(!openIdsSet.has(tabId.toString())){
            let votes = voteTabsForRemove[tabId] = (voteTabsForRemove[tabId] || 0) + 1
            if(votes > 1){
                delete tabs[tabId]
            }
        }
    }
    
    if(tabsIds.length == 0 && lastNumOfTabs > 1){
        return
    }
    
    lastNumOfTabs = tabsIds.length
    
    let tabsSignature = tabsIds.join(",")
    if(tabsSignature !== lastConfirmedTabsSignature){
        lastConfirmedTabsSignature = tabsSignature
        await sendJsMessage('confirmSafariTabs('+JSON.stringify(tabsIds)+')')
    }
    
    if(shouldRefreshPreviews){
        await sendAllTabsScreenshot({force: true, onlyFocused: false})
    }
}

// currently used due to api limitations
let cycleStatusForReload = 0
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

async function makeGetWithTimeout(url, timeoutMs){
    return await Promise.race([
        makeGet(url),
        new Promise((_, reject)=>{
            setTimeout(()=>{
                reject(new Error("requestTimeout"))
            }, timeoutMs)
        })
    ])
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
                    focusOnTab(id)
                    scheduleScreenshotLoop(120)
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
        nextWaitForStatus(350)
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
                cycleStatusForReload = 0
                for(let tabId in tabs){
                    tabs[tabId].needsResend = true
                }
                tabsListDirty = true
                scheduleScreenshotLoop(120)
            }
            else {
                resetSwiper()
            }
        }
        else if(!appIsShowing){
            // Reset contentHtml every 10 cycles
            cycleStatusForReload++
            if(cycleStatusForReload > 10){
                cycleStatusForReload = 0
                resetSwiper()
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

function resetSwiper(){
    return sendJsMessage("resetSwiper()");
}

let resetSecret = false
async function connect(){
    if(Date.now() < connectionBlockedUntil){
        return false
    }

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
        console.error("connect failed", err)
        return false
    }

    if(json?.status === "error"){
        if(json.description === "connectionDenied"){
            connectionBlockedUntil = Date.now() + 15000
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
    toConnect = false
    lastServerSuggestedStatusPollMs = null

    nextWaitForStatus(40)
    return json?.description !== "appAlreadyConnected"
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

async function resizeAndCompressImage(blob, maxHeight = 300, quality = 0.6) {
    try {
        // Create an ImageBitmap from the Blob
        const bitmap = await createImageBitmap(blob);

        // Calculate new dimensions while maintaining aspect ratio
        const aspectRatio = bitmap.width / bitmap.height;
        const newHeight = Math.min(maxHeight, bitmap.height);
        const newWidth = newHeight * aspectRatio;

        // Create an OffscreenCanvas
        const offscreenCanvas = new OffscreenCanvas(newWidth, newHeight);
        const ctx = offscreenCanvas.getContext('2d');

        // Draw the ImageBitmap onto the canvas
        ctx.drawImage(bitmap, 0, 0, newWidth, newHeight);

        // Convert the canvas to a Blob in JPEG format
        const compressedBlob = await offscreenCanvas.convertToBlob({
            type: 'image/jpeg',
            quality: quality
        });

        return compressedBlob;
    } catch (error) {
        console.error('Error resizing and compressing image:', error);
        throw error;
    }
}

async function captureVisibleTabAsDataUrl(windowId){
    return new Promise((resolve, reject)=>{
        chrome.tabs.captureVisibleTab(windowId, { format: "jpeg" }, (dataUrl)=>{
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
    
    return screenshotPolicy.idleCaptureMs
}

function scheduleScreenshotLoop(delayMs = getCaptureIntervalMs()){
    clearTimeout(screenshotLoopTimeout)
    screenshotLoopTimeout = setTimeout(()=>{
        runScreenshotLoop()
    }, Math.max(100, delayMs))
}

async function captureScreenshotAndSend() {
    try {
        if(Date.now() - lastCaptureAt < screenshotPolicy.minCaptureGapMs){
            return {changed: false, reason: "throttled"}
        }
        
        const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true })
        if(!activeTab){
            return {changed: false, reason: "noActiveTab"}
        }
        
        confirmTabOrder(activeTab.id)
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

        const dataUrl = await captureVisibleTabAsDataUrl(activeTab.windowId)
        let rawFrameFingerprint = makeFrameFingerprint(dataUrl)
        if(tabState.lastRawFrameFingerprint === rawFrameFingerprint && !tabInfoChanged){
            return {changed: false, reason: "sameRawFrame"}
        }
        tabState.lastRawFrameFingerprint = rawFrameFingerprint
        
        let response = await fetch(dataUrl)
        let blob = await response.blob()
        blob = await resizeAndCompressImage(blob, 600, 0.5)
        
        let strBlob = await blobToBase64(blob)
        strBlob = formatStrForJsMessage(strBlob)
        
        let frameFingerprint = makeFrameFingerprint(strBlob)
        if(tabState.lastFrameFingerprint === frameFingerprint && !tabInfoChanged){
            return {changed: false, reason: "sameCompressedFrame"}
        }
        
        tabState.lastFrameFingerprint = frameFingerprint
        tabState.lastStrBlob = strBlob
        tabState.needsResend = true
        
        lastCaptureAt = Date.now()
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

async function sendTab(tab, options = {}){
    if(!tab || !tab.lastStrBlob || !tab.lastStrTabInfo){
        return false
    }
    if(Date.now() < suppressSendsUntil){
        return false
    }
    
    let force = options.force === true
    if(!force && !tab.needsResend && tab.lastSentFrameFingerprint === tab.lastFrameFingerprint && tab.lastSentTabInfo === tab.lastStrTabInfo){
        return false
    }
    
    let strTabInfo = tab.lastStrTabInfo
    let strBlob = tab.lastStrBlob
    
    const divideChuck = false
    
    if(divideChuck){ // when exceed body limit
        const chunckSize = 1024 * 128
        for(let c=0; c<strBlob.length; c+= chunckSize){
            let chunk = strBlob.substr(c, chunckSize)
            await sendJsMessage('appendBlob("'+chunk+'")')
        }
        
        await sendJsMessage('addScreenshot(vars.chrome.blob, '+strTabInfo+'); vars.chrome.blob="";')
    }
    else {
        await sendJsMessage('addScreenshot("'+strBlob+'", '+strTabInfo+');')
    }
    
    tab.lastSentFrameFingerprint = tab.lastFrameFingerprint
    tab.lastSentTabInfo = tab.lastStrTabInfo
    tab.lastSentAt = Date.now()
    tab.needsResend = false
    
    return true
}

async function sendAllTabsScreenshot(options = {}){
    let force = options.force === true
    let onlyFocused = options.onlyFocused === true
    let maxTabs = Number.isFinite(options.maxTabs) ? options.maxTabs : (appIsShowing ? screenshotPolicy.maxSendWhenShowing : screenshotPolicy.maxSendWhenIdle)
    
    let tabIds = [
        ...orderedTabs.slice().reverse(),
        ...Object.keys(tabs).map((tabId)=>parseInt(tabId, 10))
    ]
    tabIds = tabIds.filter((tabId)=>Number.isFinite(tabId))
    tabIds = [...new Set(tabIds)]
    tabIds.sort((a, b)=>getTabPriorityScore(b) - getTabPriorityScore(a))
    
    let sent = 0
    for(let tabId of tabIds){
        let tab = tabs[tabId]
        if(!tab || !tab.lastStrBlob){
            continue
        }
        
        if(!force && onlyFocused && tabId != activeTabId){
            continue
        }
        
        let tabSent = await sendTab(tab, {force})
        if(tabSent){
            sent += 1
            if(!force && sent >= maxTabs){
                break
            }
        }
    }
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
        
        let now = Date.now()
        if(tabsListDirty || now - lastOpenTabsSyncAt > screenshotPolicy.tabSyncIntervalMs){
            await checkOpenTabs()
            tabsListDirty = false
            lastOpenTabsSyncAt = Date.now()
        }
        
        let captureResult = await captureScreenshotAndSend()
        if(captureResult.changed || appIsShowing){
            await sendAllTabsScreenshot({
                force: false,
                onlyFocused: !appIsShowing,
                maxTabs: appIsShowing ? screenshotPolicy.maxSendWhenShowing : screenshotPolicy.maxSendWhenIdle
            })
        }
    }
    catch (err){
        console.error("runScreenshotLoop error:", err)
    }
    finally {
        screenshotInProgress = false
        scheduleScreenshotLoop()
    }
}

// Add a listener for the browser action
chrome.action.onClicked.addListener(()=>{
    connect()
    scheduleScreenshotLoop(120)
});

async function loadScripts(){
    if(!cachedExtensionPayload){
        let extension = await readTextFile("extension.html")
        let swiperCss = await readTextFile("swiper.css")
        let swiperJs = await readTextFile("swiper.min.js")

        cachedExtensionPayload = "<style>"+swiperCss+"\r\n</style><script>"+swiperJs+"\r\n</script>\r\n\r\n" + extension
    }

    let loaded = await setHtmlContent(cachedExtensionPayload, { forceReload: true })
    if(!loaded){
        return
    }

    suppressSendsUntil = Date.now() + 1500
    
    for(let tabId in tabs){
        tabs[tabId].needsResend = true
    }
    tabsListDirty = true
    
    setTimeout(async ()=>{
        if(appIsShowing){
            await sendAllTabsScreenshot({
                force: false,
                onlyFocused: true,
                maxTabs: 1
            })
        }
        
        scheduleScreenshotLoop(appIsShowing ? 120 : getCaptureIntervalMs())
    }, 300)
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
    tabsListDirty = true
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
            if(tabs[tabId].lastStrTabInfo && tabs[tabId].lastStrTabInfo !== nextTabInfo && tabs[tabId].lastStrBlob){
                tabs[tabId].needsResend = true
            }
            tabs[tabId].lastStrTabInfo = nextTabInfo
            
            if(tab.active){
                activeTabId = tabId
                lastActiveAt = Date.now()
            }
        }
    }
    
    if(changeInfo.status || changeInfo.url || changeInfo.title || changeInfo.favIconUrl){
        tabsListDirty = true
        scheduleScreenshotLoop(tab && tab.active ? 120 : 450)
    }
})

chrome.tabs.onRemoved.addListener((tabId)=>{
    delete tabs[tabId]
    let index = orderedTabs.indexOf(tabId)
    if(index >= 0){
        spliceOrderedTabs(index)
    }
    
    tabsListDirty = true
    scheduleScreenshotLoop(120)
})

chrome.runtime.onMessage.addListener(async function(message, sender, sendResponse){
    console.log("received message", message)
    if(message.extensionStart) {
        checkConnect()
        nextWaitForStatus(80)
        scheduleScreenshotLoop(150)
    }
    
    if(message.greeting){
        sendResponse(message)
    }
    
    if(message.takeScreenshot){
        scheduleScreenshotLoop(20)
    }
    
    if(message.action == 'checkConnectionStatus'){
        sendResponse({toConnect})
    }
    
    if(message.action == 'reset'){
        console.log("resetting connection...")
        await loadScripts()
    }
});

setTimeout(()=>{
    nextWaitForStatus(80)
    scheduleScreenshotLoop(200)
}, 1000)
