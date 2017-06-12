function getPosition(obj){
            var l = 0 ; var t = 0;
            while(obj){
                l = l + obj.offsetLeft; t = t + obj.offsetTop;
                obj = obj.offsetParent;
            }
            return {left:l,top:t};
}

window.onload =window.onresize = function (ev){
    var oNav = document.getElementById('navbar-default');
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
            // oNav.style.top = xTop + 'px';          
            
        }else if(xTop == contentTop){
            oNav.style.background = 'rgba(0,0,0,0) ';
            oNav.style.boxShadow = '0px 1px 5px #999 ';
            oNav.style.position = 'absolute';
            return
        }          
  }; 
}