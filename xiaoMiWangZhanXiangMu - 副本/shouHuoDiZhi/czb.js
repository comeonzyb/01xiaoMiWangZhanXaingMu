var name_info = document.getElementById('name');
var full_Address_info = document.getElementById('full_Address');
var youBian_info = document.getElementById('youBian');
var phone_info = document.getElementById('phone_number');
//计算输入的字符长度
function getLength(str) {
    var countLength = 0;
    for (var i = 0; i < str.length; i++) {
        char_code = str.charCodeAt(i); //取每一个字符的code值
        if (char_code >= 0 && char_code <= 128) {
            countLength += 1; //如果非汉字就自加1
        } else {
            countLength += 2; //如果非汉字以外就自加2
        }
    }
    return countLength;
}
//获取焦点和失去焦点
(function showHint(){
    for(var i=0,j=document.getElementsByTagName("input");i<j.length;i++){
        j[i].addEventListener("focus",function(){//表单获取焦点时获得提示
            this.nextElementSibling.style.display = "block";
        },false)
        j[i].addEventListener("blur",function(){//表单失去焦点时，显示验证结果
            validateName();
            validateAddress();
            validateYouBian();
            validatePhone();
        },false)
    }
})();

//验证账号
var validateName = function() {
    if (name_info.value == "") { //验证是否为空
        name_info.nextElementSibling.innerHTML = "必填，长度为4~16个字符";
        name_info.nextElementSibling.style.color = "#BBB";
        name_info.style.border = "1px solid #888";
        return;
    } else if (getLength(name_info.value) < 4 || getLength(name_info.value) > 16) { //验证长度是否符合标准
        name_info.nextElementSibling.innerHTML = "长度只能为为4~16个字符";
        name_info.nextElementSibling.style.color = "#f00";
        name_info.style.border = "2px solid #f00";
        return;
    } else {
        name_info.nextElementSibling.innerHTML = "名称格式正确";
        name_info.nextElementSibling.style.color = "#0f0";
        name_info.style.border = "2px solid #0f0";
        return name_info.value;
    }
}
//详细地址
var validateAddress = function() {
    if (full_Address_info.value == "") { //验证是否为空
        full_Address_info.nextElementSibling.innerHTML = "必填，长度为4~16个字符";
        full_Address_info.nextElementSibling.style.color = "#BBB";
        full_Address_info.style.border = "1px solid #888";
        return;
    } else if (getLength(full_Address_info.value) < 4 || getLength(full_Address_info.value) > 16) { //验证长度是否符合标准
        full_Address_info.nextElementSibling.innerHTML = "长度只能为为4~16个字符";
        full_Address_info.nextElementSibling.style.color = "#f00";
        full_Address_info.style.border = "2px solid #f00";
        return;
    } else {
        full_Address_info.nextElementSibling.innerHTML = "名称格式正确";
        full_Address_info.nextElementSibling.style.color = "#0f0";
        full_Address_info.style.border = "2px solid #0f0";
        return full_Address_info.value;
    }
}
//邮政编码
var validateYouBian = function() {
    if (youBian_info.value == "") { //验证是否为空
        youBian_info.nextElementSibling.innerHTML = "必填，长度为4~16个字符";
        youBian_info.nextElementSibling.style.color = "#BBB";
        youBian_info.style.border = "1px solid #888";
        return;
    } else if (getLength(youBian_info.value) < 4 || getLength(youBian_info.value) > 16) { //验证长度是否符合标准
        youBian_info.nextElementSibling.innerHTML = "长度只能为为4~16个字符";
        youBian_info.nextElementSibling.style.color = "#f00";
        youBian_info.style.border = "2px solid #f00";
        return;
    } else {
        youBian_info.nextElementSibling.innerHTML = "名称格式正确";
        youBian_info.nextElementSibling.style.color = "#0f0";
        youBian_info.style.border = "2px solid #0f0";
        return youBian_info.value;
    }
}

//验证手机号码
var validatePhone = function(){
    if(phone_info.value != ""){
        var filter = /^1[3|4|5|8][0-9]\d{8}$/i;
        if(filter.test(phone_info.value)){
            phone_info.nextElementSibling.innerHTML = "手机格式正确";
            phone_info.nextElementSibling.style.color = "#0f0";
            phone_info.style.border = "2px solid #0f0";
        }else{
            phone_info.nextElementSibling.innerHTML = "手机格式错误";
            phone_info.nextElementSibling.style.color = "#f00";
            phone_info.style.border = "2px solid #f00";
        }
    }else{
        phone_info.nextElementSibling.innerHTML = "输入您的手机号码";
        phone_info.nextElementSibling.style.color = "#BBB";
        phone_info.style.border = "1px solid #888";
    }
}
var validateAll = function (){
    if(phone_info.nextElementSibling.style.color == "rgb(0, 255, 0)"&&email_info.nextElementSibling.style.color == "rgb(0, 255, 0)"&&password_info.nextElementSibling.style.color == "rgb(0, 255, 0)"&&name_info.nextElementSibling.style.color == "rgb(0, 255, 0)"&&full_Address_info.nextElementSibling.style.color == "rgb(0, 255, 0)"){
        alert("提交成功！")
    }else{
        alert("提交失败，请正确填写。")
    }
}