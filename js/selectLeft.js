~function(){
    var focusDd=document.getElementById('focusList');
    var oInnerList=utils.getElementsByClass('inner');
    for(var i=0;i<oInnerList.length;i++){
        ~function(i){
            var oDiv=utils.lastChild(oInnerList[i]);
            oInnerList[i].onmouseover=function(){
                utils.addClass(this,'selected');
                utils.addClass(oDiv,'selected')
            }
            oInnerList[i].onmouseout=function(){
                utils.removeClass(oInnerList[i],'selected');
                utils.removeClass(oDiv,"selected");
            }
        }(i)
    }
}();

~function(){
    var oDiv=document.getElementById('daohang');
    var oUl = document.getElementById("box");
    var aLink = document.getElementById("aLink");
    console.log(aLink);
    var  oLis=utils.children(oUl,"li");
    aLink.onclick = function () {
        oDiv.style.display="none";
        window.onscroll=null;
        var duration = 1000;
        var interval = 10;
        var target = utils.win("scrollTop");
        var temp = (target / duration) * interval;
        var timer = window.setInterval(function () {
            var curTop = utils.win("scrollTop");
            console.log(curTop);
            if (curTop === 0) {
                window.onscroll=showBtn;
                clearInterval(timer);
                return;
            }
            curTop -= temp;
            utils.win("scrollTop", curTop);
        }, interval)
    };
    window.onscroll=showBtn;
    function showBtn(){
        var t=utils.win("scrollTop");
        var r=utils.win("clientHeight");
        oDiv.style.display=t>r?"block":"none";
    }
}();

~function (){
    var oUl=document.getElementById('box');
    var oLis=oUl.getElementsByTagName('li');
    for(var i=0;i<oLis.length;i++){
        ~function(i){
            var oAs=utils.firstChild(oLis[i]);
            oLis[i].onmouseover=function(){
                var oA1=utils.lastChild(this);
                utils.addClass(oAs,"ee");
                oA1.style.display="block";
            };
            oLis[i].onmouseout=function(){
                var oAs=utils.firstChild(oLis[i]);
                var oA1=utils.lastChild(this);
                utils.removeClass(oAs,"ee");
                oA1.style.display="none";
            }
        }(i)
    }
}();
~function (){
    function tabChange(container){
        var oUl=utils.firstChild(container);
        var oLis=utils.children(oUl,'li');
        for(var i=0;i<oLis.length;i++){
            oLis[i].onmouseover=function(){
                var curSiblings=utils.siblings(this,'li');
                for(var i=0;i<curSiblings.length;i++){
                    utils.removeClass(curSiblings[i],'showR');
                    utils.addClass(this,'showR');
                }
                var index=utils.index(this);
                var oDivs=utils.nextAll(this.parentNode);
                for(var i=0;i<oDivs.length;i++){
                    i===index?utils.addClass(oDivs[i],'showR'):utils.removeClass(oDivs[i],'showR');
                }
            };
        }
    }

   window.chenqunhaiTab=tabChange;
}();
var floorList=utils.getElementsByClass('floorC');
for(var i=0;i<floorList.length;i++){
    chenqunhaiTab(floorList[i]);
}


/*左侧导航*/
~function(){
    var floorAry = [
        {id: "floorOne"},
        {id: "floorTwo"},
        {id: "floorThi"},
        {id: "floorFour"},
        {id: "floorFive"},
        {id: "floorSix"},
        {id: "floorSeven"},
        {id: "floorEight"},
        {id: "floorNine"},
        {id: "floorTen"},
        {id: "floorEleven"},
        {id: "floorTwelve"}
    ];
    var floorIndex = document.getElementById("box");
    var oLis = utils.children(floorIndex);
    ~function () {
        for (var i = 0, len = floorAry.length; i < len; i++) {
            var curFloor = floorAry[i];
            var curFloorEle = document.getElementById(curFloor["id"]);
            curFloor["top"] = utils.offset(curFloorEle).top;
        }
        utils.css(floorIndex, "marginTop", -len * 31 / 2);

    }();

    function showFloor() {
        var curTop = utils.win("scrollTop"), curHeight = utils.win("clientHeight");
    }
    window.addEventListener('scroll',showFloor,false);
    var timer = null;
    for (var i = 0; i < oLis.length; i++) {
        var curLi = oLis[i];
        curLi.onclick = function () {
            window.onscroll = null;
            var target = this.getAttribute("zhufengT");
            move(target);
        }
    }
    function move(target) {
        var begin = utils.win("scrollTop"), duration = 100;
        var step = Math.abs((target - begin) / duration * 10);
        _move();
        function _move() {
            window.clearTimeout(timer);
            var cur = utils.win("scrollTop");
            if (target > begin) {
                if (cur + step >= target) {
                    window.onscroll = showFloor;
                    utils.win("scrollTop", target);
                    return;
                }
                utils.win("scrollTop", cur + step);
            } else if (target < begin) {
                console.log(target);
                if (cur - step <= target) {
                    window.onscroll = function(){
                        utils.win("scrollTop", target);

                    };
                    return;
                }
                utils.win("scrollTop", cur - step);
            } else {
                window.onscroll = showFloor;
                return;
            }
            timer = window.setTimeout(_move, 10);
        }
    }
}();
