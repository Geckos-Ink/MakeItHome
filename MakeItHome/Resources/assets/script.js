///
/// Main properties
///
let overscreenSize = 350
let defBackRGBA = '64,64,64,0.1'

///
/// Parameters
///

function getQueryParam(parameterName) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(parameterName);
  }
  
// Read the "height" query parameter from the URL
const heightQueryParam = getQueryParam("height");
if(heightQueryParam) overscreenSize = heightQueryParam

///
/// Style
///

let goAppYourself = overscreenSize + 100

function setTargetHeight(heightInPixels) {
    // Get the root element (usually <html>)
    const root = document.documentElement;
  
    // Set the --target-height variable to the specified value in pixels
    root.style.setProperty('--target-height', `${heightInPixels}px`);
}

setTargetHeight(overscreenSize)

///
/// Main (clipboard)
///

function antiHtmlInjection(html){
    return html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const clipboardRichTextTags = new Set([
    'a', 'b', 'blockquote', 'br', 'code', 'div', 'em', 'h1', 'h2', 'h3',
    'h4', 'h5', 'h6', 'i', 'li', 'ol', 'p', 'pre', 's', 'span', 'strike',
    'strong', 'sub', 'sup', 'u', 'ul'
]);
const clipboardRichTextBlockedTags = new Set([
    'audio', 'embed', 'form', 'iframe', 'img', 'input', 'link', 'meta',
    'object', 'script', 'style', 'svg', 'video'
]);
const clipboardRichTextCSSProperties = new Set([
    'background-color', 'color', 'font', 'font-family', 'font-size',
    'font-style', 'font-weight', 'letter-spacing', 'line-height', 'margin',
    'margin-bottom', 'margin-left', 'margin-right', 'margin-top',
    'text-align', 'text-decoration', 'text-indent', 'word-spacing'
]);

function sanitizedClipboardRichTextCSS(documentNode) {
    const rules = [];
    documentNode.querySelectorAll('head style').forEach((styleElement) => {
        styleElement.textContent.split('}').forEach((rawRule) => {
            const ruleParts = rawRule.split('{');
            if(ruleParts.length !== 2) return;

            const selectors = ruleParts[0].trim().split(',').map((selector) => selector.trim());
            if(selectors.length === 0 || selectors.some((selector) =>
                !/^(p|span|div|blockquote|pre|code|h[1-6]|ul|ol|li)\.[A-Za-z0-9_-]+$/.test(selector)
            )) return;

            const declarations = [];
            ruleParts[1].split(';').forEach((rawDeclaration) => {
                const separator = rawDeclaration.indexOf(':');
                if(separator <= 0) return;

                const property = rawDeclaration.slice(0, separator).trim().toLowerCase();
                const value = rawDeclaration.slice(separator + 1).trim();
                if(!clipboardRichTextCSSProperties.has(property) ||
                   value.length > 256 ||
                   /url\s*\(|expression\s*\(|@import|javascript:/i.test(value)) return;
                declarations.push(property + ': ' + value);
            });

            if(declarations.length > 0)
                rules.push(selectors.join(', ') + ' {' + declarations.join('; ') + '}');
        });
    });
    return rules.join('\n');
}

function appendSanitizedClipboardRichTextNode(sourceNode, destination) {
    if(sourceNode.nodeType === Node.TEXT_NODE) {
        destination.appendChild(document.createTextNode(sourceNode.textContent || ''));
        return;
    }
    if(sourceNode.nodeType !== Node.ELEMENT_NODE) return;

    const tagName = sourceNode.tagName.toLowerCase();
    if(clipboardRichTextBlockedTags.has(tagName)) return;

    let nextDestination = destination;
    if(clipboardRichTextTags.has(tagName)) {
        const cleanElement = document.createElement(tagName);
        const classNames = Array.from(sourceNode.classList)
            .filter((className) => /^[A-Za-z0-9_-]+$/.test(className));
        if(classNames.length > 0)
            cleanElement.className = classNames.join(' ');
        destination.appendChild(cleanElement);
        nextDestination = cleanElement;
    }

    Array.from(sourceNode.childNodes).forEach((child) => {
        appendSanitizedClipboardRichTextNode(child, nextDestination);
    });
}

function renderClipboardRichText(host, html, plainText) {
    if(!html || typeof host.attachShadow !== 'function') {
        host.textContent = plainText || '';
        return;
    }

    const parsed = new DOMParser().parseFromString(html, 'text/html');
    const shadow = host.attachShadow({mode: 'open'});
    const style = document.createElement('style');
    style.textContent = `
        :host { display: block; color: #17202b; overflow-wrap: anywhere; }
        p, div, blockquote, pre, h1, h2, h3, h4, h5, h6 { margin: 0 0 .45em; }
        p:last-child, div:last-child, blockquote:last-child, pre:last-child { margin-bottom: 0; }
        ul, ol { margin: .25em 0; padding-left: 1.4em; }
        pre, code { white-space: pre-wrap; overflow-wrap: anywhere; }
    ` + sanitizedClipboardRichTextCSS(parsed);
    shadow.appendChild(style);

    Array.from(parsed.body.childNodes).forEach((child) => {
        appendSanitizedClipboardRichTextNode(child, shadow);
    });

    if(shadow.childNodes.length === 1)
        shadow.appendChild(document.createTextNode(plainText || ''));
}

function convertRelativeUrlsToAbsolute(htmlString, baseUrl) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(htmlString, 'text/html');

    // Convert relative src attributes to absolute URLs
    var srcAttributes = doc.querySelectorAll('[src]');
    srcAttributes.forEach(function(element) {
        var src = element.getAttribute('src');
        if (src && !src.startsWith('http')) {
            element.src = new URL(src, baseUrl).href;
        }
    });

    // Convert relative href attributes to absolute URLs
    var hrefAttributes = doc.querySelectorAll('[href]');
    hrefAttributes.forEach(function(element) {
        var href = element.getAttribute('href');
        if (href && !href.startsWith('http')) {
            element.href = new URL(href, baseUrl).href;
        }
    });

    // Return the HTML content with absolute URLs
    return doc.documentElement.outerHTML;
}

function getQueryParameters(urlString) {
    var params = {};
    var url = new URL(urlString);
    var searchParams = url.search.substring(1).split("&");

    for (var i = 0; i < searchParams.length; i++) {
        var pair = searchParams[i].split("=");
        var key = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1] || "");

        // Handle multiple values for the same parameter (e.g., ?name=John&name=Doe)
        if (params[key]) {
            if (Array.isArray(params[key])) {
                params[key].push(value);
            } else {
                params[key] = [params[key], value];
            }
        } else {
            params[key] = value;
        }
    }

    return params;
}

function fromBinary(encoded) {
    const binary = atob(encoded);
    return binary.toString();
}

function bridgeUrl(url){
    return "https://geckos.ink/api/makeithome-bridge.php?url=" + encodeURIComponent(url);
}

///
/// Board app
///

// Get a reference to the iframe element
var iframeBoard = document.getElementById('app-board-iframe');
const boardAppUrl = iframeBoard ? (iframeBoard.dataset.src || 'http://127.0.0.1:19494/fuse/index.html') : 'http://127.0.0.1:19494/fuse/index.html';
const boardAppOrigin = 'http://127.0.0.1:19494';
const boardIdleTimeoutMs = 2 * 60 * 60 * 1000;
const boardIdleCheckMs = 60 * 1000;

let boardIsLoaded = false;
let boardIsLoading = false;
let boardPendingTarget = null;
let boardLastUsedAt = 0;
let boardIdleTimer = null;

function boardMarkUsed() {
    boardLastUsedAt = Date.now();
}

function isBoardSectionSelected() {
    return curApp === 'board-notes' || curApp === 'board-tasks';
}

function ensureBoardIdleWatcher() {
    if (boardIdleTimer) return;

    boardIdleTimer = setInterval(() => {
        maybeUnloadBoard();
    }, boardIdleCheckMs);
}

