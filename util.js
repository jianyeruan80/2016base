(function(document){
var tools;
var obj = {
    test:function(){alert("Test")},
    //tools.addHandler("id",click,function(){alert("OK")})
    $$:function(id,type){//0=id,1=class,2=div
       if(!type){
        return document.getElementById(id);
       }else if(type==0){
        return document.querySelector(id);//"div.user-panel.main input[name=login]"
       }else{
        return document.querySelectorAll(id);
       }
    }, 
   getStyleA:(e,styleArray){//getStyleA("tes",["margin-top","margin-bottom"])
            var element=window.getComputedStyle(e, null) || e.currentStyle;
              var styleJson={}; 
               for(var i=0;i<styleArray.length;i++){
                
                styleJson[styleArray[i]]=element.getPropertyValue[styleArray[i]];
              }
             return styleJson;
    }  ,   
    getStyleB:(e,styleArray){ //getStyleB("tes",["marginTop","marginBottom"])
             var element=window.getComputedStyle(e, null) || e.currentStyle;
             var styleJson={}; 
             for(var i=0;i<styleArray.length;i++){
              styleJson[styleArray[i]]=element[styleArray[i]];
              styleJson[styleArray[i]]=element.getPropertyValue[styleArray[i]];
            }
             return styleJson;
    } ,            
    addHandler: function (element, type, handler) {   
             if(element.addEventListener) { 
                element.addEventListener(type, handler, false); 
               }else if (element.attachEvent) {
                 element.attachEvent("on" + type, handler); 
             }else{element["on" + type] = handler;}
			 },
    getUrlCotent:function(content){
      return content.replace(/%20/g, "+").replace(/%2F/g, "/")
            .replace(/%3F/g, "?").replace(/%25/g, "%").replace(/%23/g, "#").replace(/%26/g, "&")
            .replace(/%3D/g, "=");
    },
    isArray:function(e){
        if(e instanceof Array){
            return  true;
       }else{
            return false;
       }
    }, 
    isNullArray:function(e){
        if(e instanceof Array){
            return  e.length>0?true:false;
       }else{
            return false;
       }
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

/*
var contentStr = "[可爱],很有趣，惊讶可爱是啊[惊讶]";
var originArray=["[可爱]","[惊讶]"],
replaceJson={"[可爱]":"<img src='keai.gif' title='可爱'/>","惊讶":"<img src='jingya.gif' title='惊讶'/>"};
console.log(tools.regExpMutiReplace(originArray,replaceJson,contentStr));
*/
 regExpMutiReplace:function(originArray,replaceJson,contentStr){
    var reg =new RegExp("("+originArray.join(")|(").replace(/([\[\]])/g,"\\$1")+")","g");
       return contentStr.replace(reg, function(word){
    　　var rep=replaceJson[word];
        return rep ? rep : word;
     })},
  //window.addEventListener('resize', debounce(fun,200,true));     
 debounce:function(func, wait, immediate) {
      var timeout;
      var immediate = immediate | 0; 
      var wait = wait | 0;
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
//window.addEventListener('scroll',throttle(realFunc,500,1000));
 throttle:function(func, wait, mustRun) {
          var timeout,
          startTime = new Date();
          return function() {
          var context = this,
              args = arguments,
              curTime = new Date();
           clearTimeout(timeout);
          if(curTime - startTime >= mustRun){
              func.apply(context,args);
              startTime = curTime;
          }else{
              timeout = setTimeout(func, wait);
          }
        }
     },
 toggleDisabled:function(e,className){
     var className=className || disabled;
     e.classList.toggle(className);
 },
 //getUrltoJson("http://www.baid.com?id=22&b5b=33","b5b")
 getUrltoJson:function(url,name) {
    var result = {};
    var reg = new RegExp('([\\?|&])(.+?)=([^&?]*)', 'ig');
    var arr = reg.exec(url.toLowerCase());
    while (arr) {
       if(name && name==arr[2]){
          return result[arr[2]] = arr[3];
          break;
        }
        result[arr[2]] = arr[3];
        arr = reg.exec(url);
    }
    return result;
},
//setStyle(el,{width:"200px",height:"70px",display:"block"})
//head.style.cssText="width:200px;height:70px;display:bolck";
setStyle:function(el, strCss){
    function endsWith(str, suffix) {
        var l = str.length - suffix.length;
        return l >= 0 && str.indexOf(suffix, l) == l;
    }
    var sty = el.style,
        cssText = sty.cssText;
    if(!endsWith(cssText, ';')){
        cssText += ';';
    }
    sty.cssText = cssText + strCss;
}

},

window.tools = obj;
})(document);
//classList.toggle("visible",false);
//e.type  event.target.style.backgroundColor = "red";
//https://rawgit.com/jianyeruan80/2016base/master/util.js
/*'<img src="images/logo_small.gif" alt="" width="142" height="55" />'.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
    console.log(capture);
});
http://www.etherdream.com/funnyscript/bubbles/
Object.prototype.toString.call(ee)
var head = document.head || document.getElementsByTagName('head')[0];
var head= document.getElementById("head");
head.style.cssText="width:200px;height:70px;display:bolck";
https://www.cnblogs.com/index-html/p/canvas_data_compress.html JS压
http://www.cnblogs.com/txw1958/ wechat
"𠮷野家".match(/./ug)\\
<META HTTP-EQUIV="pragma" CONTENT="no-cache"> 
<META HTTP-EQUIV="Cache-Control" CONTENT="no-cache, must-revalidate"> 
<META HTTP-EQUIV="expires" CONTENT="0">
/* 移动端定义字体的代码 *
body{font-family:Helvetica;}
http://www.cnblogs.com/PeunZhang/p/4517864.html

https://cnodejs.org/topic/583c5d9fba57ffba06c24a89 文字 change pic
*/

