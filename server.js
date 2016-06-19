var http = require("http");
var fs = require("fs");
var url = require("url");
var suffixFn = require("./js/suffixFn");
var customer = require("./js/customer");
var server = http.createServer(function (request, response) {
    var urlObj = url.parse(request.url, true);
    var pathname = urlObj.pathname, query = urlObj.query;
    var reg = /\.(HTML|JS|CSS|TXT|JSON|JPG|JPEG|PNG|GIF|BMP|ICO|SVG)/i;
    if (reg.test(pathname)) {
        try {
            var suffix = reg.exec(pathname)[1].toUpperCase();
            var suffixType = suffixFn.querySuffixType(suffix);
            var conFile = /^(HTML|JS|CSS|TXT|JSON)$/i.test(suffix) ? fs.readFileSync("." + pathname, "utf8") : fs.readFileSync("." + pathname);
            response.writeHead(200, {'content-type': suffixType + ";charset=utf-8;"});
            response.end(conFile);
        } catch (e) {
            response.writeHead(404);
            response.end();
        }
        return;
    }
    var con = null;
    if (pathname === "/login") {
        var cusId = query["name"];
        con = customer.getData(cusId);
        response.writeHead(200, {'content-type': 'application/json;charset=utf-8;'});
        response.end(con);
        return;
    }
    var temp = "";
    if (pathname === "/register") {
        request.addListener('data', function (chunk) {
            temp += chunk;
        });
        request.addListener('end', function () {
            temp = JSON.parse(temp);
            temp["name"] = temp["name"];
            temp["password"] = temp["password"] ;
            temp["ConfirmPS "] = temp["ConfirmPS"];
            temp["phone"] = temp["phone"];
            temp["code"] = temp["code"];
            temp["phoneCode"] = temp["phoneCode"];
            con = customer.addInfo(temp);

            response.writeHead(200, {'content-type': 'application/json;charset=utf-8;'});
            response.end(con);
        });
        return;
    }
});
server.listen(80, function () {
    console.log("当前服务已经启动,我们正在监听80端口~");
});




