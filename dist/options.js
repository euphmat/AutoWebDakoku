$(function () {
    //起動時にLocalStrageの値をテキストボックスへ格納
    $("#KNMCDS").val(localStorage.getItem('KNMCDS'));

    //保存ボタン
    $("#save").click(function () {
        localStorage.setItem('KNMCDS', $("#KNMCDS").val());
        alert("設定を保存しました。");
    });
});