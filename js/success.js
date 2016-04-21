/**
 * Created by johsnon on 2016/4/21.
 */

var rz_msg = getParameter('rz_msg');
var rz_id = getParameter('rz_id');

var fj_msg = getParameter('fj_msg');
var fj_memberid = getParameter('fj_memberid');
var fj_cardno = getParameter('fj_cardno');

$.alert({
    title: '注册结果',
    content: rz_msg + '<br>会员编号：' + rz_id + '<br><br>' + fj_msg + '<br>会员编号：' + fj_memberid + '<br>会员卡号：' + fj_cardno,
    confirmButton: 'OK',
    cancelButton: false,
    animationBounce: 2.5
});