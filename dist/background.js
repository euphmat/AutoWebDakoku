chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.method == "getLocalStorage")
        sendResponse({
            Data_KNMCDS:   localStorage[request.key1]
        });
    else
        sendResponse({});
});