function unloadBoard() {
    if (!iframeBoard) return;

    boardIsLoaded = false;
    boardIsLoading = false;
    boardPendingTarget = null;
    iframeBoard.src = 'about:blank';
}

function maybeUnloadBoard() {
    if (!iframeBoard) return;
    if (!boardIsLoaded && !boardIsLoading) return;
    if (isBoardSectionSelected()) return;
    if (!boardLastUsedAt) return;
    if ((Date.now() - boardLastUsedAt) < boardIdleTimeoutMs) return;

    unloadBoard();
}

function attachBoardActivityListeners() {
    if (!iframeBoard || !iframeBoard.contentWindow) return;

    try {
        let iframeDocument = iframeBoard.contentWindow.document;
        if (!iframeDocument || !iframeDocument.body) return;
        if (iframeDocument.body.dataset.mihBoardActivityBound === '1') return;

        const markUsed = () => {
            boardMarkUsed();
        };

        ['pointerdown', 'pointermove', 'keydown', 'wheel', 'scroll'].forEach((eventName) => {
            iframeDocument.addEventListener(eventName, markUsed, { passive: true });
        });

        iframeDocument.body.dataset.mihBoardActivityBound = '1';
    }
    catch (err) {
        console.error("iframe activity bind err: ", err);
    }
}

function flushBoardPendingNavigation() {
    if (!boardIsLoaded || !boardPendingTarget) return;

    let target = boardPendingTarget;
    boardPendingTarget = null;
    boardSend({ op: 'goTo', to: target });
}

function ensureBoardLoaded(target = null) {
    if (!iframeBoard) return;

    if (target) {
        boardPendingTarget = target;
    }

    boardMarkUsed();
    ensureBoardIdleWatcher();

    if (boardIsLoaded) {
        flushBoardPendingNavigation();
        return;
    }

    if (boardIsLoading) return;

    boardIsLoading = true;
    iframeBoard.src = boardAppUrl;
}

// Post a message to the iframe
//iframe.contentWindow.postMessage('Hello from parent!', 'http://127.0.0.1:19494');

// Wait for the iframe to load (optional but recommended)
iframeBoard.addEventListener("load", function() {
    let currentSrc = iframeBoard.getAttribute('src') || '';

    if (!currentSrc || currentSrc === 'about:blank') {
        boardIsLoaded = false;
        boardIsLoading = false;
        return;
    }

    try{
        // Access the contentWindow of the iframe
        var iframeWindow = iframeBoard.contentWindow;

        // Access the document within the iframe
        var iframeDocument = iframeWindow.document;

        // You can now manipulate the content of the iframe
        var iframeBody = iframeDocument.body;
        var iframeContent = iframeBody.innerHTML;

        if(!iframeContent.includes("Fuse logo")){
            boardIsLoaded = false;
            boardIsLoading = true;
            iframeBoard.contentWindow.location.reload();
            return;
        }

        boardIsLoaded = true;
        boardIsLoading = false;
        boardMarkUsed();
        attachBoardActivityListeners();
        flushBoardPendingNavigation();

        console.log("Content of the iframe:", iframeContent);
    }
    catch(err) {
        boardIsLoaded = false;
        boardIsLoading = false;
        console.error("iframe err: ", err)
    }
});

window.addEventListener('message', function(event) {
    // Check the origin of the message for security purposes
    if (event.origin !== boardAppOrigin) {
        return; // Ignore messages from unknown sources
    }

    boardMarkUsed();
    console.log('Message received in parent:', event.data);    

    // React to the message
});

function boardSend(what){
    if (!iframeBoard || !boardIsLoaded || !iframeBoard.contentWindow) return false;

    if(typeof(what) == 'object'){
        what = JSON.stringify(what)
    }

    boardMarkUsed();
    iframeBoard.contentWindow.postMessage(what, boardAppOrigin);
    return true;
}

function openBoard(what){
    ensureBoardLoaded(what);
    openApp('board')

    $(".appItem").removeClass("selected")
    $("#appItem-board-"+what).addClass("selected")
}


///
///
///

let $overscreen = $(".overscreen")
let $clipboard = $("#clipboard")
let $extension = $(".extension")

let $gridDown = $('#clipboard .down')
let $grid = $('#clipboard .grid')

let selEl = null
let canDragOut = false
let dontDrop = false // useless stuff (for the moment)

function clipboardItemID(element) {
    const value = element.dataset.clipboardId;
    return value === undefined ? NaN : parseInt(value, 10);
}

function createClipboardItemElement(item) {
    const element = document.createElement('div');
    const itemID = Number(item.id);
    const hasImage = typeof item.imgBase === 'string' && item.imgBase.length > 0;
    const hasText = typeof item.str === 'string' && item.str.length > 0;
    const hasRichText = typeof item.html === 'string' && item.html.length > 0;

    element.id = 'paste-' + itemID;
    element.dataset.clipboardId = String(itemID);
    element.className = 'item ' + (hasImage ? 'clipboard-item--media' : 'clipboard-item--text');
    element.setAttribute('role', 'listitem');
    element.tabIndex = 0;

    if(hasImage) {
        const image = document.createElement('img');
        image.src = 'data:image/png;base64,' + item.imgBase;
        image.alt = hasText ? item.str : '';
        image.loading = 'lazy';
        element.appendChild(image);

        if(hasText) {
            const name = document.createElement('div');
            name.className = 'name';
            const label = document.createElement('div');
            label.className = 'str';
            label.textContent = item.str;
            name.appendChild(label);
            element.appendChild(name);
        }
    } else {
        const content = document.createElement('div');
        content.className = hasRichText ? 'rich-text' : 'plain-text';
        if(hasRichText)
            renderClipboardRichText(content, item.html, item.str);
        else
            content.textContent = hasText ? item.str : (item.value || '');
        element.appendChild(content);
    }

    return element;
}

function appendClipboardItems(items, replaceExisting) {
    if(!Array.isArray(items)) return;
    if(replaceExisting) $grid.empty();

    const fragment = document.createDocumentFragment();
    items.forEach((item) => {
        if(!item || !Number.isFinite(Number(item.id))) return;

        if(Number.isFinite(Number(item.replacesID)))
            document.getElementById('paste-' + Number(item.replacesID))?.remove();

        document.getElementById('paste-' + Number(item.id))?.remove();
        fragment.appendChild(createClipboardItemElement(item));
    });
    $grid.get(0)?.appendChild(fragment);

    unselectAll();
    scrollGridBottom();
}

