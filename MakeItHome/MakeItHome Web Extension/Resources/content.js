setInterval(()=>{
    browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
        console.log("MakeItHome Web: Received response: ", response);
    });
}, 1000)

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});

//chrome.runtime.sendMessage({extensionStart: true});
