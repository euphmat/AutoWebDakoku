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
    let restCheckBox = localStorage.getItem("RTTLCHKBX56");
    if (restCheckBox == 1) {
        $("input[name='RTTLCHKBX56']").prop("checked", true);
    }

    // 有効化無効化スイッチの値を取得し、チェックを付ける必要があれば付ける
    let enabledisableSwitch = localStorage.getItem("ENABLEDISABLE");
    if (enabledisableSwitch == 1) {
        $("input[name='ENABLEDISABLE']").prop("checked", true);
        formEnable();
    }else{
        $("input[name='ENABLEDISABLE']").prop("checked", false);
        formDisable();
    }

    // 有効化無効化スイッチ押下処理
    $("input[name='ENABLEDISABLE']").click(function () {
        if ($(this).is(":checked")) {
            localStorage.setItem("ENABLEDISABLE", 1);
            formEnable();
        }else{
            localStorage.setItem("ENABLEDISABLE", 0);
            formDisable();
        }
        
    });

    // 保存ボタン押下処理
    $("#save").click(function () {
        for (let i = 0; i < idList.length; i++) {
            localStorage.setItem(`${idList[i]}`, $("#" + `${idList[i]}`).val());
        }
        if (restCheckBox == 1) {
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
        restCheckBox = 0;
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
            restCheckBox = 1;
        } else {
            restCheckBox = 0;
        }
    });

    // Toastの×ボタン押下処理
    $(".toastbtn").click(function () {
        $('.toast').slideUp();
    });

    function formDisable(){
        for (let i = 0; i < idList.length; i++) {
            $("#" + `${idList[i]}`).prop("disabled", true);
        }
        $("input[name='RTTLCHKBX56']").prop("disabled", true);
        $('#save').prop("disabled", true);
        $('#reset').prop("disabled", true);
    }

    function formEnable(){
        for (let i = 0; i < idList.length; i++) {
            $("#" + `${idList[i]}`).prop("disabled", false);
        }
        $("input[name='RTTLCHKBX56']").prop("disabled", false);
        $('#save').prop("disabled", false);
        $('#reset').prop("disabled", false);
    }
});