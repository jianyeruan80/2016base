(function(document){
var tools;
var obj = {
    test:function(){alert("Test")},
    //tools.addHandler("id",click,function(){alert("OK")})                   
    addHandler: function (element, type, handler) {   
             if(element.addEventListener) { 
                element.addEventListener(type, handler, false); 
               }else if (element.attachEvent) {
                 element.attachEvent("on" + type, handler); 
             }else{element["on" + type] = handler;}
			 },
 //tools.toFixed(100,2)       
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
},
/*
var contentStr = "[可爱],很有趣，惊讶可爱是啊[惊讶]";
var originArray=["[可爱]","[惊讶]"],
replaceJson={"[可爱]":"<img src='keai.gif' title='可爱'/>","惊讶":"<img src='jingya.gif' title='惊讶'/>"};
console.log(tools.regExpMutiReplace(originArray,replaceJson,contentStr));
*/
 regExpMutiReplace:function(originArray,replaceJson,contentStr){
      var reg =new RegExp("("+originArray.join(")|(").replace(/([\[\]])/g,"\\$1")+")","g");
      contentStr.replace(reg, function(word){
  　　var rep=replaceJson[word];
      return rep ? rep : word;
   });
 }		
}

window.tools = obj;
})(document);
//¡¡e.target || e.srcElement»ñÈ¡µ±Ç°Êµ¼Ê´¥·¢ÊÂ¼þ½Úµã£¬e.currentTarget»ñÈ¡»ñÈ¡µ±Ç°¼àÌý½Úµã¡£e.srcElement
//e.type  event.target.style.backgroundColor = "red";
