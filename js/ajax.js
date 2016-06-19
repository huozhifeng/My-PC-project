~function () {
    var getXHR = function () {
        var flag = false, xhr = null, ary = [function () {
            return new XMLHttpRequest;
        }, function () {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }, function () {
            return new ActiveXObject("Msxml2.XMLHTTP");
        }, function () {
            return new ActiveXObject("Msxml3.XMLHTTP");
        }];
        for (var i = 0, len = ary.length; i < len; i++) {
            var temp = ary[i];
            try {
                xhr = temp();
                getXHR = temp;
                flag = true;
                break;
            } catch (e) {

            }
        }
        if (!flag) {
            throw new Error("your browser is not support ajax~");
        }
        return xhr;
    };
    var sendAJAX = function (options) {
        var _default = {
            url: "",
            type: "get",
            async: true,
            data: null,
            success: null
        };
        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                _default[key] = options[key];
            }
        }
        var xhr = getXHR();
        if (_default["type"].toLowerCase() === "get") {
            var suffix = _default["url"].indexOf("?") > -1 ? "&" : "?";
            _default["url"] += suffix + "_=" + Math.random();
        }
        xhr.open(_default["type"], _default["url"], _default["async"]);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
                var data = "JSON" in window ? JSON.parse(xhr.responseText) : eval("(" + xhr.responseText + ")");
                _default["success"] && _default["success"](data);
            }
        };
        xhr.send(_default["data"]);
    };

    window.sendAJAX = sendAJAX;
}();