$grid.on('click keydown', '.item', function(event) {
    if(event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') return;
    if(event.type === 'keydown') event.preventDefault();

    const $element = $(this);
    const itemID = clipboardItemID(this);
    if(!Number.isFinite(itemID)) return;

    dontDrop = true;
    selEl = $element;
    unselectAll();
    $element.addClass('is-selected');
    canDragOut = true;
    sendMessage({type: 'selItem', id: itemID});
});

$grid.on('mouseup', '.item', function() {
    setTimeout(() => {
        dontDrop = false;
    }, 100);
});

$grid.on('contextmenu', '.item', function(event) {
    event.preventDefault();
    $(this).remove();
});

let $webSearchWebView = $("#webSearchWebView")
let latestExtensionPermissions = null

let toDoAtOpening = [] // events array
let settingsState = {
    enableClipboardCapture: true,
    widgetClipboardEnabled: true,
    widgetNotesEnabled: false,
    widgetTasksEnabled: false,
    widgetCalendarEnabled: true,
}

///
/// Native web views
///

const nativeWebViewSelector = '[data-native-webview-id]'
let nativeWebViewSyncScheduled = false
let observedNativeWebViews = new WeakSet()
const nativeWebViewResizeObserver = new ResizeObserver(() => scheduleNativeWebViewSync())

function nativeWebViewPresentation(element) {
    let opacity = 1
    let current = element

    while(current && current.nodeType === Node.ELEMENT_NODE) {
        const style = window.getComputedStyle(current)
        if(style.display === 'none' || style.visibility === 'hidden')
            return { visible: false, opacity: 0 }

        const currentOpacity = Number.parseFloat(style.opacity)
        if(Number.isFinite(currentOpacity)) opacity *= currentOpacity
        current = current.parentElement
    }

    const rect = element.getBoundingClientRect()
    const visible = opacity > 0.001 && rect.width > 0 && rect.height > 0 &&
        rect.right > 0 && rect.bottom > 0 && rect.left < window.innerWidth && rect.top < window.innerHeight

    return { visible: visible, opacity: opacity }
}

function syncNativeWebViews() {
    nativeWebViewSyncScheduled = false

    const handler = window.webkit?.messageHandlers?.nativeWebView
    if(!handler) return

    const views = []
    document.querySelectorAll(nativeWebViewSelector).forEach((element) => {
        const id = (element.dataset.nativeWebviewId || '').trim()
        if(!id) return

        if(!observedNativeWebViews.has(element)) {
            observedNativeWebViews.add(element)
            nativeWebViewResizeObserver.observe(element)
        }

        const rect = element.getBoundingClientRect()
        const presentation = nativeWebViewPresentation(element)
        views.push({
            id: id,
            url: element.dataset.nativeUrl || '',
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height,
            visible: presentation.visible,
            opacity: presentation.opacity,
            restoresSession: element.dataset.nativeRestoresSession === 'true',
            controls: element.dataset.nativeControls || '',
            reloadToken: element.dataset.nativeReloadToken || ''
        })
    })

    handler.postMessage({ views: views })
}

function scheduleNativeWebViewSync() {
    if(nativeWebViewSyncScheduled) return
    nativeWebViewSyncScheduled = true
    window.requestAnimationFrame(syncNativeWebViews)
}

const nativeWebViewMutationObserver = new MutationObserver(() => scheduleNativeWebViewSync())
nativeWebViewMutationObserver.observe(document.body, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: [
        'class', 'hidden', 'style', 'data-native-webview-id', 'data-native-url',
        'data-native-restores-session', 'data-native-controls', 'data-native-reload-token'
    ]
})

window.addEventListener('resize', scheduleNativeWebViewSync)
window.addEventListener('scroll', scheduleNativeWebViewSync, true)
scheduleNativeWebViewSync()

registerLocalizations({
    'widgets.extensions.unknown': 'Unknown',
    'widgets.extensions.status.trusted': 'Trusted',
    'widgets.extensions.status.not_trusted': 'Not trusted',
    'widgets.extensions.status.connected': 'Connected',
    'widgets.extensions.status.secret_stored': 'Secret stored',
    'widgets.extensions.status.popup_retry': 'Popup retry in %d s',
    'widgets.extensions.empty': 'No extension detected yet. Open the extension once, then refresh this list.',
    'widgets.extensions.unknown_extension': 'Unknown extension',
    'widgets.extensions.bundle': 'Bundle',
    'widgets.extensions.client_id': 'Client ID',
    'widgets.extensions.version': 'Version',
    'widgets.extensions.last_seen': 'Last seen',
    'widgets.extensions.request_permission': 'Request Permission',
    'widgets.extensions.revoke_permission': 'Revoke Permission',
    'widgets.extensions.permission_allowed': 'Permission allowed.',
    'widgets.extensions.permission_denied': 'Permission denied.',
    'widgets.extensions.permission_ignored': 'Popup ignored. MakeItHome will ask again after 30 seconds.',
});

function applySettingToControls(setting) {
    if(setting == "detectDragAndDrop" && $checkDragAndDropDetect)
        $checkDragAndDropDetect.prop('checked', settingsState.detectDragAndDrop);
    if(setting == "enableClipboardCapture" && $checkEnableClipboardCapture)
        $checkEnableClipboardCapture.prop('checked', settingsState.enableClipboardCapture);

    const widget = defaultWidgetDefinitions.find((item) => item.setting === setting)
    if(widget) {
        $('[data-widget-setting="' + setting + '"]').prop('checked', settingsState[setting] === true)
        applyDefaultWidgetVisibility()
    }
}

function receiveMessage(message){

    console.log("received message: ", message)
    
    if (typeof(message) == "object") {
        let obj = message

        switch(obj.type){
            case 'localizations':
                applyLocalizations(obj.localizations)
                if(latestExtensionPermissions !== null)
                    renderExtensionPermissionsStatus(latestExtensionPermissions)
                break;

            case 'setSetting':
                if(obj.valBool !== undefined) retrieveSetting(obj.setting, obj.valBool)
                break;

            case 'extensionPermissionsStatus':
                receiveExtensionPermissionsStatus(obj)
                break;

            case 'toApp':
                try {
                    eval("appReceive_"+obj.value+"(obj)")
                } catch {}
                break;
        }

        if(obj.type == 'removeUpTo'){
            const upTo = parseInt(obj.value, 10);
            $grid.find('.item').each(function() {
                if(clipboardItemID(this) <= upTo) this.remove();
            });
        }

        if (obj.type == 'removeClipboardItem') {
            document.getElementById('paste-' + parseInt(obj.value, 10))?.remove();
        }

        if(obj.type == 'removeClipboardItems' && Array.isArray(obj.ids)) {
            obj.ids.forEach((itemID) => {
                document.getElementById('paste-' + Number(itemID))?.remove();
            });
        }

        if(settingsState.enableClipboardCapture !== false) {
            if(obj.type == 'clipboardItems')
                appendClipboardItems(obj.clipboardItems, false);
            if(obj.type == 'replaceClipboardItems')
                appendClipboardItems(obj.clipboardItems, true);
            if(obj.type == 'newClipboardItem')
                appendClipboardItems([obj], false);
        }

        if(obj.type == 'clearClipboardItems'){
            clearClipboard()
        }

        return
    }

    if(message == 'opening'){
        onApp = true; // confirm that received a message that send only the app
        flushPendingMessagesBeforeApp()

        canDragOut = false                        
        scrollGridBottom()

        //reset
        clearOnScrollable()

        stopFullscreenMode();   
        scheduleNativeWebViewSync()
        
        for (let cbk of toDoAtOpening) {
            cbk()
        }
        toDoAtOpening = []
    }

    if(message == 'closing'){
        if(selEl)
            selEl.css('border', '1.5px solid yellow')

        style_dragEnd()
    }

    if(message == 'dragging'){
        openApp("clipboard")
    }
}

function unselectAll(){
    $grid.find(".item").removeClass('is-selected').css('border-color', '')
}


let accumulateScrollGridBottom = null
function scrollGridBottom(){
    clearTimeout(accumulateScrollGridBottom)

    accumulateScrollGridBottom = setTimeout(()=>{
        $gridDown.stop(true).animate({scrollTop: $gridDown.prop("scrollHeight")}, 180);
    }, 40)
}

function style_dragEnd(){
    $(".overscreen").css('background-color', 'rgba('+defBackRGBA+')')
}

function drop(ev) {
    style_dragEnd()
    
    if(dontDrop){
        ev.preventDefault();
    }
    //var data = ev.dataTransfer;
    //console.log("data", data)
}

function allowDrop(ev) {
    ev.preventDefault();
    return !dontDrop        
}

