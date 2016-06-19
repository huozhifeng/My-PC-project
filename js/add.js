var oSubmit = document.getElementById("btn");
var userName = document.getElementById("userName"),
    userPs = document.getElementById("password"),
    userPs1 = document.getElementById("password1"),
    userPhone = document.getElementById("userPhone"),
    userCode = document.getElementById("code");
    phoneCode = document.getElementById("phoneCode");
console.log(userPs);
console.log(userPs1);
function queryURLParameter() {
    var curURL = window.location.href;
    var obj = {};
    var reg = /([^?&=]+)=([^?&=]+)/g;
    var res = reg.exec(curURL);
    while (res) {
        obj[res[1]] = res[2];
        res = reg.exec(curURL);
    }
    return obj;
}
var cusName = queryURLParameter()["name"];
var flag = (typeof cusName === "undefined") ? false : true;
if (flag) {
    sendAJAX({
        url: "/register?name=" + cusName,
        type: "get",
        success: function (jsonData) {
            if (jsonData["code"] == 0) {
                var data = jsonData["data"];
                userName.value = data["name"];
                userPs.value = data["password"];
                userPhone.value = data["phone"];
                userCode.value = data["code"];
                phoneCode.value = data["phoneCode"];
            }
        }
    });
}

oSubmit.onclick = function () {
    var name = userName.value.replace(/^ +| +$/g, "");
    console.log(name);
    var userPs = userPs.value.replace(/^ +| +$/g, "");
    console.log(userPs);
    var userPs1 = userPs1.value.replace(/^ +| +$/g, "");
    var userPhone = userPhone.value.replace(/^ +| +$/g, "");
    var userCode = userCode.value.replace(/^ +| +$/g, "");
    var phoneCode = phoneCode.value.replace(/^ +| +$/g, "");
    var obj = {
        name: name,
        userPs: userPs,
        userPs1: userPs1,
        userPhone: userPhone,
        userCod: userCode,
        phoneCode:phoneCode
    };

        sendAJAX({
            url: "/register",
            type: "post",
            data: JSON.stringify(obj),
            success: function (data) {
                if (data["code"] == 0) {
                    alert("注册成功!");
                    window.location.href = "index.html";
                }
            }
        });
        return;
    }

    //->当前的操作是增加操作
    sendAJAX({
        url: "/login",
        type: "post",
        data: JSON.stringify(obj),
        success: function (data) {
            if (data["code"] == 0) {
                window.location.href = "index.html";
            }
        }
    });

   /* $.ajax({
        url: "/add",
        type: "post",
        data: JSON.stringify(obj),
        success: function (data) {
            if (data["code"] == 0) {
                alert("创建成功!");
                //->JS中实现页面跳转
                window.location.href = "index.html";
            }
        }
    });*/