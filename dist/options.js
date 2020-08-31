$(function () {
    // 通知バーを隠す
    $('.toast').hide();

    // フォームのIDリスト一覧（チェックボックスのID[RTTLCHKBX56]を省く）
    let idList = ["KNMCDS", "KNMTMRNGSTD", "KNMTMRNGSTH", "KNMTMRNGSTM", "KNMTMRNGETD", "KNMTMRNGETH", "KNMTMRNGETM", "RTTLVAL56H", "RTTLVAL56M",
        "GI_TIME50_Seq0D", "GI_TIME50_Seq0H", "GI_TIME50_Seq0M", "GI_TIME51_Seq0D", "GI_TIME51_Seq0H", "GI_TIME51_Seq0M",
        "SGYCD1S", "SGYCD2S", "JSKMM"
    ];

    // ローカルストレージから設定されている値を取得し、各フォームに値を入力する
    for (let i = 0; i < idList.length; i++) {
        $("#" + `${idList[i]}`).val(localStorage.getItem(`${idList[i]}`));
    }

    // ローカルストレージから休憩時間修正の値を取得し、チェックを付ける必要があれば付ける
    let data = localStorage.getItem("RTTLCHKBX56");
    if (data == 1) {
        $("input[name='RTTLCHKBX56']").attr("checked", "checked");
    }

    // 保存ボタン押下処理
    $("#save").click(function () {
        for (let i = 0; i < idList.length; i++) {
            localStorage.setItem(`${idList[i]}`, $("#" + `${idList[i]}`).val());
        }
        if (data == 1) {
            localStorage.setItem("RTTLCHKBX56", 1);
        } else {
            localStorage.setItem("RTTLCHKBX56", 0);
        }
        $('.toast_save').slideDown();

        setTimeout(function () {
            $('.toast').slideUp();
        }, 1500);
    });

    // リセットボタン押下処理
    $("#reset").click(function () {
        for (let i = 0; i < idList.length; i++) {
            localStorage.setItem(`${idList[i]}`, $("#" + `${idList[i]}`).val(null));
            localStorage.setItem(`${idList[i]}`, $("#" + `${idList[i]}`).val());
        }
        data = 0;
        localStorage.setItem("RTTLCHKBX56", 0);
        $("input[name='RTTLCHKBX56']").prop("checked", false);

        $('.toast_reset').slideDown();

        setTimeout(function () {
            $('.toast').slideUp();
        }, 1500);
    });

    // 休憩時間チェックボックス押下処理
    $("input[name='RTTLCHKBX56']").click(function () {
        if ($(this).is(":checked")) {
            data = 1;
        } else {
            data = 0;
        }
    });

    // Toastの×ボタン押下処理
    $(".toastbtn").click(function ToastBtn() {
        $('.toast').slideUp();
    });

    
});