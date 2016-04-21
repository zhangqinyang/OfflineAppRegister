
$(function(){
	$('#content').height($('#content').width()/965*1012);

	$(".form_datetime").datetimepicker({
		minView: "month", //选择日期后，不会再跳转去选择时分秒 
	　　format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式 
	// 　　language: 'zh-CN', //汉化 
	　　autoclose:true //选择日期后自动关闭 
	})
});

function doRegist(){
    var name=registForm.nameVal.value;
    var gander=registForm.genderVal.value;
    var phone=registForm.phoneVal.value;
    var verify=registForm.verifyVal.value;
    var idCard=registForm.idVal.value;
    var birthday=registForm.birthVal.value;
    var shopName=registForm.shopId.value;
    var mail=registForm.mailVal.value;
    var address=registForm.addressVal.value;
    var postcode=registForm.postCodeVal.value;

    var outJson='{';
   if(name==''){
       alert('姓名不能为空！');
       return ;
   }
    outJson+='"guestname": "'+name+'"';
    outJson+=',"guestsex": "'+gander+'"';
    if(phone!=''){
        outJson+=',"mobile": "'+phone+'"';
    }
    if(verify==''){
        alert('验证码不能为空！');
        return ;
    }
    //outJson+='';
    if(idCard==''){
        alert('身份证号不能为空！');
        return ;
    }
    outJson+='';

    //alert(name+' '+gander+' '+phone+' '+verify+' '+idCard+' '+birthday+' '+shopName+' '+mail+' '+address+' '+postcode);

    var host="101.227.214.215:58888";
    var url="http://"+host+"/service/call?service=com.myshopr5.memberguest.v1.regmember&sign=md5";

}

