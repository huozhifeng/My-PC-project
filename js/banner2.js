~function(){
    var middleList=document.getElementById('middleList');
    var middleInner=document.getElementById('middle-inner');
    var leftBtn2=document.getElementById('leftBtn2');
    var rightBtn2=document.getElementById('rightBtn2');
    var oDivs = middleInner.getElementsByTagName('div');
    var step = 0;
    function autoMove(){
        if(step == (oDivs.length/4-1)){
            step = 0;
           animate.setCss(middleInner,'left',0);
        }
        step++;
        animate(middleInner,{left: -step*1020},1000);
    }
    middleList.onmouseover = function (){
        leftBtn2.style.display = 'block';
        rightBtn2.style.display = 'block';
    };
    middleList.onmouseout = function (){
        leftBtn2.style.display = 'none';
        rightBtn2.style.display = 'none';
    };
    leftBtn2.onclick = autoMove;
    rightBtn2.onclick = function (){
        if(step <= 0){
            step =((oDivs.length/4)-1);
            animate.setCss(middleInner,'left',-step*1020);
        }
        step--;
        animate(middleInner,{left:-step*1020},1000);
    };

}();

/*一楼轮播图*/
~function(){
    function bannerMove(curId){
        var boxs=utils.children(curId,'div');
                var floors=boxs[0];
                var outer=utils.children(floors,'div')[0];
                var oInner=utils.children(outer,'ul')[0];
                var imgList=utils.children(oInner,'li');
                var oTips1=utils.children(outer,'ul')[1];
                var oLis=oTips1.getElementsByTagName('li');
                var btnLink=utils.children(outer,'a');
                var leftBtn1=btnLink[0];
                var rightBtn1=btnLink[1];
                var timer=setInterval(autoMove,2000);
                var step = 0;
                function autoMove(){
                    if(step ==imgList.length-1){
                        step = 0;
                        animate.setCss(oInner,'left',0);
                    }
                    step++;
                    animate(oInner,{left: -step*339},800);
                    changeColor(step);
                }
                outer.onmouseover = function (){
                    clearInterval(timer);
                    leftBtn1.style.display='block';
                    rightBtn1.style.display="block";

                };
                outer.onmouseout = function (){
                    timer=setInterval(autoMove,2000);
                    leftBtn1.style.display="none";
                    rightBtn1.style.display="none";
                };
                leftBtn1.onclick = autoMove;
                rightBtn1.onclick = function (){
                    if(step <= 0){
                        step =imgList.length-1;
                        animate.setCss(oInner,'left',-step*339);
                    }
                    step--;
                    animate(oInner,{left:-step*339},800);
                    changeColor(step);
                    clearInterval(timer);
                };
                function changeColor(n){
                    if(n>oLis.length-1)n=0;
                    for(var i=0;i<oLis.length;i++){
                        oLis[i].className='';
                    }
                    oLis[n].className='dd';
                }
                for (var i=0;i<oLis.length;i++){
                    ~function(i){
                        var cur=oLis[i];
                        cur.i=i;
                        cur.onclick=function(){
                            step=this.i;
                            animate(oInner,{left:-step*339},800);
                            changeColor(this.i);
                        }

                    }(i);
        }
    }
    window.chenqunhai=bannerMove;
}();
var oBanners=utils.getElementsByClass('bannermove');
for(var i=0;i<oBanners.length;i++){
    chenqunhai(oBanners[i]);
}


/*二楼轮播图*/
~function(){
    function bannerMove(curId){
        var oInner=utils.children(curId)[0];
        console.log(oInner);
        var imgList=utils.children(oInner,'div');
        console.log(imgList);
        var oTips=utils.children(curId,'ul')[0];
        console.log(oTips);
        var oLis=oTips.getElementsByTagName('li');
        console.log(oLis);
        var btnLink=utils.children(outer,'a');
        console.log(btnLink);
        var leftBtn1=btnLink[0];
        var rightBtn1=btnLink[1];
        var timer=setInterval(autoMove,2000);
        var step = 0;
        function autoMove(){
            if(step ==imgList.length-1){
                step = 0;
                animate.setCss(oInner,'left',0);
            }
            step++;
            animate(oInner,{left: -step*442},800);
            changeColor(step);
        }
        curId.onmouseover = function (){
            clearInterval(timer);
            leftBtn1.style.display='block';
            rightBtn1.style.display="block";

        };
        curId.onmouseout = function (){
            timer=setInterval(autoMove,2000);
            leftBtn1.style.display="none";
            rightBtn1.style.display="none";
        };
        leftBtn1.onclick = autoMove;
        rightBtn1.onclick = function (){
            if(step <= 0){
                step =imgList.length-1;
                animate.setCss(oInner,'left',-step*442);
            }
            step--;
            animate(oInner,{left:-step*442},800);
            changeColor(step);
            clearInterval(timer);
        };
        function changeColor(n){
            if(n>oLis.length-1)n=0;
            for(var i=0;i<oLis.length;i++){
                oLis[i].className='';
            }
            oLis[n].className='dd';
        }
        for (var i=0;i<oLis.length;i++){
            ~function(i){
                var cur=oLis[i];
                cur.i=i;
                cur.onclick=function(){
                    step=this.i;
                    animate(oInner,{left:-step*442},800);
                    changeColor(this.i);
                }

            }(i);
        }
    }
    window.chenqunhaiBanner=bannerMove;
}();
var oBannerList=utils.getElementsByClass('outer');
for(var i=0;i<oBannerList.length;i++){
    chenqunhaiBanner(oBannerList[i]);
}
