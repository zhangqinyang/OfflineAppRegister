$(function () {
    $('#content').height($('#content').width() / 965 * 1012);

    $(".form_datetime").datetimepicker({
        minView: "month", //选择日期后，不会再跳转去选择时分秒
        format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式
        // 　　language: 'zh-CN', //汉化
        autoclose: true //选择日期后自动关闭
    })
});

var cookie_value;

function doRegist() {
    var name = registForm.nameVal.value;
    if (name == "") {
        $.alert("姓名不能为空！");
        return;
    }
    var gender = registForm.genderVal.value;
    var phone = registForm.phoneVal.value;
    if (phone == "") {
        $.alert("手机号不能为空！");
        return;
    }
    var password = registForm.passwdVal.value;
    if (password == "") {
        $.alert("密码不能为空！");
        return;
    }
    var passwdConfirm = registForm.passwdConfirmVal.value;
    if (password != passwdConfirm) {
        $.alert("密码不一致！");
        return;
    }
    var verifyCode = registForm.verifyVal.value;
    if (verifyCode == "") {
        $.alert("验证码不能为空！");
        return;
    }
    var idcard = registForm.idVal.value;
    var birthday = registForm.birthVal.value;
    var mail = registForm.mailVal.value;
    var address = registForm.addressVal.value;
    var postCode = registForm.postCodeVal.value;

    var outJson = {
        "name": name,
        "sex": gender,
        "phone": phone,
        "idcard": idcard,
        "bithday": birthday,
        "mail": mail,
        "address": address,
        "postalCode": postCode,
        "passwd": password,
        "varificationCode": verifyCode,
        //"shopId": "KJG001",
        "cookieValue": cookie_value
    }

    $.ajax({
        type: "POST",
        url: url + "/regist",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(outJson),
        dataType: "json",
        success: function (data) {
            registForm.verifyVal.value = "";
            registForm.passwdVal.value = "";
            registForm.passwdConfirmVal.value = "";

            if (data.sms_check == "false") {
                $.alert({
                    title: '注册失败',
                    content: '验证码错误！请重新输入!',
                    confirmButton: 'OK',
                    cancelButton: false,
                    animationBounce: 2.5
                });
                return;
            }

            var resultUrl = "success.html?rz_msg=" + data.rz_msg + "&rz_id=" + data.rz_id + "&fj_msg=" + data.fj_msg + "&fj_memberid=" + data.fj_memberid + "&fj_cardno=" + data.fj_cardno;
            window.location.href = resultUrl;
        },
        error: function (message) {
            $.alert("网络出错！");
        }
    });
}

function getVerifyCode() {
    var phone = registForm.phoneVal.value;
    if (phone == "") {
        $.alert("手机号不能为空！");
        return;
    }
    var time = new Date().getMilliseconds();
    cookie_value = md5(time);
    var outJson = {
        "phone": phone,
        "cookieValue": cookie_value
    };

    $.ajax({
        type: "POST",
        url: url + "/regist/verify",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(outJson),
        dataType: "json",
        success: function (data) {
            if (data.sms_status == '0' || data.sms_status == 0) {
                $.alert("验证码已发送");
            } else {
                $.alert("验证码发送失败，请重试！")
            }
        },
        error: function (message) {
            $.alert("网络出错！");
        }
    });
}