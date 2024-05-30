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

function convertToPlain(rtf) {
    return rtf.replace(/\\[a-z]+[0-9]?|\\'[0-9a-f]{2}|\\[0-9]+/gi, '')
            .replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, '')
            .trim();
}

function antiHtmlInjection(html){
    return html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
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

$("#clipboard").on('mousemove', function (e) {
    console.log(e.clientX, e.clientY)
    let width = $("#clipboard").width()
    let height = $("#clipboard").height()

    let ratioX = ((e.clientX - width / 2) / width)
    let ratioY = ((e.clientY - height / 2) / height)

    let translateX = ratioX * 10
    let translateY = ratioY * 10

    let parallaxY = ratioX * 10 * -1
    let parallaxX = ratioY * 10

    $("#clipboard .item").css("-webkit-transform", " rotateX(" + parallaxX +"deg) rotateY("+parallaxY+"deg) translateX(" + translateX + "px) translateY(" + translateY + "px)")
})

$("#clipboard").on('mouseexit', function (e) {
    //$("#clipboard .item").css("-webkit-transform", "rotateX(0deg) rotateY(0deg)")
    //$("#clipboard .item").animate({ "-webkit-transform": "rotateX(0deg) rotateY(0deg)" }, 100)
})

///
/// Board app
///

// Get a reference to the iframe element
var iframeBoard = document.getElementById('app-board-iframe');

// Post a message to the iframe
//iframe.contentWindow.postMessage('Hello from parent!', 'http://127.0.0.1:19494');

// Wait for the iframe to load (optional but recommended)
iframeBoard.addEventListener("load", function() {
    try{
        // Access the contentWindow of the iframe
        var iframeWindow = iframeBoard.contentWindow;

        // Access the document within the iframe
        var iframeDocument = iframeWindow.document;

        // You can now manipulate the content of the iframe
        var iframeBody = iframeDocument.body;
        var iframeContent = iframeBody.innerHTML;

        if(!iframeContent.includes("Fuse logo")){
            iframeBoard.contentWindow.location.reload();
        }

        console.log("Content of the iframe:", iframeContent);
    }
    catch(err) {
        console.error("iframe err: ", err)
    }
});

window.addEventListener('message', function(event) {
    // Check the origin of the message for security purposes
    if (event.origin !== "http://127.0.0.1:19494") {
        return; // Ignore messages from unknown sources
    }

    console.log('Message received in parent:', event.data);    

    // React to the message
});

function boardSend(what){
    if(typeof(what) == 'object'){
        what = JSON.stringify(what)
    }

    iframeBoard.contentWindow.postMessage(what, 'http://127.0.0.1:19494');
}

function openBoard(what){
    openApp('board')

    let req = {op: 'goTo', to: what}
    boardSend(req)

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

$grid.masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.item',
    // use element for option
    columnWidth: 80,
    gutter: 10,
    percentPosition: true,
    initLayout: true
})   

let pageShown = false

$(document).ready(function() {
    pageShown = true
})

let selEl = null
let canDragOut = false
let dontDrop = false // useless stuff (for the moment)

let $webSearchFrame = $("#webSearchFrame")

