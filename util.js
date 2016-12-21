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
       getStyleA:function(e,styleArray){//getStyleA("tes",["margin-top","margin-bottom"])
                var element=window.getComputedStyle(e, null) || e.currentStyle,
                styleJson={}; 
                   for(var i=0;i<styleArray.length;i++){
                    
                    styleJson[styleArray[i]]=element.getPropertyValue[styleArray[i]];
                  }
                 return styleJson;
        }  ,   
        getStyleB:function(e,styleArray){ //getStyleB("tes",["marginTop","marginBottom"])
                 var element=window.getComputedStyle(e, null) || e.currentStyle,
                 styleJson={}; 
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
       debounce:function(func, wait, immediate) {//window.addEventListener('resize', debounce(fun,200,true));     
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
  throttle:function(func, wait, mustRun) {    //window.addEventListener('scroll',throttle(realFunc,500,1000));
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
     getInnerHTML:function(html){
		//var html = "<p><a href='http://www.cnblogs.com/rubylouvre/'>Ruby Louvre</a>by <em>司徒正美</em></p>"; 
		//var result = /(\d+)-(\w+)/.exec('12-ab'); //'aa11AA'.replace(/([a-z]+)(\d+)([A-Z]+)/g, '$1')) 提取
       //'aa11AA'.replace(/(\d+)/g, '$`'); //"aaaaAA"
	   //'aa11AA'.replace(/(\d+)/g, "$'"); //"aaAAAA"
       //'aa11AA'.replace(/(\d+)/g, '$$'); //"aa$AA"
		var text = html.replace(/<(?:.|\s)*?>/g, "");
		return text;
	 },
     getUrltoJson:function(url,name) {      //getUrltoJson("http://www.baid.com?id=22&b5b=33","b5b")
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
    },
    guid:function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    }); 
    },
    guid2:function () {
    function S4() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
   }
    //uuid:function(8, 64);
    uuid:function(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;
    if (len) {
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
      var r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random()*16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }
return uuid.join('');
},
uuid2:function () {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";


    var uuid = s.join("");
    return uuid;
},
showTime:function(e){
    var _ = ['00','01','02','03','04','05','06','07','08','09'], d = new Date(), h = d.getHours(), m = d.getMinutes(), s =  d.getSeconds();
	e.textContent= [_[h]||h,_[m]||m,_[s]||s].join(":");
   window.setTimeout(function(){
	    this.showTime(e);
	},1000);

	
},
getintveral:function(e,date)//	//setInterval(getintveral,1000,"2017-01-01");
{
var d1=new Date();
var d2=date;
var t1=d1.getTime();
var t2=d2.getTime();
var t3=parseInt(parseInt(t2-t1)/1000);
var d=parseInt(t3/86400);
var h=parseInt((t3-(d*86400))/3600);
var m=parseInt((t3-(d*86400)-(h*3600))/60);
var s=parseInt(t3-(d*86400)-(h*3600)-(m*60));
var _ = ['00','01','02','03','04','05','06','07','08','09'];
e.innerHTML=d+"day "+h+":"+(_[m] || m)+":"+(s||_[s]);
},
change:function(oldStr,newStr){
	var red="/"+oldStr+"/g";
	return str.replace(eval(reg),newStr	);
},

}
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

    function S4() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
*/

