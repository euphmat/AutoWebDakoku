chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.method == "getLocalStorage")
        sendResponse({
            Key_KNMCDS          : localStorage[request.key1],
            Key_KNMTMRNGSTD     : localStorage[request.key2],
            Key_KNMTMRNGSTH     : localStorage[request.key3],
            Key_KNMTMRNGSTM     : localStorage[request.key4],
            Key_RTTLCHKBX56     : localStorage[request.key5],
            Key_KNMTMRNGETD     : localStorage[request.key6],
            Key_KNMTMRNGETH     : localStorage[request.key7],
            Key_KNMTMRNGETM     : localStorage[request.key8],
            Key_RTTLVAL56H      : localStorage[request.key9],
            Key_RTTLVAL56M      : localStorage[request.key10],
            Key_GI_TIME50_Seq0D : localStorage[request.key11],
            Key_GI_TIME50_Seq0H : localStorage[request.key12],
            Key_GI_TIME50_Seq0M : localStorage[request.key13],
            Key_GI_TIME51_Seq0D : localStorage[request.key14],
            Key_GI_TIME51_Seq0H : localStorage[request.key15],
            Key_GI_TIME51_Seq0M : localStorage[request.key16],
        });
    else
        sendResponse({});
});