function receiveMessage(message){

    console.log("received message: ", message)
    
    if (typeof(message) == "object") {
        let obj = message

        switch(obj.type){
            case 'setSetting':
                if(obj.valBool !== undefined) retrieveSetting(obj.setting, obj.valBool)
                break;

            case 'toApp':
                try {
                    eval("appReceive_"+obj.value+"(obj)")
                } catch {}
                break;
        }

        if(obj.type == 'removeUpTo'){
            let upTo = parseInt(obj.value)
            $grid.find('.item').each(function(i, e){
                let $e = $(e)
                let id = $e.attr('id').split('-')[1]
                if(parseInt(id) < upTo){
                    $e.remove()
                }
            })
        }

        if (obj.type == 'removeClipboardItem') {
            let itemId = parseInt(obj.value)

            $grid.find('.item').each(function (i, e) {
                let $e = $(e)
                let id = $e.attr('id').split('-')[1]
                if (parseInt(id) == itemId) {
                    $e.remove()
                }
            })
        }

        if(obj.type == 'frameResponse'){
            let url = obj.url;
                        
            if(url.includes('/url?q=')){
                url = getQueryParameters(url)['q'];
                $webSearchFrame[0].src = bridgeUrl(url);
            }

            if(!obj.data){
                $webSearchFrame[0].src = bridgeUrl(url);
                return;
            }            

            let html = fromBinary(obj.data)
            //html = obj.value;
            //html = decodeURIComponent(html);
            html = convertRelativeUrlsToAbsolute(html, url)
            $webSearchFrame[0].contentWindow.postMessage(html, "*");
        }

        if(obj.type == 'newClipboardItem'){

            let item = obj.value
            let format = obj.format

            let isStr = false
            if(obj.str){                    
                item = obj.str

                if(format == 'rtf'){
                    item = convertToPlain(item)                        
                    isStr = true
                }
            }

            if(obj.imgBase && !isStr){
                item = '<img src="data:image/png;base64,'+obj.imgBase+'">'

                if(obj.str){
                    item += '<div class="name"><div class="str">'+obj.str+'</div></div>'
                }
            }
            else if(obj.str){
                item = antiHtmlInjection(item);
                isStr = true
            }

            let classes = ''
            if (isStr) classes += ' str grid-sizer--width2'
            else classes += ' grid-sizer--width1'

            let elIdNum = obj.id
            let elId = 'paste-' + elIdNum

            let $item = $('<div id="'+elId+'" class="item'+classes+'">'+item+'</div>')
            $grid.append( $item )
            
            var scrollBottomTimeout = null

            let tryToSet = setInterval(()=>{
                let $el = $('#'+elId)

                if(!pageShown){
                    return
                }
                clearInterval(tryToSet)

                $grid.masonry( 'appended', $item );

                // Improve label
                let $img = $el.find('img')
                let $name = $el.find(".name .str")
                if($name.length > 0 && $img.length > 0){
                    $img.css('margin-bottom', ($name.height()+10)+'px')                
                }

                clearTimeout(scrollBottomTimeout)
                    scrollBottomTimeout = setTimeout(()=>{
                        scrollGridBottom()
                },100)        

                $el.click(()=>{  
                    dontDrop = true                      
                    selEl = $el

                    unselectAll()
                    $el.css('border', '1.5px solid red')    

                    canDragOut = true

                    sendMessage({
                        type: 'selItem',
                        id: elIdNum
                    })                        
                })

                $el.on('mouseup', (ev)=>{
                    setTimeout(()=>{
                        dontDrop = false
                    }, 100)                        
                })

                // Right-click: item delete
                $el.on('contextmenu', function(ev) {
                    console.log("item right click")
                    $el.fadeOut(250, ()=>{
                        $el.remove()
                    })                    
                });

                //$grid.append("newIt")

                unselectAll()
                scrollGridBottom()
            },50)                                
        }

        return
    }

    if(message == 'opening'){
        onApp = true; // confirm that received a message that send only the app

        pageShown = true
        canDragOut = false                        
        scrollGridBottom()

        //reset
        clearOnScrollable()

        stopFullscreenMode();        
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
    $grid.find(".item").css('border', '1.5px solid rgba(0,0,0,0)')
}


let accumulateScrollGridBottom = null
function scrollGridBottom(){
    clearTimeout(accumulateScrollGridBottom)

    accumulateScrollGridBottom = setTimeout(()=>{
        let scroll = $gridDown.prop("scrollHeight")
        let maxHeight = $("#clipboard").height()

        if(scroll > maxHeight)
            scroll = maxHeight

        $gridDown.outerHeight(scroll)

        $gridDown.animate({ scrollTop: $gridDown.prop("scrollHeight")}, 500);    
    }, 100)           
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
let apps = [
    'settings',
    'clipboard',
    'board-notes',
    'board-tasks',
    'calendar',
    //'board-scrumboard'
]

let baseApps = [...apps]

let selApp = 1

const appSwitchSpeed = 250
let curApp = "clipboard"

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
function startFullscreenMode(){
    if(!fullscreenMode){
        sendMessage({type: "enterFullscreen"})
        fullscreenMode = true;

        $extension.animate({
            opacity: 1
        }, 250)
    }
}

function stopFullscreenMode(){
    if(fullscreenMode){
        sendMessage({type: "closeFullscreen"})

        $extension.animate({
            opacity: 0
        }, 250)

        fullscreenMode = false;
        searchSelectAll = true;
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
        
        setTimeout(()=>{

            $webSearch.show();

            sendMessage({type: 'navUrl', url: url})

            $webSearch.animate({
                opacity: 1
            }, 250, ()=>{
                var rect = $webSearchFrame[0].getBoundingClientRect();
                sendMessage({type: "navPos", x: rect.x, y: rect.y, width: $webSearchFrame[0].offsetWidth, height: $webSearchFrame[0].offsetHeight})
            });

        }, 100);

        return;

        //url = "https://duckduckgo.com/?q="+encodeURIComponent($searchBar.val().replaceAll(' ', '+'));
        url = bridgeUrl(url)

        //$webSearchFrame.attr('src', 'mrWhite.html')

        $webSearchFrame.attr('src', url)

        $webSearch.animate({
            opacity: 1
        }, 250);
    }
}

/*$webSearchFrame.click((e)=>{
    
})*/

$webSearch.click((e)=>{
    alert("click")
    stopFullscreenMode();
})

window.addEventListener('message', function(event) {
    // Used for communication with iframe, could receive invalid data
    if(!event.data) return; 

    console.log("Message received from the child: " + event.data); // Message received from child

    $webSearchFrame[0].src = "mrWhite.html";

    let url = event.data.replace("file:///", "")
    //url = "https://geckos.ink/api/proxy.php?url="+encodeURIComponent(url)

    sendMessage({type:"frameOpen", value: url });
});

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
    }, 100)
    
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
renderParagraph(".section.guides .paragraphs")
renderParagraph(".section.myWidgets .paragraphs")

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

