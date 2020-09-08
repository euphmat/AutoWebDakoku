$(function () {
    chrome.runtime.sendMessage({
        method: "getLocalStorage",
        key1:  'KNMCDS',
        key2:  'KNMTMRNGSTD',
        key3:  'KNMTMRNGSTH',
        key4:  'KNMTMRNGSTM',
        key5:  'RTTLCHKBX56',
        key6:  'KNMTMRNGETD',
        key7:  'KNMTMRNGETH',
        key8:  'KNMTMRNGETM',
        key9:  'RTTLVAL56H',
        key10: 'RTTLVAL56M',
        key11: 'GI_TIME50_Seq0D',
        key12: 'GI_TIME50_Seq0H',
        key13: 'GI_TIME50_Seq0M',
        key14: 'GI_TIME51_Seq0D',
        key15: 'GI_TIME51_Seq0H',
        key16: 'GI_TIME51_Seq0M',
        key17: 'SGYCD1S',
        key18: 'SGYCD2S',
        key19: 'JSKMM',
        key20: 'ENABLEDISABLE',

    }, function (response) {
        // 有効化／無効化スイッチが有効の時のみ実行される
        if(response.Key_ENABLEDISABLE == 1 || response.Key_ENABLEDISABLE == null){
            //ローカルストレージから設定したおいた値を取得し、それぞれのフォームへ自動的に入力させる
            $('select[name="KNMCDS"]').val(response.Key_KNMCDS);
            $('select[name="KNMTMRNGSTD"]').val(response.Key_KNMTMRNGSTD);
            $('input[name="KNMTMRNGSTH"]').val(response.Key_KNMTMRNGSTH);
            $('input[name="KNMTMRNGSTM"]').val(response.Key_KNMTMRNGSTM);
            $('checkbox[name="RTTLCHKBX56"]').val(response.Key_RTTLCHKBX56);
            $('select[name="KNMTMRNGETD"]').val(response.Key_KNMTMRNGETD);
            $('input[name="KNMTMRNGETH"]').val(response.Key_KNMTMRNGETH);
            $('input[name="KNMTMRNGETM"]').val(response.Key_KNMTMRNGETM);
            if (response.Key_RTTLCHKBX56 == 1){
                $("input[name='RTTLCHKBX56']").prop("checked", true);
                $('input[name="RTTLVAL56H"]').prop('disabled', false);
                $('input[name="RTTLVAL56M"]').prop('disabled', false);
                $('input[name="RTTLVAL56H"]').val(response.Key_RTTLVAL56H);
                $('input[name="RTTLVAL56M"]').val(response.Key_RTTLVAL56M);
            }else{
                $('input[name="RTTLVAL56H"]').val(1);
                $('input[name="RTTLVAL56M"]').val(0);
            }
            $('select[name="GI_TIME50_Seq0D"]').val(response.Key_GI_TIME50_Seq0D);
            $('select[name="GI_TIME50_Seq0H"]').val(response.Key_GI_TIME50_Seq0H);
            $('select[name="GI_TIME50_Seq0M"]').val(response.Key_GI_TIME50_Seq0M);
            $('select[name="GI_TIME51_Seq0D"]').val(response.Key_GI_TIME51_Seq0D);
            $('select[name="GI_TIME51_Seq0H"]').val(response.Key_GI_TIME51_Seq0H);
            $('select[name="GI_TIME51_Seq0M"]').val(response.Key_GI_TIME51_Seq0M);
            $('select[name="SGYCD1S"]').val(response.Key_SGYCD1S);
            $('select[name="SGYCD2S"]').val(response.Key_SGYCD2S);
            $('textarea[name="JSKMM"]').val(response.Key_JSKMM);
        }
    });
});