function dragover_handler(ev) {
console.log("dragOver: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);
//ev.preventDefault();
// Set the dropEffect to move
ev.dataTransfer.dropEffect = "move"
}

function dragend(ev){        
    style_dragEnd()
}

function dragleave(ev){
    //$(".overscreen").css('background-color', 'rgba(255,255,255,0)')
}

function dragenter(ev){
    if(!canDragOut){
        $(".overscreen").css('background-color', 'rgba(255,255,255,0.5)')
    }
}

function drag(ev){
    
}

///
/// Apps
///
const defaultWidgetDefinitions = [
    { setting: 'widgetClipboardEnabled', app: 'clipboard', menu: '#appItem-clipboard' },
    { setting: 'widgetNotesEnabled', app: 'board-notes', menu: '#appItem-board-notes' },
    { setting: 'widgetTasksEnabled', app: 'board-tasks', menu: '#appItem-board-tasks' },
    { setting: 'widgetCalendarEnabled', app: 'calendar', menu: '#appItem-calendar' },
]

function enabledDefaultWidgetApps() {
    return defaultWidgetDefinitions
        .filter((widget) => settingsState[widget.setting] === true)
        .map((widget) => widget.app)
}

let apps = ['settings', ...enabledDefaultWidgetApps()]
let baseApps = [...apps]

let selApp = 1

const appSwitchSpeed = 250
let curApp = "clipboard"
let disabledWidgetFallbackTimeout = null

function applyDefaultWidgetVisibility() {
    for(const widget of defaultWidgetDefinitions) {
        $(widget.menu).toggle(settingsState[widget.setting] === true)
    }

    const customApps = apps.filter((app) => app.startsWith('myWidget'))
    baseApps = ['settings', ...enabledDefaultWidgetApps()]
    apps = [...baseApps, ...customApps]

    const currentIndex = apps.indexOf(curApp)
    if(currentIndex >= 0) {
        selApp = currentIndex
        return
    }

    clearTimeout(disabledWidgetFallbackTimeout)
    disabledWidgetFallbackTimeout = setTimeout(() => {
        if(apps.includes(curApp)) return
        const fallback = apps.find((app) => app !== 'settings') || 'settings'
        openApp(fallback, false)
    }, appSwitchSpeed)
}

applyDefaultWidgetVisibility()

let accumulateScrollCurAppBottom = null;
function scrollCurAppBottom(){
    clearTimeout(accumulateScrollCurAppBottom)

    accumulateScrollCurAppBottom = setTimeout(()=>{
        let $curApp = $("#app-"+curApp)
        let scroll = $curApp.prop("scrollHeight")
        $curApp.animate({ scrollTop: scroll}, 500);

    }, 100)           
}

const $appMain = $('.app-main')
const $appMainClipboard = $('.app-main .clipboard .grid')

let changingApp = false
function openApp(app, animateExit=true){    

    let iApp = apps.indexOf(app)

    if(app.includes('-')){
        if(app.startsWith('board-'))
            openBoard(app.split('-')[1])

        if(iApp >= 0){
            curApp = app
            selApp = apps.indexOf(app)
        }

        return
    }

    if(changingApp) return;

    if(app == curApp) return;

    changingApp = true;

    let speed = appSwitchSpeed
    if(!animateExit) speed /= 3

    let exApp = curApp    

    let $curApp = $('#app-'+curApp)
    if(curApp.includes('-')) $curApp = $("#app-"+curApp.split('-')[0])

    let $app = $('#app-'+app)        

    if($curApp[0] == $app[0]) $curApp = $()

    $app.css('opacity', 1)

    if(app != 'clipboard'){
        $app.show()
        $app.animate({
            top: "0px",
        }, speed, function() {
                    
        });
        
        if(exApp == 'clipboard'){
            setTimeout(()=>{
                $appMain.animate({
                    opacity: 0,
                }, speed, function() {
                    $appMainClipboard.hide()
                });
            }, speed/2)
        } else {
            $curApp.animate({
                opacity: "0",
            }, speed, function() {
                $curApp.css('opacity', '1');
                $curApp.css('top', (-goAppYourself)+'px');
                $curApp.hide()
            });
        }
    }
    else {
        if(animateExit){
            $curApp.show()
            $curApp.animate({
                top: (-goAppYourself)+'px',
            }, speed, function() {
                // Animation complete.
            });
        }

        $appMainClipboard.show()
        $appMain.animate({
            opacity: 1,
        }, speed, function() {
            // Animation complete.
        });
    }

    setTimeout(()=>{
        scrollCurAppBottom();

        changingApp = false
        clearOnScrollable()
    }, speed*2)

    $(".appItem").removeClass("selected")
    $("#appItem-"+app).addClass("selected")

    if(iApp >= 0){
        curApp = app
        selApp = apps.indexOf(app)
    }

    try {
        eval("openApp_"+app+"()")
    } catch {}
}

function openApp_board() {
    ensureBoardLoaded();
}

/// Menu
$(document).on('mouseenter', '.appItem', function (ev) {
    sendMessage({type:'haptic'})    
 })

/// Scrolling

function goAppsYourself(){
    for(let app of apps){
        if(app != curApp) { 
            let $app = $("#app-"+app)                            

            $app.animate({
                opacity: 0
            }, appSwitchSpeed/4, function(){
                $app.css("top", (-goAppYourself)+"px") 
                $app.css("opacity", 0)
                $app.hide()
            })                           
        }
    }
}

let $sCurApp = null 
let $sNextApp = null
let scrollTimeout = null

let scrollPos = 0
let prevScrollDelta = 0
let newScrollApp = true
let nextApp = null
let nextAppName = ""
let onScrollAnimation = false
let scrollWait = false
let scrollWaitTimeout = null
let scrollWaitDelta = 0

let disableScroll = 0
let goToScroll = 0
let curScroll = 0

let onLeftMenu = false

const $appPhantom = $("#app-phantom")

$('.overscreen').bind('wheel', function (e) {        
    if (!onLeftMenu && curApp.startsWith('myWidget')) return;
    if(disableScroll) return;

    e.preventDefault()
    
    let delta = -1 * e.originalEvent.deltaY / 1.5

    scrollWaitDelta = ((delta/2)+scrollWaitDelta)/2

    if(onScrollAnimation){        
        scrollWait = true
        return;
    }
    
    if(scrollWait){
        if(scrollWaitDelta >= delta && ((scrollWaitDelta > 0 && delta > 0) || (scrollWaitDelta < 0 && delta < 0))){
            clearTimeout(scrollWaitTimeout)
            scrollWaitTimeout = setTimeout(()=>{
                scrollWait = false
                console.log("wait off")
            }, 50)
            return;
        }
        else {
            clearTimeout(scrollWaitTimeout)
            scrollWait = false
        }
    }        
    
    if(Math.abs(delta) > overscreenSize/2) delta = delta % (overscreenSize/2)        

    scrollPos += delta                  

    if(Math.abs(scrollPos) > overscreenSize)
        return;
    
    //scrollPos = scrollPos % overscreenSize
    
    if(newScrollApp){
        let na = 0
        if(scrollPos > 0)
            na = (selApp-1)             
        else 
            na = (selApp+1)                   

        let nope = na < 0 || na >= apps.length
        if(!nope){                
            nextApp = na

            console.log("nextApp: ", nextApp)

            $sCurApp = $("#app-"+curApp.split('-')[0])

            let nextAppName = apps[nextApp]
            if(nextAppName.includes('-')){
                let parts = nextAppName.split('-')
                nextAppName = parts[0]

                if(nextAppName == curApp.split('-')[0]){
                    $sNextApp = $appPhantom
                    $appPhantom.show()
                }
                else {
                    $sNextApp = $("#app-"+nextAppName)
                }
            }
            else {
                nextAppName = apps[nextApp]
                $sNextApp = $("#app-"+nextAppName)
            }

            newScrollApp = false
        }
        else {
            scrollPos -= delta
            console.log("break limit")
        }
    }       
    
    curScroll = (goToScroll+curScroll)/2
    if(Math.abs(curScroll-goToScroll) < 1)
        curScroll = goToScroll

    if(goToScroll != curScroll){        

        // Repeating the repeat
        let caScroll = 0
        let naScroll = 0
        let opacityInvert = 1
        if(scrollPos > 0){
            caScroll = scrollPos
            naScroll = -overscreenSize + scrollPos
            opacityInvert *= -1
        }
        else {
            caScroll = scrollPos
            naScroll = overscreenSize + scrollPos
        }

        //console.log(delta, caScroll, naScroll) // ndr: lo sai che lo sviluppatore ha usato solo l'1% del suo cervello? si vede?     
        let $sCurApp_orMain = $sCurApp.length == 0 ? $(".app-main") : $sCurApp
        $sCurApp_orMain.css("opacity", 1-(-1*opacityInvert * caScroll/overscreenSize))
        $sCurApp.css("top", caScroll + "px")
        
        let $sNextApp_orMain = $sNextApp.length == 0 ? $(".app-main") : $sNextApp
        $sNextApp_orMain.css("opacity", 1-(opacityInvert*naScroll/overscreenSize))        
        $sNextApp.css("top", naScroll + "px")
        

        let nextWidget = Math.abs(scrollPos) > overscreenSize/2
        
        if(nextWidget){
            $(".appItem").removeClass("selected")
            $("#appItem-"+apps[nextApp]).addClass("selected")
        }
        else {
            $(".appItem").removeClass("selected")
            $("#appItem-"+curApp).addClass("selected")
        }        
    }
    
    if(prevScrollDelta < delta || !scrollTimeout){ //todo: delay timeout in case of costant or more speed
        goToScroll = scrollPos

        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(()=>{
            scrollTimeout = undefined
            onScrollAnimation = true                        

            nextWidget = Math.abs(scrollPos) > overscreenSize/2

            if(nextWidget){

                if($sNextApp[0] == $appPhantom[0]){
                    setTimeout(()=>{
                        $appPhantom.animate({opacity: 0}, appSwitchSpeed/3, ()=>{
                            $appPhantom.hide()
                        })
                    }, appSwitchSpeed/2)                    
                }

                //console.log($sCurApp, $sNextApp)

                if(curApp == "clipboard"){
                    $appMain.animate({
                        opacity: 0
                    }, appSwitchSpeed/3, ()=>{
                        $appMainClipboard.hide()
                    })
                }

                if(apps[nextApp] == "clipboard"){
                    $appMainClipboard.show()
                    $appMain.animate({
                        opacity: 1
                    }, appSwitchSpeed/3)
                }
                      
                if(curApp != "clipboard"){
                    $sCurApp.animate({
                        top: (scrollPos < 0 ? -goAppYourself : goAppYourself)+"px",
                        opacity: 0
                    }, appSwitchSpeed/3,
                    ()=>{
                        $sCurApp.hide()
                    });
                }
                else {
                    $sCurApp.animate({
                        opacity: 0
                    }, appSwitchSpeed/3,
                    ()=>{
                        $sCurApp.hide()
                    });
                }

                $sNextApp.show()
                $sNextApp.animate({
                    opacity: 1
                }, appSwitchSpeed/3);

                console.log("open app: ", apps[nextApp])

                setTimeout(()=>{
                    $sCurApp = $sNextApp
                    openApp(apps[nextApp], false)
                }, appSwitchSpeed/2)
            }
            else {

                if(Math.abs(scrollPos) > 10){                    
                    //console.log($sCurApp, $sNextApp)

                    if(curApp == "clipboard"){
                        $appMainClipboard.show()
                        $appMain.animate({
                            opacity: 1
                        }, appSwitchSpeed/3)
                    }

                    if(apps[nextApp] == "clipboard"){
                        $appMain.animate({
                            opacity: 0
                        }, appSwitchSpeed/3, 
                        ()=>{
                            $appMainClipboard.hide()
                        })
                    }

                    console.log("animate", $sNextApp)
                    
                    $sNextApp.animate({
                        top: (scrollPos > 0 ? -goAppYourself : +goAppYourself)+"px",
                        opacity: 0
                    }, appSwitchSpeed/3, ()=>{
                        $sNextApp.hide()
                    });

                    $sCurApp.show()
                    $sCurApp.animate({
                        top: "0px",
                        opacity: 1
                    }, appSwitchSpeed/3);  
                    
                }
            }

            setTimeout(()=>{
                $appPhantom.hide()

                newScrollApp = true
                onScrollAnimation = false

                scrollPos = 0
                goToScroll = 0
                curScroll = 0

                goAppsYourself()

                clearOnScrollable()

            }, appSwitchSpeed/1.5)

        }, appSwitchSpeed/2)  
    }                                            

    prevScrollDelta = ((delta/2)+prevScrollDelta)/2

    /*if(e.originalEvent.wheelDelta /120 > 0) {
        console.log('scrolling up !', delta);
    }
    else{
        console.log('scrolling down !', delta);
    }*/                
});

let divWithScrollbar = []
let ignoreThisScrollable = false

function clearOnScrollable(){
    disableScroll = 0
    divWithScrollbar = []
    ignoreThisScrollable = true
}

function hasScrollBar($el, direction){
    if (direction == 'vertical' || !direction)
    {
        return $el.get(0).scrollHeight > $el.innerHeight();
    }
    else if (direction == 'horizontal')
    {
        return $el.get(0).scrollWidth > $el.innerWidth();
    }
    return false;
}

$(document).on("mousemove", "div", function (e) {
    let $target = $(e.target)
    onLeftMenu = false
    while ($target.length > 0) {
        if ($target.is('.leftMenu'))
            onLeftMenu = true
        $target = $target.parent()
    }    

    try {
        if(hasScrollBar($(this))){             
            if(divWithScrollbar.indexOf(this) == -1){
                if(ignoreThisScrollable){
                    if(ignoreThisScrollable === true){
                        ignoreThisScrollable = this

                        setTimeout(()=>{
                            ignoreThisScrollable = null;
                        }, 250)
                    }

                    if(ignoreThisScrollable == this)
                        return;
                }

                divWithScrollbar.push(this)
                disableScroll += 1 
                console.log("mouse enter")  
            }
        }      
    } catch(err) {
        console.log("scroll management error: ", err)
    }
})

$(document).on("mouseleave", "div", function(){
    let i = divWithScrollbar.indexOf(this)
    if(i >= 0){
        disableScroll -= 1
        console.log("mouse leave")

        divWithScrollbar.splice(i, 1)
    }    
})

///
/// TODO List
///
/*
// On app load, get all tasks from localStorage
window.onload = loadTasks;

// On form submit add task
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  addTask();
});

function loadTasks() {
  // check if localStorage has any tasks
  // if not then return
  if (localStorage.getItem("tasks") == null) { 
    addTask("Discover MakeItHome!")
    return;
  }

  // Get the tasks from localStorage and convert it to an array
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

  // Loop through the tasks and add them to the list
  tasks.forEach(task => {
    const list = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${task.completed ? "checked" : ""}>
          <input type="text" value="${task.task}" class="task ${task.completed ? "completed" : ""}" onfocus="getCurrentTask(this)" onblur="editTask(this)">
          <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
    list.insertBefore(li, list.children[0]);
  });
}

function addTask(task = undefined) {
    task = task || document.querySelector(".todo form input").value;
    const list = document.querySelector(".todo ul");
    // return if task is empty
    if (task === "") {
    //alert("Please add some task!");
    return false;
    }
    // check is task already exist
    if (document.querySelector(`input[value="${task}"]`)) {
    //alert("Task already exist!");
    return false;
    }

    // add task to local storage
    localStorage.setItem("tasks", JSON.stringify([{ task: task, completed: false }, ...JSON.parse(localStorage.getItem("tasks") || "[]")]));     

    // create list item, add innerHTML and append to ul
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check">
        <input type="text" value="${task}" class="task" onfocus="getCurrentTask(this)" onblur="editTask(this)">
        <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
    list.appendChild(li);

    // clear input
    document.querySelector(".todo form input").value = "";

    scrollCurAppBottom();   
}

function taskComplete(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.forEach(task => {
    if (task.task === event.nextElementSibling.value) {
      task.completed = !task.completed;
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.nextElementSibling.classList.toggle("completed");
}

function removeTask(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.forEach(task => {
    if (task.task === event.parentNode.children[1].value) {
      // delete task
      tasks.splice(tasks.indexOf(task), 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.parentElement.remove();
}

// store current task to track changes
var currentTask = null;

// get current task
function getCurrentTask(event) {
  currentTask = event.value;
}

// edit the task and update local storage
function editTask(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  // check if task is empty
  if (event.value === "") {
    //alert("Task is empty!");
    event.value = currentTask;
    return;
  }
  // task already exist
  tasks.forEach(task => {
    if (task.task === event.value) {
      //alert("Task already exist!");
      event.value = currentTask;
      return;
    }
  });
  // update task
  tasks.forEach(task => {
    if (task.task === currentTask) {
      task.task = event.value;
    }
  });
  // update local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
*/

///
/// Web Search
///

let fullscreenMode = false;
let searchSelectAll = false;
const searchWebViewFadeOutDuration = 500;
function startFullscreenMode(){
    if(!fullscreenMode){
        sendMessage({type: "enterFullscreen"})
        fullscreenMode = true;
        fullscreenMouseBelow = false;

        $extension.stop(true, false).animate({
            opacity: 1
        }, {
            duration: 250,
            step: scheduleNativeWebViewSync,
            complete: scheduleNativeWebViewSync
        })
    }
}

function stopFullscreenMode(){
    if(fullscreenMode){
        fullscreenMode = false;
        searchSelectAll = true;

        $extension.stop(true, false).animate({
            opacity: 0
        }, {
            duration: searchWebViewFadeOutDuration,
            step: scheduleNativeWebViewSync,
            complete: function() {
                scheduleNativeWebViewSync()
                if(!fullscreenMode)
                    sendMessage({type: "closeFullscreen"})
            }
        })
    }
}

let $webSearch = $(".webSearch")
let $searchBar = $("#searchbar")

$searchBar.on("click", (e)=>{
    if(searchSelectAll){
        $searchBar.select();
        searchSelectAll = false
    }
})

function searchPressEnter(e) {
    if (e.key === "Enter") {
        e.preventDefault();

        searchSelectAll = true

        $(".extension > div").each(function(){ $(this).hide(); })       

        startFullscreenMode();

        let url = "https://www.google.com/search?hl=en&q="+encodeURIComponent($searchBar.val());
        $webSearchWebView.attr('data-native-url', url)
        scheduleNativeWebViewSync()
        
        setTimeout(()=>{

            $webSearch.show();

            $webSearch.animate({
                opacity: 1
            }, 250);

        }, 100);

    }
}

///
/// Selection manager
///

$overscreen.on('contextmenu', function(ev) {
    ev.preventDefault();
    console.log("right click")    
    return false;
});

///
/// General events
///

let fullscreenMouseBelow = false;

$('body').on('mousemove', (e)=>{
    //console.log(e);
    let y = e.originalEvent.pageY;

    if(fullscreenMode){
        let above = y < $searchBar.offset().top

        if(!above) fullscreenMouseBelow = true;

        if(above && fullscreenMouseBelow){
            stopFullscreenMode();       
        }
    }
    else {
        fullscreenMouseBelow = false;
    }
})

///
/// Multi-sections managements
///

function isElementDisplayed(element) {
    // Traverse the element and its ancestors
    return $(element).add($(element).parents()).filter(function () {
        // Check if the element is hidden by checking its display property
        return $(this).css('display') === 'none' || $(this).css('visibility') === 'hidden' || $(this).css('opacity') === '0';
    }).length === 0;
}

function renderParagraph(id){
    let $id = $(id)

    let $pars = $id.find('.paragraph')

    let $contents = $('<div class="left"></div>')
    let $titles = $('<div class="right"><div class="menu"></div></div>')
    let $menu = $titles.find('.menu')

    for(p=0; p<$pars.length; p++){
        $par = $($pars[p])

        let $baseTitle = $par.find('.title').clone()
        $baseTitle.find('.excludeFromTitle').remove()
        let title = $baseTitle.html();

        let $title = $('<div class="title">'+title+'</div>')
        let $content = $('<div class="paragraph">' + $par.html() + '</div>')

        $title.on('click', ()=>{
            $id.animate({
                scrollTop: $content.position().top
            }, 500);
        })

        $contents.append($content)
        $menu.append($title)
    }

    let interval = setInterval(() => {
        let offset = $titles.offset()

        if (offset.left > 0 && offset.top > 0) {
            $menu.css('top', offset.top)
            $menu.css('left', offset.left)
            $menu.css('width', $titles.width())
            $menu.css('height', $titles.height())
            clearInterval(interval)
        }
    }, 50)

    let displaying = false
    setInterval(() => {
        let disp = isElementDisplayed(id) 

        if (disp) {
            let off = $id.offset()
            disp = off.top >= 0
        }

        if (displaying != disp) {
            $menu.css('display', disp ? 'block' : 'none')
            displaying = disp
        }
    }, 50)
    
    $contents.on('mousemove', (e)=>{
        let $conts = $contents //$id.find('.left')

        let scroll = $conts.scrollTop()
        let y = e.originalEvent.pageY - ($id.offset().top) + scroll;

        let lastPar = -1;

        let pars = $conts.find('.paragraph')
        for(p = 0; p < pars.length; p++){
            let par = $(pars[p])
            let pos = par.offset()

            if(y >= pos.top){
                lastPar = p                
            }
            else {
                break
            }
        }

        $titles.find('.title').removeClass("sel");

        if(lastPar >= 0){
            let title = $titles.find('.title')[lastPar]
            title = $(title)
            title.addClass('sel')
        }
    })

    $id.html('');
    $id.append($contents)
    $id.append($titles)
}

///
/// Settings managements
///

let $appSettings = $("#app-settings")
let $setsList = $("#app-settings .list")
let $sections = $("#sections")

$sections.css("left", $setsList.width()+"px")

renderParagraph(".section.general .paragraphs")
renderParagraph(".section.widgets .paragraphs")
renderParagraph(".section.guides .paragraphs")
renderParagraph(".section.myWidgets .paragraphs")
renderParagraph(".section.extensions .paragraphs")

function showSettingsSection(sect){
    const wait = 250

    let $sect = $("#app-settings .section."+sect)

    $appSettings.find('.section').each(function(){        
        if(this != $sect[0]){
            let $this = $(this)
            $this.fadeOut(wait)
        }
    })

    setTimeout(()=>{
        $sect.fadeIn(wait)
    }, wait)    
}

/// Showing settings in Settings menu
$("ons-list-item.general").on('click', ()=>{
    showSettingsSection("general")
})

$("ons-list-item.guides").on('click', ()=>{
    showSettingsSection("guides")
})

$("ons-list-item.widgets").on('click', () => {
    showSettingsSection("widgets")
})

$("ons-list-item.myWidgets").on('click', () => {
    showSettingsSection("myWidgets")
})

$("ons-list-item.extensions").on('click', () => {
    showSettingsSection("extensions")
    requestExtensionPermissionsStatus()
})

///
/// Events
///

function clearClipboard(){
    // Stop an older clear animation first; otherwise its delayed callback can
    // erase clipboard items that arrived after the user pressed Clear.
    $grid.stop(true, true).empty().css('opacity', '1')
    selEl = null
    canDragOut = false
}

///
/// Settings
///

let $checkDragAndDropDetect = null
let $checkEnableClipboardCapture = null
let $defaultWidgetToggles = null
let $extensionPermissionsList = null

function retrieveSetting(setting, val){
    settingsState[setting] = val
    applySettingToControls(setting)
}

function setSettings_dragAndDropDetect(val){
    sendMessage({
        type: 'setSetting',
        setting: 'detectDragAndDrop',
        valBool: val
    })
}

function setSettings_enableClipboardCapture(val){
    sendMessage({
        type: 'setSetting',
        setting: 'enableClipboardCapture',
        valBool: val
    })
}

function setDefaultWidgetSetting(setting, val){
    sendMessage({
        type: 'setSetting',
        setting: setting,
        valBool: val
    })
}

function requestExtensionPermissionsStatus(){
    sendMessage({
        type: 'extensionPermissions',
        op: 'status'
    })
}

function requestExtensionPermission(identity){
    if(!identity) return
    sendMessage({
        type: 'extensionPermissions',
        op: 'request',
        strId: identity
    })
}

function revokeExtensionPermission(identity){
    if(!identity) return
    sendMessage({
        type: 'extensionPermissions',
        op: 'revoke',
        strId: identity
    })
}

function formatExtensionTimestamp(seconds){
    if(!seconds) return localizedString('widgets.extensions.unknown', 'Unknown')
    let dt = new Date(seconds * 1000)
    return dt.toLocaleString()
}

function extensionPermissionStatusLabel(permission){
    let statuses = []
    statuses.push(permission.trusted
        ? localizedString('widgets.extensions.status.trusted', 'Trusted')
        : localizedString('widgets.extensions.status.not_trusted', 'Not trusted'))
    if(permission.connected) statuses.push(localizedString('widgets.extensions.status.connected', 'Connected'))
    if(permission.hasSecret) statuses.push(localizedString('widgets.extensions.status.secret_stored', 'Secret stored'))

    if(permission.ignoredUntil){
        let msLeft = (permission.ignoredUntil * 1000) - Date.now()
        if(msLeft > 0){
            statuses.push(localizedString('widgets.extensions.status.popup_retry', 'Popup retry in %d s')
                .replace('%d', Math.ceil(msLeft / 1000)))
        }
    }

    return statuses.join(" • ")
}

function renderExtensionPermissionsStatus(list){
    if(!$extensionPermissionsList || !$extensionPermissionsList.length) return

    $extensionPermissionsList.html("")
    if(!list || !list.length){
        $extensionPermissionsList.append('<div class="extensionPermissionCard">' + localizedString('widgets.extensions.empty', 'No extension detected yet. Open the extension once, then refresh this list.') + '</div>')
        return
    }

    for(let permission of list){
        let extensionName = antiHtmlInjection(permission.extensionName || permission.bundleId || localizedString('widgets.extensions.unknown_extension', 'Unknown extension'))
        let bundleId = antiHtmlInjection(permission.bundleId || "unknown.bundle")
        let clientId = permission.clientId ? antiHtmlInjection(permission.clientId) : "-"
        let extensionVersion = permission.extensionVersion ? antiHtmlInjection(permission.extensionVersion) : "-"
        let identity = antiHtmlInjection(permission.identity || bundleId)
        let status = antiHtmlInjection(extensionPermissionStatusLabel(permission))
        let lastSeenAt = antiHtmlInjection(formatExtensionTimestamp(permission.lastSeenAt))

        let html = ''
        html += '<div class="extensionPermissionCard">'
        html += '  <div class="name">' + extensionName + '</div>'
        html += '  <div class="meta">' + localizedString('widgets.extensions.bundle', 'Bundle') + ': ' + bundleId + '<br>' + localizedString('widgets.extensions.client_id', 'Client ID') + ': ' + clientId + '<br>' + localizedString('widgets.extensions.version', 'Version') + ': ' + extensionVersion + '<br>' + localizedString('widgets.extensions.last_seen', 'Last seen') + ': ' + lastSeenAt + '</div>'
        html += '  <div class="status">' + status + '</div>'
        html += '  <div class="actions">'
        html += '    <button class="action request" data-identity="' + identity + '">' + localizedString('widgets.extensions.request_permission', 'Request Permission') + '</button>'
        html += '    <button class="action revoke" data-identity="' + identity + '">' + localizedString('widgets.extensions.revoke_permission', 'Revoke Permission') + '</button>'
        html += '  </div>'
        html += '</div>'

        $extensionPermissionsList.append(html)
    }
}

function notifyPermissionDecision(decision){
    if(!decision) return

    var text = ""
    switch(decision){
        case "allow":
            text = localizedString('widgets.extensions.permission_allowed', 'Permission allowed.')
            break
        case "deny":
            text = localizedString('widgets.extensions.permission_denied', 'Permission denied.')
            break
        case "ignored":
            text = localizedString('widgets.extensions.permission_ignored', 'Popup ignored. MakeItHome will ask again after 30 seconds.')
            break
    }

    if(!text) return

    if(typeof ons !== "undefined" && ons.notification && ons.notification.toast){
        ons.notification.toast(text, { timeout: 3000 })
    } else {
        console.log(text)
    }
}

function receiveExtensionPermissionsStatus(obj){
    if(!obj) return
    notifyPermissionDecision(obj.decision)
    latestExtensionPermissions = obj.extensionPermissions || []
    renderExtensionPermissionsStatus(latestExtensionPermissions)
}

$(document).ready(function() {
    $checkDragAndDropDetect = $('#check-detectDragAndDrop')
    applySettingToControls('detectDragAndDrop')
    $checkDragAndDropDetect.on('change', function() {
        let checked = $(this).is(':checked')
        settingsState.detectDragAndDrop = checked
        setSettings_dragAndDropDetect(checked)
    });

    $checkEnableClipboardCapture = $('#check-enableClipboardCapture')
    applySettingToControls('enableClipboardCapture')
    $checkEnableClipboardCapture.on('change', function() {
        let checked = $(this).is(':checked')
        settingsState.enableClipboardCapture = checked
        setSettings_enableClipboardCapture(checked)
    });

    $defaultWidgetToggles = $('[data-widget-setting]')
    $defaultWidgetToggles.each(function() {
        applySettingToControls($(this).attr('data-widget-setting'))
    })
    $defaultWidgetToggles.on('change', function() {
        const setting = $(this).attr('data-widget-setting')
        const checked = typeof this.checked === 'boolean'
            ? this.checked
            : $(this).find('input[type="checkbox"]').prop('checked') === true
        settingsState[setting] = checked
        applyDefaultWidgetVisibility()
        setDefaultWidgetSetting(setting, checked)
    })

    $extensionPermissionsList = $('#extensionPermissionsList')
    $extensionPermissionsList.on('click', '.action.request', function() {
        let identity = $(this).data('identity')
        requestExtensionPermission(identity)
    })
    $extensionPermissionsList.on('click', '.action.revoke', function() {
        let identity = $(this).data('identity')
        revokeExtensionPermission(identity)
    })

    $('#refreshExtensionPermissions').on('click', function() {
        requestExtensionPermissionsStatus()
    })
});

///
/// Imports
///

function loadComponent(componentName, $targetElementSelector) {
    $.get("components/" + componentName + ".html", function(data) {
        $targetElementSelector.html(data);

        const defaultWidget = defaultWidgetDefinitions.find((widget) => widget.app === componentName)
        const defaultWidgetIsEnabled = !defaultWidget || settingsState[defaultWidget.setting] === true
        if (defaultWidgetIsEnabled && apps.indexOf(componentName) == -1)
            apps.push(componentName)
    }).fail(function() {
        console.error("Error loading component: " + componentName);
    });
}

///
/// Color picker
///
function initColorPicker(elId) {
    const theme = {
        swatches: [
            'rgba(244, 67, 54, 1)',
            'rgba(233, 30, 99, 0.95)',
            'rgba(156, 39, 176, 0.9)',
            'rgba(103, 58, 183, 0.85)',
            'rgba(63, 81, 181, 0.8)',
            'rgba(33, 150, 243, 0.75)',
            'rgba(3, 169, 244, 0.7)'
        ],

        defaultRepresentation: 'HEXA',
        components: {
            preview: true,
            opacity: true,
            hue: true,

            interaction: {
                hex: false,
                rgba: false,
                hsva: false,
                input: true,
                clear: true,
                save: true
            }
        }
    }

    const container = document.getElementById(elId);

    let pickr = null;

    const el = document.createElement('p');
    container.appendChild(el);

    // Delete previous instance
    if (pickr) {
        pickr.destroyAndRemove();
    }

    // Create fresh instance
    pickr = new Pickr(Object.assign({
        el, theme: 'nano',
        default: '#0000ff'
    }, theme));

    // Set events
    pickr.on('init', instance => {
        console.log('Event: "init"', instance);
    }).on('hide', instance => {
        console.log('Event: "hide"', instance);
    }).on('show', (color, instance) => {
        console.log('Event: "show"', color, instance);
    }).on('save', (color, instance) => {
        console.log('Event: "save"', color, instance);
    }).on('clear', instance => {
        console.log('Event: "clear"', instance);
    }).on('change', (color, source, instance) => {
        console.log('Event: "change"', color, source, instance);
    }).on('changestop', (source, instance) => {
        console.log('Event: "changestop"', source, instance);
    }).on('cancel', instance => {
        console.log('cancel', pickr.getColor().toRGBA().toString(0));
    }).on('swatchselect', (color, instance) => {
        console.log('Event: "swatchselect"', color, instance);
    });

    return pickr
}

///
/// My Widgets
///

// Use of the local storage to save the personal widgets. This is not the best way to do it, but it works for my lazyness.
let myWidgets = []
let pickers = []
let myWidgetsListLoad = []

let firstMyWidgetsLoad = true
function createMyWidgetId() {
    if(window.crypto?.randomUUID) return window.crypto.randomUUID()
    return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2)
}

