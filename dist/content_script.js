$(function () {
    chrome.runtime.sendMessage({
        method: "getLocalStorage",
        key1: 'KNMCDS',
        key2: 'KNMTMRNGSTD',
        key3: 'KNMTMRNGSTH',
        key4: 'KNMTMRNGSTM',
        key5: 'RTTLCHKBX56',

    }, function (response) {
        $("select option").attr("selected", false);
        //ローカルストレージから設定した値を取得
        $('select[name="KNMCDS"]')  .val(response.Key_KNMCDS);
        $('select[name="KNMTMRNGSTD"]').val(response.Key_KNMTMRNGSTD);
        $('input[name="KNMTMRNGSTH"]').val(response.Key_KNMTMRNGSTH);
        $('input[name="KNMTMRNGSTM"]').val(response.Key_KNMTMRNGSTM);
        $('checkbox[name="RTTLCHKBX56"]').val(response.Key_RTTLCHKBX56);
    });
});