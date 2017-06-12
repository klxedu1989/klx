//返回顶部
      function goTop(obj,time) { 
        obj = obj || 0.1; 
        time = time || 32; 
        if (document.documentElement) { 
            x1 = document.documentElement.scrollLeft || 0; 
            y1 = document.documentElement.scrollTop || 0; 
        }; 
        if (document.body) { 
            x2 = document.body.scrollLeft || 0; 
            y2 = document.body.scrollTop || 0; 
        };
        var x3 = window.scrollX || 0; 
        var y3 = window.scrollY || 0; 
        var x = Math.max(x1, Math.max(x2, x3)); 
        var y = Math.max(y1, Math.max(y2, y3)); 
        var speed = 1 + obj; 
        window.scrollTo(Math.floor(x / speed), Math.floor(y / speed)); 
        if(x > 0 || y > 0) { 
            var tion = "goTop(" + obj + ", " + time + ")"; 
            window.setTimeout(tion, time); 
        }; 
    }; 
    window.onload=function(){
        var oA=document.getElementById('top');
        oA.onclick=function(){
            goTop();return false;
        };
    }; 
//导行滚动效果
$(function(){
    var divT = $('.navbar-fixed-top').offset().top;
    $(window).scroll(function(){
        if($(window).width() < 768) return;
        var scrollT = $(document).scrollTop();
        if(scrollT>=divT){
            $('.navbar-fixed-top').addClass("navbar-fixed-top01").removeClass("navbar");
        }else{
            $('.navbar-fixed-top').addClass("navbar").removeClass("navbar-fixed-top01");
        }
    });
});    
//服务介绍切换 
$(document).ready(function() {
    $('.pagespcbg-right li').click(function(){ 
        $(this).addClass("active").siblings().removeClass("active");
        $(".pagespcbg-left li").hide().eq($('.pagespcbg-right li').index(this)).show(); 
    });
    $('.down-case-inner li').click(function(){ 
        $(this).addClass("active").siblings().removeClass("active");
        $(".download-list").hide().eq($('.down-case-inner li').index(this)).show();  
    });
});
//导航点击显示隐藏
$(".navbar-toggle").click(function(){
    var but_state = $(".navbar-toggle").attr("class"); 
    var clientHeight = document.documentElement.clientHeight+1;
    if(but_state == "navbar-toggle collapsed"){
        $(".mobile-nav").css("display","block");
        $("html").addClass("html");
        $("html").animate({'right':'220px'},300);
        $("html").addClass("over");
        $("body").css({"overflow-y":"hidden","height":clientHeight-80+"px"});
        $(".mask_layer").css("display","block");
        $(".mask_layer").animate({"display":"block"},300);
        $(".mobile-nav").css("height",clientHeight+"px");
    }
    if(but_state == "navbar-toggle"){
        $("html").animate({'right':'0px'},300);
        $(".mask_layer").css("display","none");
        $("html").removeClass("over");
        // $("html").css("height","auto");
         $("body").css({"overflow-y":"auto","height":"auto"});
        setTimeout(function(){
            $(".mobile-nav").css("display","none");
        },300);
    }
});