function normalizedWidgetURL(url) {
    const value = (url || '').trim()
    if(!value || /^[a-z][a-z0-9+.-]*:/i.test(value)) return value
    return 'https://' + value
}

function loadMyWidgets() {
    let _myWidgets = localStorage.getItem("myWidgets")
    if (_myWidgets) {
        _myWidgets = JSON.parse(_myWidgets)
    }
    else {
        _myWidgets = []
    }

    myWidgetsListLoad = []
    let migratedWidgetIds = false
    for (let widget of _myWidgets) {
        if(!widget.id) {
            widget.id = createMyWidgetId()
            migratedWidgetIds = true
        }
        console.log("loading", widget)
        let res = newWidget(widget)        

        let $widget = res[1]

        let picker = res[2]
        pickers.push(picker)

        setTimeout(() => {
            myWidgetsListLoad.push(() => {
                picker.setColor(widget.color)                
            })

            picker.setColor(widget.color)
        }, 250)        
    }

    firstMyWidgetsLoad = false
    if(migratedWidgetIds) saveMyWidgets()
}

$('ons-list-item.myWidgets').on('click', (e) => {
    console.log("myWidgets ons-list-item clicked")
    for (let cbk of myWidgetsListLoad) {
        cbk()
    }
})

function clearMyWidgets() {
    saveMyWidgets()
    $("#myWidgetsList").html('')
    $(".myWidgetsItem").remove()
    myWidgets = []
    apps = [...baseApps]
    loadMyWidgets()
}

