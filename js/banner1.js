~function(){
    var middle=document.getElementById('middleDiv');
    var middleUl=document.getElementById('middle-ul');
    var oLis=middleUl.getElementsByTagName('li');
    var oUl=document.getElementById('middle-p');
    var oLis1=oUl.getElementsByTagName('li');
    var leftBtn=document.getElementById('leftBtn');
    var rightBtn=document.getElementById('rightBtn');
    var step=0;
    function autoMove(){
        if(step==oLis.length-1){
            step=-1;
        }
        step++;
        setBanner();
        changeColor(step);
    }
    var timer=setInterval(autoMove,2500);
    function setBanner() {
        for (var i = 0; i < oLis.length; i++) {
            var curLi = oLis[i];
            if (i === step) {
                animate.setCss(curLi, "zIndex", 1);
                animate(curLi, {opacity: 1},100, function () {
                    var curLiSib = utils.siblings(this);
                    for (var k = 0; k < curLiSib.length; k++) {
                        animate.setCss(curLiSib[k], "opacity", 0);
                    }
                });
                continue;
            }
            animate.setCss(curLi, "zIndex", 0);
        }
    }
    function changeColor(n){
        for(var i= 0;i<oLis1.length;i++){
            oLis1[i].className='';
        }
        oLis1[n].className='select';
    }
    middle.onmouseover=function(){
        clearInterval(timer);
        leftBtn.style.display="block";
        rightBtn.style.display="block";

    };
    middle.onmouseout=function(){
        timer=window.setInterval(autoMove,2500);
        leftBtn.style.display="none";
        rightBtn.style.display="none";
    };
    !function(){
        for (var i=0;i<oLis1.length;i++){
            var cur=oLis1[i];
            cur.i=i;
            cur.onclick=function(){
                step=this.i;
                setBanner();
                changeColor(step);
            }
        }
    }();
    leftBtn.onclick=autoMove;
    rightBtn.onclick=function(){
        clearInterval(timer);
        if(step===0){
            step=oLis.length;
        }
        step--;
        setBanner();
        changeColor(step);
    };

}();
