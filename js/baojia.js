$(function(){
	//点击toggele,.c-button显示或隐藏
	var oBtn1=$('.c-button');
	var oNbrand=$('.navbar-brand');
	var oNbrand1=$('.brand1');	
	var oCollapse1=$('.collapse');	
	oBtn1.click(function(){
		if (oNbrand.css('display')=='block') {
			oNbrand.hide();
			oNbrand1.show();
			$(this).css('right','210px');
		} else {
			oNbrand.show();
			oNbrand1.hide();
			$(this).css('right',0);
		}
	});
	//监听窗口改变,如果不点击collapse关闭Ul,要判断窗口大小,选择开启关闭brand.
	// $(window).resize(function(){//jQuery获取窗口大小
	// 	var oW=$(window).width();//jQuery获取窗口宽度
	// 	if (oW>678) {
	// 		oNbrand1.hide();
	// 		oNbrand.show();
	// 	}else{
	// 		if (oNbrand.css('display')=='block'){
	// 			oCollapse1.hide();
	// 			oBtn1.css('right',0);
	// 		}else{
	// 			oCollapse1.show();
	// 			oBtn1.css('right','210px');
	// 		}
	// 	}
	// })
	//滚轮滚动,oNavbar变为固定定位
	var oNavbar=$('.navbar');
	$(window).scroll(function(){
		oNavbar.css({'position':'fixed','backgroundColor':'#1c2b2c','z-index':100});
		if ($(document).scrollTop()==0) {
			oNavbar.css({'position':'relative','background':0});
		} else {}
	})

})