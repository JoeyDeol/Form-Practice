(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var shopifyNewsletter = {};

shopifyNewsletter.getUserInfo = function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        var userEmail = $("input[type='email']").val();
        var userInterest = $("select").val();
        console.log(userEmail);
        console.log(userInterest);

        //ALTERNATE METHOD BELOW WORKS AS WELL!
        // const userEmail = e.target[1].value
        // const userInterest = (e.target[2].value);
        // console.log(userEmail;
        // console.log(userInterest);
    });
};

shopifyNewsletter.init = function () {
    shopifyNewsletter.getUserInfo();
};

// DOCUMENT READY STARTS HERE!
$(function () {
    shopifyNewsletter.init();
});
// DOCUMENT READY ENDS HERE!

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sb0JBQW9CLEVBQTFCOztBQUVBLGtCQUFrQixXQUFsQixHQUFnQyxZQUFNO0FBQ2xDLE1BQUUsTUFBRixFQUFVLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFVBQUMsQ0FBRCxFQUFPO0FBQzFCLFVBQUUsY0FBRjtBQUNBLFlBQU0sWUFBWSxFQUFFLHFCQUFGLEVBQXlCLEdBQXpCLEVBQWxCO0FBQ0EsWUFBTSxlQUFlLEVBQUUsUUFBRixFQUFZLEdBQVosRUFBckI7QUFDQSxnQkFBUSxHQUFSLENBQVksU0FBWjtBQUNBLGdCQUFRLEdBQVIsQ0FBWSxZQUFaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxLQVpEO0FBYUgsQ0FkRDs7QUFnQkEsa0JBQWtCLElBQWxCLEdBQXlCLFlBQVk7QUFDakMsc0JBQWtCLFdBQWxCO0FBQ0gsQ0FGRDs7QUFJQTtBQUNBLEVBQUUsWUFBVztBQUNULHNCQUFrQixJQUFsQjtBQUNILENBRkQ7QUFHQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IHNob3BpZnlOZXdzbGV0dGVyID0ge307XG5cbnNob3BpZnlOZXdzbGV0dGVyLmdldFVzZXJJbmZvID0gKCkgPT4ge1xuICAgICQoJ2Zvcm0nKS5vbignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB1c2VyRW1haWwgPSAkKFwiaW5wdXRbdHlwZT0nZW1haWwnXVwiKS52YWwoKTtcbiAgICAgICAgY29uc3QgdXNlckludGVyZXN0ID0gJChcInNlbGVjdFwiKS52YWwoKTtcbiAgICAgICAgY29uc29sZS5sb2codXNlckVtYWlsKTtcbiAgICAgICAgY29uc29sZS5sb2codXNlckludGVyZXN0KTtcblxuICAgICAgICAvL0FMVEVSTkFURSBNRVRIT0QgQkVMT1cgV09SS1MgQVMgV0VMTCFcbiAgICAgICAgLy8gY29uc3QgdXNlckVtYWlsID0gZS50YXJnZXRbMV0udmFsdWVcbiAgICAgICAgLy8gY29uc3QgdXNlckludGVyZXN0ID0gKGUudGFyZ2V0WzJdLnZhbHVlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXNlckVtYWlsO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VySW50ZXJlc3QpO1xuICAgIH0pXG59XG5cbnNob3BpZnlOZXdzbGV0dGVyLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2hvcGlmeU5ld3NsZXR0ZXIuZ2V0VXNlckluZm8oKTtcbn1cblxuLy8gRE9DVU1FTlQgUkVBRFkgU1RBUlRTIEhFUkUhXG4kKGZ1bmN0aW9uKCkge1xuICAgIHNob3BpZnlOZXdzbGV0dGVyLmluaXQoKTtcbn0pO1xuLy8gRE9DVU1FTlQgUkVBRFkgRU5EUyBIRVJFISJdfQ==
