function getPosition(obj){
            var l = 0 ; var t = 0;
            while(obj){
                l = l + obj.offsetLeft; t = t + obj.offsetTop;
                obj = obj.offsetParent;
            }
            return {left:l,top:t};
}
window.onload =window.onresize = function (ev) {
  document.documentElement.style.fontSize = document.documentElement.clientWidth*20/320+'px';
  var oheader = document.getElementsByTagName('header');
  var oNav = document.getElementById('navbar-default'); 
  var oA = oNav.getElementsByTagName('a');
  var oImgRight1 =document.getElementById('pagespcbg-right-ul-li1');
  var oImgRight2 =document.getElementById('pagespcbg-right-ul-li2');
  var oImgRight3 =document.getElementById('pagespcbg-right-ul-li3');
  var oImgRight4 =document.getElementById('pagespcbg-right-ul-li4');
  var oImgLeft = document.getElementById('pagespcbg-left-ul-img');
  var oAnimation = document.getElementById('zujian-animation');
  var qweqwe = document.getElementById('qweqwe');
  var wqerqwrq = document.getElementById('wqerqwrq');
  var oNbar= document.getElementById('navbar-header');
  var oBrand = document.getElementById('brand-a');
  var oheaderDiv =  document.getElementById('header-adiv');
  console.log(oNbar,oBrand);

  function tab(obj,num){
      obj.onmouseenter = function(){
        oImgLeft.src = 'klxedu/pagespcbg0'+num+'.png';
      }
  }
  tab(oImgRight1,1);
  tab(oImgRight2,2);
  tab(oImgRight3,3);
  tab(oImgRight4,4);
  var oEvent = ev || event;  
  var contentTop = getPosition(oNav).top;
 window.onscroll = function(ev){
        var oEvent = ev || event;        
        var xTop = document.documentElement.scrollTop || document.body.scrollTop;
        // var scrollTop = xTop + document.documentElement.clientHeight;
        if(xTop > contentTop){
            oNav.style.position = 'fixed';
            oNav.style.background = '#333';
            oNav.style.boxShadow = 'none';
            oNav.style.zIndex = '10 ';
            
        }else if(xTop <= contentTop){
            oNav.style.background = 'rgba(0,0,0,0) ';
            oNav.style.boxShadow = '0px 1px 5px #999 ';
            oNav.style.position = 'absolute';
            return
        }      
  };   
  qweqwe.onclick = function(){
      wqerqwrq.style.display='block';
      qweqwe.style.display = 'none';
  }
  wqerqwrq.onclick = function(){
      qweqwe.style.display='block';
      wqerqwrq.style.display = 'none';
  }
  oNbar.onclick = function(){
    // oheaderDiv.style.position ='absolute';
    // oheaderDiv.style.background = '#3c6171';
    // oheaderDiv.style.height = '100%';
    // oheaderDiv.style.width = '220px';
    // oheaderDiv.style.fontSize = '14px';
    oheaderDiv.classList.toggle('oheaderDiv');
    oNbar.classList.toggle('oNbar');
  }

}