$(function () {
    chrome.runtime.sendMessage({
        method: "getLocalStorage",
        key1: 'KNMCDS'
    }, 
    function (response) {
        //ローカルストレージから設定した値を取得
        $('select[name="KNMCDS"]')  .val(response.Data_KNMCDS);     //出勤時刻_時
    });
});