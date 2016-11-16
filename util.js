(function(document){
var tools;
var obj = {
    test:function(){alert("Test")},                   //00001
    addHandler: function (element, type, handler) {   // 00002
             if(element.addEventListener) { 
                element.addEventListener(type, handler, false); 
               }else if (element.attachEvent) {
                 element.attachEvent("on" + type, handler); 
             }else{element["on" + type] = handler;}
			 },
	toFixed:function(num, s) {                        //00003
          var tempnum = num.toFixed(s+4);
	 	  return Number(Math.round(tempnum+'e'+s)+'e-'+s);
          },
    stopPropagation:function(event){                //00004
		var e = event || window.event;
		if (e && e.stopPropagation) e.stopPropagation(); 
		else e.cancelBubble = true; 
	},
	preventDefault:function(event){                 //00005
		var e = event || window.event;
		if (e && e.preventDefault) e.preventDefault(); 
		else returnValue = false;
	},
	debounce:function(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    }
};		
}

window.tools = obj;
})(document);