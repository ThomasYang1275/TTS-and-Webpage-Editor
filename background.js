function sendMessage() {
    chrome.tabs.query({ active: !0, currentWindow: !0 },
        function (e) {
            chrome.tabs.sendMessage(e[0].id, { action: "pageToSpeech" },
                function (e) { })
        })
}
chrome.browserAction.onClicked.addListener(function (e) { sendMessage() });