loadMyWidgets()  

function saveMyWidgets() {
    let json = JSON.stringify(myWidgets)
    console.log("saving", json)
    localStorage.setItem("myWidgets", json)
}

function checkMyWidgetTitle($leftMenu) {    
    let $img = $leftMenu.find('.img')
    let $text = $leftMenu.find('.text')

    let int = setInterval(() => {        
        if ($text.offset().left == $img.offset().left) {
            let curSize = parseInt($text.css('font-size').replace('px', ''))
            curSize--

            if (curSize == 0) {
                $text.css('font-size', '18px')
                clearInterval(int)
                toDoAtOpening.push(()=>{checkMyWidgetTitle($leftMenu)})
            }
            else {
                $text.css('font-size', curSize + 'px')
            }
        }  
        else {
            clearInterval(int)
        }
    }, 10)    
}

function newWidget(widget=null) {
    console.log("new widget")
    let $widget = $(".myWidget.template").clone()
    $widget.removeClass("template")
    // The template fallback is localizable, but this clone contains user data.
    // Leaving data-i18n attached lets a later localization reply overwrite the
    // saved title with "My widget name".
    $widget.find('.name').removeAttr('data-i18n')
    
    let num = myWidgets.length
    console.log("wiget num", num)

    widget = widget || { title: "My widget", color: "#0000ff" }
    widget.id = widget.id || createMyWidgetId()
    myWidgets.push(widget)

    let id = 'myWidget' + num
    $widget.attr('id', id)

    $("#myWidgetsList").append($widget)

    apps.push('myWidget' + num)

    let $leftMenu = $('<div class="appItem myWidgetsItem" id="appItem-myWidget' + num + '" onclick="openApp(\'myWidget' + num + '\')"><div class="img"><i class="fa-solid fa-circle"></i></div> <div class="text"></div></div>')
    $leftMenu.find('.text').text(widget.title)
    $leftMenu.find('.img').css('color', widget.color)

    let $app = $("#app-myWidget-template").clone()
    $app.addClass('myWidgetApp')
    $app.attr('id', 'app-myWidget' + num)
    let $nativeWebView = $app.find('.myWidgetWebView')
    $nativeWebView.attr('data-native-webview-id', 'my-widget-' + widget.id)
    $nativeWebView.attr('data-native-url', normalizedWidgetURL(widget.url))

    $widget.find('.colorPicker').attr('id','myWidgetColorPicker' + num)
    let picker = initColorPicker('myWidgetColorPicker' + num)

    $widget.find('.delete').on('click', () => {
        $widget.remove()
        $app.remove()
        $leftMenu.remove()

        let out = myWidgets.splice(num-myWidgets.length)
        console.log("myWidgets", myWidgets)
        console.log("outs", out)
        for (let i = 1; i < out.length; i++) {
            myWidgets.push(out[i])
        }
        console.log("myWidgets", myWidgets)

        clearMyWidgets()
    })

    picker.on('change', (color, source, instance) => {
        widget.color = picker.getColor().toRGBA().toString(0)

        $leftMenu.find('.img').css('color', widget.color)

        saveMyWidgets()
    })

    console.log('inputs', $widget.find('input'))

    let navigationUpdate = null
    $widget.find('input, .name').on('keyup', (e) => { 
        console.log("input keydown", e)
        widget.title = $widget.find('.name').text()
        $leftMenu.find('.text').text(widget.title)
        checkMyWidgetTitle($leftMenu)

        let newUrl = $widget.find('.url').val()
        widget.url = newUrl

        clearTimeout(navigationUpdate)
        navigationUpdate = setTimeout(() => {
            $nativeWebView.attr('data-native-url', normalizedWidgetURL(widget.url))
            scheduleNativeWebViewSync()
        }, 400)

        saveMyWidgets()
    })   

    // Create app
    $('.leftMenu').append($leftMenu)
    $('.overscreen').append($app)

    if (firstMyWidgetsLoad) {
        toDoAtOpening.push(() => {
            checkMyWidgetTitle($leftMenu)
        })
    }
    else {
        checkMyWidgetTitle($leftMenu)
    }

    $widget.find('.name').text(widget.title)
    $widget.find('.url').val(widget.url)

    if(!firstMyWidgetsLoad) saveMyWidgets()
    scheduleNativeWebViewSync()

    return [widget, $widget, picker]
}

// Spam discussions
const enableSpamDiscussions = false
if (enableSpamDiscussions) {
    let mihDiscussionsSpammed = localStorage.getItem("myWidgets_mihDiscussions")
    if (!mihDiscussionsSpammed) {
        newWidget({ title: "MakeItHome Discussions", color: "#eb7d34", url: "https://github.com/Geckos-Ink/MakeItHome/discussions" })
        saveMyWidgets()
        localStorage.setItem("myWidgets_mihDiscussions", "true")
    }
}

$("#reloadWidgetsZone").on('click', (e) => { 
    sendMessage({type: "reload"})
})
