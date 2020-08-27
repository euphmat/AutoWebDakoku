$(function () {
    let idList = ["KNMCDS","KNMTMRNGSTD","KNMTMRNGSTH","KNMTMRNGSTM","KNMTMRNGETD","KNMTMRNGETH","KNMTMRNGETM","RTTLVAL56H","RTTLVAL56M",
                "GI_TIME50_Seq0D","GI_TIME50_Seq0H","GI_TIME50_Seq0M","GI_TIME51_Seq0D","GI_TIME51_Seq0H","GI_TIME51_Seq0M",
                "SGYCD1S","SGYCD2S","JSKMM"];
    for(let i = 0; i < idList.length; i++ ){
        $("#" + `${idList[i]}`).val(localStorage.getItem(`${idList[i]}`));
    }

    // CheckBoxにチェックが入れられて保存されていればチェックを付ける
    let data = localStorage.getItem("RTTLCHKBX56");
    if (data == 1) {
        $("input[name='RTTLCHKBX56']").attr("checked", "checked");
    }
    
    // CheckboxのLocalStorage値切り替え
    $("input[name='RTTLCHKBX56']").click(function() {
        if ($(this).is(":checked")) {
            data = 1;
        } else {
            data = 0;

        }
    });


    // 保存ボタン押下時処理
    $("#save").click(function SaveBtn() {
        for(let i = 0; i < idList.length; i++ ){
            localStorage.setItem(`${idList[i]}`, $("#" + `${idList[i]}`).val());
        }
        if (data == 1) {
            localStorage.setItem("RTTLCHKBX56", 1);
        }else{
            localStorage.setItem("RTTLCHKBX56", 0);
        }
    });

    $("#reset").click(function ResetBtn() {
        for(let i = 0; i < idList.length; i++ ){
            localStorage.setItem(`${idList[i]}`, $("#" + `${idList[i]}`).val(null));
            localStorage.setItem(`${idList[i]}`, $("#" + `${idList[i]}`).val());
        }
        localStorage.setItem("RTTLCHKBX56", 0);
        $("input[name='RTTLCHKBX56']").prop("checked", false);
    });
});