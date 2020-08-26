chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.method == "getLocalStorage")
        sendResponse({
            Key_KNMCDS:localStorage[request.key1],
            Key_KNMTMRNGSTD:localStorage[request.key2],
            Key_KNMTMRNGSTH:localStorage[request.key3],
            Key_KNMTMRNGSTM:localStorage[request.key4],
            Key_RTTLCHKBX56:localStorage[request.key5],
        });
    else
        sendResponse({});
});