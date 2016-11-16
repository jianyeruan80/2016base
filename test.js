/*var el=document.getElementById("test"); 
console.log(getCurrentStyle(el,["background","color","width"]));*/
//https://rawgit.com/jianyeruan80/2016/master/test.js
function getCurrentStyle(el,attr){
var style={};
var returnStyle={};
if (el.currentStyle)
        style =el.currentStyle;
    else if (window.getComputedStyle)
        style= document.defaultView.getComputedStyle(el,null);
        for(var i=0;i<attr.length;i++){
        returnStyle[attr[i]]=style[attr[i]] || style.getPropertyValue(attr[i]);
	}
	    return returnStyle;
}