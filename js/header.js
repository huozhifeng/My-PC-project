/*var oHeaderList=document.getElementById('headerList');
var oDivList=utils.lastChild(oHeaderList);
oHeaderList.onmouseover=function(){
    oDivList.style.display="block";
    utils.addClass(this,'bg');
    utils.addClass(oDivList,"bg");
};
oHeaderList.onmouseout=function(){
    oDivList.style.display='none';
    utils.removeClass(this,'bg');
    utils.removeClass(oDivList,'bg');
};*/
var oHeaderList=document.getElementById('headerList');
var oDivList=utils.lastChild(oHeaderList);
oHeaderList.onclick=function(e){
    e=e||window.event;
    var tar= e.target|| e.srcElement;

    var tagName=tar.tagName.toUpperCase();
    if(tagName==="SPAN"){
        oDivList.style.display="block";
        utils.addClass(this,'bg');
        utils.addClass(oDivList,"bg");
    }else{
        oDivList.style.display="none";
        utils.removeClass(this,'bg');
        utils.removeClass(oDivList,"bg");
    }
    if(tagName==="A"){
        var span=utils.children(oHeaderList,'span')[1];
            span.innerHTML=tar.innerHTML;
    }

};
/*oHeaderList.onmouseout=function(){
    oDivList.style.display='none';
    utils.removeClass(this,'bg');
    utils.removeClass(oDivList,'bg');
};*/
var oUl=document.getElementById('frList');
var oLis=utils.children(oUl);

for(var i=0;i<oLis.length;i++){
    ~function (i){
       oLis[i].onmouseover=function(){
           if(!utils.hasClass(this,"show")){
               return;
           }
           utils.addClass(this,"showSelect");
           var oDivs=utils.lastChild(this);
           utils.addClass(oDivs,"showSelect");
       };
        oLis[i].onmouseout=function(){
            if(!utils.hasClass(this,"show")){
                return;
            }
            utils.removeClass(this,"showSelect");
            var oDivs=utils.lastChild(this);
            utils.removeClass(oDivs,"showSelect");
        }

    }(i)
}
var shop=document.getElementById('shop');
var shop3=utils.lastChild(shop);
shop.onmouseover=function(){
    utils.addClass(shop3,"shopShow");
}
shop.onmouseout=function(){
    utils.removeClass(shop3,"shopShow");
}


/*search*/
$(function () {
    var $searchInput = $("#key"),
        $search = $(".search"),
        $searchList = $search.children(".searchList");
    $searchInput.on("focus keyup", function () {
        var val = $(this).val().replace(/^ +| +$/g, "");
        if (val.length > 0) {
            showList();
            return;
        }
        $searchList.stop().slideUp(200);
    });
    $("body").on("click", function (e) {
        var tar = e.target, $tar = $(tar);
        if (tar.id === "searchInput") {
            return;
        }

        if (tar.tagName.toUpperCase() === "LI" && $tar.parent().hasClass("searchList")) {
            $searchList.stop().slideUp(200);
            $searchInput.val($tar.html());
            return;
        }

        $searchList.stop().slideUp(200);
    });
    function showList() {
        var val = $searchInput.val().replace(/^ +| +$/g, "");
        if (val.length === 0) {
            return;
        }
        $.ajax({
            url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + val,
            type: "get",
            dataType: "jsonp",
            jsonp: "cb",
            success: function (data) {
                var str = '';
                if (data && data["s"]) {
                    data = data["s"];
                    $.each(data, function (index, item) {
                        if (index <= 7) {
                            str += '<li>' + item + '</li>';
                        }
                    });
                }
                if (!str) {
                    $searchList.css("display", "none");
                    return;
                }
                $searchList.html(str).stop().slideDown(200);
            }
        });
    }

});
/*点击切换城市*/
