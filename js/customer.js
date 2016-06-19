var fs = require("fs");
function addInfo(temp) {
    var con = fs.readFileSync("./customerInfo.json", "utf8");
    con = (con != "") ? JSON.parse(con) : [];
   /* if (con.length === 0) {
        temp["id"] = 1;
    } else {
        temp["id"] = Number(con[con.length - 1]["id"]) + 1;
    }*/
    con.push(temp);
    fs.writeFileSync("./customerInfo.json", JSON.stringify(con));

    var res = {
        code: 0,
        message: "创建成功~"
    };
    return JSON.stringify(res);
}
function getData(cusId) {
    var con = fs.readFileSync("./customerInfo.json", "utf8");
    con = (con != "") ? JSON.parse(con) : [];
    var res = null;
    for (var i = 0, len = con.length; i < len; i++) {
        var cur = con[i];
        if (cur["name"] == cusId) {
            res = cur;
            break;
        }
    }
    if (!res) {
        res = {
            code: 1,
            message: "当前客户不存在或邮箱密码错误~",
            data: null
        };
    } else {
        res = {
            code: 0,
            message: "登陆成功~",
            data: res
        };
    }
    return JSON.stringify(res);
}

function getAllData() {
    var con = fs.readFileSync("./customerInfo.json", "utf8");
    return con;
}

module.exports = {
    addInfo: addInfo,
    getData: getData,
    getAllData: getAllData
};