var oName =document.getElementById("loginname");
console.log(oName);
var defaultValue =null;
var flag=false;

oName.onfocus=function(){

    if(oName.parentNode.lastElementChild.nodeName.toLowerCase()=="span"){
        this.parentNode.removeChild(this.parentNode.lastElementChild);
    }
    utils.removeClass(oName,"input_warning");

};
oName.onblur=function(){
    if(flag){
        if(!oTip){
            oTip=document.createElement("span");
            oTip.id="input_tips";
            this.parentNode.insertBefore(oTip,this.nextSibling);
        }
        oTip.className="input_tips";
        oTip.innerHTML="请输入已验证手机/邮箱/用户名";
        utils.addClass(oName,"input_warning");

    }
    var regSpace=/\s+/g;
    this.value=this.value.replace(regSpace,"");
    var reg=/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if(reg.test(this.value)){
        utils.removeClass(oName,"input_warning");
        var oTip=document.getElementById("input_tips");

        if(oTip) {
            if (oName.parentNode.lastElementChild.nodeName.toLowerCase() == "span") {
                this.parentNode.removeChild(this.parentNode.lastElementChild);
            }
        }
    }else{
        var oTip=document.getElementById("input_tips");
        if(this.value==this.defaultValue){
            return;
        }else{
            if(!oTip){
                oTip=document.createElement("span");
                oTip.id="input_tips";
                this.parentNode.insertBefore(oTip,this.nextSibling);
            }
            oTip.className="input_tips";
            oTip.innerHTML="请输入有效的用户名";
            utils.addClass(oName,"input_warning");
        }
    }

    flag= true;
};
var login=document.getElementById('button');
console.log(login);
login.onclick=function(){
    var userName=document.getElementById('loginname');
    var password=document.getElementById('password');
    var pass=password.value.replace(/^ +| +$/g,'');
    var name=userName.value.replace(/^ +| +$/g,'');
    console.log(pass);
    console.log(name);
    var obj={
        name:name,
        pass:pass
    };
    sendAJAX({
        url: "/login?name="+name,
        type: "post",
        data: JSON.stringify(obj),
        success: function (data) {
            if (data["code"] == 0) {
                window.location.href = "index.html";
            }
        }
    });
}