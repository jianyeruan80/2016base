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

///getComputedStyle(box).margin
/*
HTTP常见状态码
200 / 204（成功，但是无需返回值）
301（永久重定向） / 302（临时重定向） / 304 
400 （bad request）/ 403 （forbidden）/ 404
500 / 502(网关问题) / 503（服务器繁忙） / 504(超时)
var mydiv = document.getElementById('mydiv');
if(mydiv.currentStyle) {
      var width = mydiv.currentStyle['width'];
      alert('ie:' + width);
} else if(window.getComputedStyle) {
      var width = window.getComputedStyle(mydiv , null)['width'];
      alert('firefox:' + width);
}
　element.currentStyle["marginLeft"]

　　window.getComputedStyle(element, null)["marginLeft"]
*/
