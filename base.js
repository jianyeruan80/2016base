!(function(doc, win) {
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth;
            width && (docEle.style.fontSize = 20 * (width / 320) + "px");
        };
     
    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
 
}(document, window));
document.write(
'protocol-->'+location.protocol+'<br/>',
'host-->'+location.host+'<br/>',
'hostname-->'+location.hostname+'<br/>',
'href-->'+location.href+'<br/>',
'pathname-->'+location.pathname+'<br/>',
'search-->'+location.search+'<br/>',
'hash-->'+location.hash+'<br/>'
)

protocol-->http:
host-->www.cnpiont.com:8090
hostname-->www.cnpiont.com
href-->http://www.cnpiont.com:8090/index.html?user=like&pwd=123#title
pathname-->/index.html
search-->?user=like&pwd=123
hash-->#title

1，history.go(0) 
2，location.reload() 
3，location=location 
4，location.assign(location) 
5，location.replace(location) 
///getComputedStyle(box).margin
/* 定义 */
@font-face {
    font-family: 'MicrosoftYaHei';
    src: url('MicrosoftYaHei.eot'); /* IE9 Compat Modes */
    src: url('MicrosoftYaHei.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
             url('MicrosoftYaHei.woff') format('woff'), /* Modern Browsers */
             url('MicrosoftYaHei.ttf')  format('truetype'), /* Safari, Android, iOS */
             url('MicrosoftYaHei.svg#MicrosoftYaHei') format('svg'); /* Legacy iOS */
   }

/* 使用 */
body{
  font-family: "MicrosoftYaHei";
}
/*http://demo.menusifupos.com:8080/kpos/emenu/#/index
HTTP³£¼û×´Ì¬Âë
200 / 204£¨³É¹¦£¬µ«ÊÇÎÞÐè·µ»ØÖµ£©
301£¨ÓÀ¾ÃÖØ¶¨Ïò£© / 302£¨ÁÙÊ±ÖØ¶¨Ïò£© / 304 
400 £¨bad request£©/ 403 £¨forbidden£©/ 404
500 / 502(Íø¹ØÎÊÌâ) / 503£¨·þÎñÆ÷·±Ã¦£© / 504(³¬Ê±)
var mydiv = document.getElementById('mydiv');
if(mydiv.currentStyle) {
      var width = mydiv.currentStyle['width'];
      alert('ie:' + width);
} else if(window.getComputedStyle) {
      var width = window.getComputedStyle(mydiv , null)['width'];
      alert('firefox:' + width);
}
¡¡element.currentStyle["marginLeft"]

¡¡¡¡window.getComputedStyle(element, null)["marginLeft"]
*/