$("ons-list-item.myWidgets").on('click', () => {
    showSettingsSection("myWidgets")
})

///
/// Events
///

function clearClipboard(){
    $grid.animate({opacity: 0}, 500, ()=>{
        $grid.html('')
        $grid.css('opacity', '1')
    })
}

///
/// Settings
///

let $checkDragAndDropDetect = null

function retrieveSetting(setting, val){
    if(setting == "detectDragAndDrop") 
        $checkDragAndDropDetect.prop('checked', val);
}

function setSettings_dragAndDropDetect(val){
    sendMessage({
        type: 'setSetting',
        setting: 'detectDragAndDrop',
        valBool: val
    })
}

$(document).ready(function() {
    $checkDragAndDropDetect = $('#check-detectDragAndDrop')
    $checkDragAndDropDetect.on('change', function() {
        let checked = $(this).is(':checked')
        setSettings_dragAndDropDetect(checked)
    });
});

///
/// Imports
///

function loadComponent(componentName, $targetElementSelector) {
    $.get("components/" + componentName + ".html", function(data) {
        $targetElementSelector.html(data);

        if (apps.indexOf(componentName) == -1)
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

function loadMyWidgets() {
    let _myWidgets = localStorage.getItem("myWidgets")
    if (_myWidgets) {
        _myWidgets = JSON.parse(_myWidgets)
    }
    else {
        _myWidgets = []
    }

    myWidgetsListLoad = []
    for (let widget of _myWidgets) {
        console.log("loading", widget)
        let res = newWidget(widget)        

        let $widget = res[1]
        $widget.find('.name').html(widget.title)
        $widget.find('.url').val(widget.url)

        let picker = res[2]
        pickers.push(picker)

        setTimeout(() => {
            myWidgetsListLoad.push(() => {
                picker.setColor(widget.color)
            })
        }, 250)        
    }
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

function newWidget(widget=null) {
    console.log("new widget")
    let $widget = $(".myWidget.template").clone()
    $widget.removeClass("template")
    
    let num = myWidgets.length
    console.log("wiget num", num)

    widget = widget || { title: "My widget", color: "#0000ff" }
    myWidgets.push(widget)

    let id = 'myWidget' + num
    $widget.attr('id', id)

    $("#myWidgetsList").append($widget)

    apps.push('myWidget' + num)

    let $leftMenu = $('<div class="appItem myWidgetsItem" id="appItem-myWidget'+num+'" onclick="openApp(\'myWidget'+num+'\')"><div class="img"><i class="fa-solid fa-circle"></i></div> <div class="text">'+widget.title+'</div></div>')
    $leftMenu.find('.img').css('color', widget.color)

    let $app = $("#app-myWidget-template").clone()
    $app.addClass('myWidgetApp')
    $app.attr('id', 'app-myWidget' + num)
    $app.find('iframe').attr('src', widget.url)

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

    $widget.find('input, .name').on('keyup', (e) => { 
        console.log("input keydown", e)
        widget.title = $widget.find('.name').html()
        $leftMenu.find('.text').html(widget.title)

        let newUrl = $widget.find('.url').val()
        if (newUrl != widget.url)
            $app.find('iframe').attr('src', newUrl)

        widget.url = newUrl

        saveMyWidgets()
    })    

    // Create app
    $('.leftMenu').append($leftMenu)
    $('.overscreen').append($app)

    return [widget, $widget, picker]
}