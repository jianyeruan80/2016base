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
HTTP����״̬��
200 / 204���ɹ����������践��ֵ��
301�������ض��� / 302����ʱ�ض��� / 304 
400 ��bad request��/ 403 ��forbidden��/ 404
500 / 502(��������) / 503����������æ�� / 504(��ʱ)
var mydiv = document.getElementById('mydiv');
if(mydiv.currentStyle) {
      var width = mydiv.currentStyle['width'];
      alert('ie:' + width);
} else if(window.getComputedStyle) {
      var width = window.getComputedStyle(mydiv , null)['width'];
      alert('firefox:' + width);
}
��element.currentStyle["marginLeft"]

����window.getComputedStyle(element, null)["marginLeft"]
*/
