$(function () {
    let idList = ["KNMCDS","KNMTMRNGSTD","KNMTMRNGSTH","KNMTMRNGSTM","RTTLCHKBX56","KNMTMRNGETD","KNMTMRNGETH","KNMTMRNGETM","RTTLVAL56H","RTTLVAL56M"];
    for(let i = 0; i < idList.length; i++ ){
        $("#" + `${idList[i]}`).val(localStorage.getItem(`${idList[i]}`));
    }

    // 保存ボタン押下時処理
    $("#save").click(function () {
        for(let i = 0; i < idList.length; i++ ){
            localStorage.setItem(`${idList[i]}`, $("#" + `${idList[i]}`).val());
        }
    });
});