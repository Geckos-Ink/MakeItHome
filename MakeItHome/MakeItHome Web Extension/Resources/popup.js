console.log("Hello World!", browser);

function forceConnect(){
    chrome.runtime.sendMessage({extensionStart: true});
}

function takeScreenshot(){
    console.log("take screenshot")
    chrome.runtime.sendMessage({takeScreenshot: true});
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("takeScreenshot").addEventListener("click", takeScreenshot);
});

forceConnect()

///
///

function checkConnectionStatus(){
    let connected = document.getElementById('isConnected')
    let notConnected = document.getElementById('isNotConnected')
    chrome.runtime.sendMessage({ action: "checkConnectionStatus" }, (response) => {
        if(response.toConnect){
            connected.style.display = "none";
            notConnected.style.display = "inline-block";
        }
        else {
            notConnected.style.display = "none";
            connected.style.display = "inline-block";
        }
    });
}

setInterval(()=>{
    checkConnectionStatus()
}, 500)

checkConnectionStatus()

document.getElementById('reset').addEventListener('click', ()=>{
    chrome.runtime.sendMessage({action: 'reset'});
})
