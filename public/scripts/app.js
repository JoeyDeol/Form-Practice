(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var shopifyNewsletter = {};

shopifyNewsletter.validateUserEmail = function (email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};

shopifyNewsletter.validateMyForm = function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        var email = $("input[type='email']").val();
        if (shopifyNewsletter.validateUserEmail(email) == false) {
            $('label').toggleClass('invalid__email');
            return false;
        } else {
            shopifyNewsletter.getUserInfo();
            shopifyNewsletter.httpSimulation();
            $('label').removeClass('invalid__email');
            return true;
        }
    });
};

shopifyNewsletter.getUserInfo = function () {
    var userEmail = $("input[type='email']").val();
    var userInterest = $("select").val();
    console.log(userEmail);
    console.log(userInterest);

    //ALTERNATE METHOD BELOW WORKS AS WELL!
    // const userEmail = e.target[1].value
    // const userInterest = (e.target[2].value);
    // console.log(userEmail;
    // console.log(userInterest);
};

shopifyNewsletter.httpSimulation = function () {
    $('.subscribe__form__button').html('\n        <input type="submit" name="httpsRequest" value="Submitting..." disabled="disabled" class="https__request"></input>       \n        ');
    shopifyNewsletter.vanishForm();
};

shopifyNewsletter.vanishForm = function () {
    var vanish = $('form');
    setTimeout(function () {
        vanish.addClass('form__submitted');
        shopifyNewsletter.thankYou();
    }, 2000);
};

shopifyNewsletter.thankYou = function () {
    $('.newsletter__signUp__subscribe').html('\n        <h3>Thanks for subscribing</h3>\n        <p>You\'ll start receiving free tips and resources soon.</p>\n    ');
};

shopifyNewsletter.init = function () {
    shopifyNewsletter.validateMyForm();
};

// DOCUMENT READY STARTS HERE!
$(function () {
    shopifyNewsletter.init();
});
// DOCUMENT READY ENDS HERE!

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sb0JBQW9CLEVBQTFCOztBQUVBLGtCQUFrQixpQkFBbEIsR0FBc0MsVUFBQyxLQUFELEVBQVc7QUFDN0MsUUFBTSxRQUFRLHlKQUFkO0FBQ0EsV0FBTyxNQUFNLElBQU4sQ0FBVyxLQUFYLENBQVA7QUFDSCxDQUhEOztBQUtBLGtCQUFrQixjQUFsQixHQUFtQyxZQUFNO0FBQ3JDLE1BQUUsTUFBRixFQUFVLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFVBQUMsQ0FBRCxFQUFPO0FBQzFCLFVBQUUsY0FBRjtBQUNBLFlBQU0sUUFBUSxFQUFFLHFCQUFGLEVBQXlCLEdBQXpCLEVBQWQ7QUFDQSxZQUFJLGtCQUFrQixpQkFBbEIsQ0FBb0MsS0FBcEMsS0FBOEMsS0FBbEQsRUFBeUQ7QUFDckQsY0FBRSxPQUFGLEVBQVcsV0FBWCxDQUF1QixnQkFBdkI7QUFDQSxtQkFBTyxLQUFQO0FBQ0gsU0FIRCxNQUdPO0FBQ0gsOEJBQWtCLFdBQWxCO0FBQ0EsOEJBQWtCLGNBQWxCO0FBQ0EsY0FBRSxPQUFGLEVBQVcsV0FBWCxDQUF1QixnQkFBdkI7QUFDQSxtQkFBTyxJQUFQO0FBQ0g7QUFDSixLQVpEO0FBYUgsQ0FkRDs7QUFnQkEsa0JBQWtCLFdBQWxCLEdBQWdDLFlBQU07QUFDbEMsUUFBTSxZQUFZLEVBQUUscUJBQUYsRUFBeUIsR0FBekIsRUFBbEI7QUFDQSxRQUFNLGVBQWUsRUFBRSxRQUFGLEVBQVksR0FBWixFQUFyQjtBQUNBLFlBQVEsR0FBUixDQUFZLFNBQVo7QUFDQSxZQUFRLEdBQVIsQ0FBWSxZQUFaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxDQVhEOztBQWFBLGtCQUFrQixjQUFsQixHQUFtQyxZQUFNO0FBQ3JDLE1BQUUsMEJBQUYsRUFBOEIsSUFBOUI7QUFHQSxzQkFBa0IsVUFBbEI7QUFDSCxDQUxEOztBQU9BLGtCQUFrQixVQUFsQixHQUErQixZQUFNO0FBQ2pDLFFBQUksU0FBUyxFQUFFLE1BQUYsQ0FBYjtBQUNBLGVBQVcsWUFBTTtBQUNiLGVBQU8sUUFBUCxDQUFnQixpQkFBaEI7QUFDQSwwQkFBa0IsUUFBbEI7QUFDSCxLQUhELEVBR0csSUFISDtBQUlILENBTkQ7O0FBUUEsa0JBQWtCLFFBQWxCLEdBQTZCLFlBQU07QUFDL0IsTUFBRSxnQ0FBRixFQUFvQyxJQUFwQztBQUlILENBTEQ7O0FBT0Esa0JBQWtCLElBQWxCLEdBQXlCLFlBQVk7QUFDakMsc0JBQWtCLGNBQWxCO0FBQ0gsQ0FGRDs7QUFJQTtBQUNBLEVBQUUsWUFBVztBQUNULHNCQUFrQixJQUFsQjtBQUNILENBRkQ7QUFHQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IHNob3BpZnlOZXdzbGV0dGVyID0ge307XG5cbnNob3BpZnlOZXdzbGV0dGVyLnZhbGlkYXRlVXNlckVtYWlsID0gKGVtYWlsKSA9PiB7XG4gICAgY29uc3QgcmVnZXggPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgIHJldHVybiByZWdleC50ZXN0KGVtYWlsKTtcbn1cblxuc2hvcGlmeU5ld3NsZXR0ZXIudmFsaWRhdGVNeUZvcm0gPSAoKSA9PiB7XG4gICAgJCgnZm9ybScpLm9uKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGVtYWlsID0gJChcImlucHV0W3R5cGU9J2VtYWlsJ11cIikudmFsKCk7XG4gICAgICAgIGlmIChzaG9waWZ5TmV3c2xldHRlci52YWxpZGF0ZVVzZXJFbWFpbChlbWFpbCkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICQoJ2xhYmVsJykudG9nZ2xlQ2xhc3MoJ2ludmFsaWRfX2VtYWlsJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG9waWZ5TmV3c2xldHRlci5nZXRVc2VySW5mbygpO1xuICAgICAgICAgICAgc2hvcGlmeU5ld3NsZXR0ZXIuaHR0cFNpbXVsYXRpb24oKVxuICAgICAgICAgICAgJCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnaW52YWxpZF9fZW1haWwnKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5zaG9waWZ5TmV3c2xldHRlci5nZXRVc2VySW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCB1c2VyRW1haWwgPSAkKFwiaW5wdXRbdHlwZT0nZW1haWwnXVwiKS52YWwoKTtcbiAgICBjb25zdCB1c2VySW50ZXJlc3QgPSAkKFwic2VsZWN0XCIpLnZhbCgpO1xuICAgIGNvbnNvbGUubG9nKHVzZXJFbWFpbCk7XG4gICAgY29uc29sZS5sb2codXNlckludGVyZXN0KTtcblxuICAgIC8vQUxURVJOQVRFIE1FVEhPRCBCRUxPVyBXT1JLUyBBUyBXRUxMIVxuICAgIC8vIGNvbnN0IHVzZXJFbWFpbCA9IGUudGFyZ2V0WzFdLnZhbHVlXG4gICAgLy8gY29uc3QgdXNlckludGVyZXN0ID0gKGUudGFyZ2V0WzJdLnZhbHVlKTtcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyRW1haWw7XG4gICAgLy8gY29uc29sZS5sb2codXNlckludGVyZXN0KTtcbn1cblxuc2hvcGlmeU5ld3NsZXR0ZXIuaHR0cFNpbXVsYXRpb24gPSAoKSA9PiB7XG4gICAgJCgnLnN1YnNjcmliZV9fZm9ybV9fYnV0dG9uJykuaHRtbChgXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgbmFtZT1cImh0dHBzUmVxdWVzdFwiIHZhbHVlPVwiU3VibWl0dGluZy4uLlwiIGRpc2FibGVkPVwiZGlzYWJsZWRcIiBjbGFzcz1cImh0dHBzX19yZXF1ZXN0XCI+PC9pbnB1dD4gICAgICAgXG4gICAgICAgIGApO1xuICAgIHNob3BpZnlOZXdzbGV0dGVyLnZhbmlzaEZvcm0oKTtcbn1cblxuc2hvcGlmeU5ld3NsZXR0ZXIudmFuaXNoRm9ybSA9ICgpID0+IHtcbiAgICBsZXQgdmFuaXNoID0gJCgnZm9ybScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB2YW5pc2guYWRkQ2xhc3MoJ2Zvcm1fX3N1Ym1pdHRlZCcpXG4gICAgICAgIHNob3BpZnlOZXdzbGV0dGVyLnRoYW5rWW91KCk7XG4gICAgfSwgMjAwMCk7XG59XG5cbnNob3BpZnlOZXdzbGV0dGVyLnRoYW5rWW91ID0gKCkgPT4ge1xuICAgICQoJy5uZXdzbGV0dGVyX19zaWduVXBfX3N1YnNjcmliZScpLmh0bWwoYFxuICAgICAgICA8aDM+VGhhbmtzIGZvciBzdWJzY3JpYmluZzwvaDM+XG4gICAgICAgIDxwPllvdSdsbCBzdGFydCByZWNlaXZpbmcgZnJlZSB0aXBzIGFuZCByZXNvdXJjZXMgc29vbi48L3A+XG4gICAgYClcbn1cblxuc2hvcGlmeU5ld3NsZXR0ZXIuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzaG9waWZ5TmV3c2xldHRlci52YWxpZGF0ZU15Rm9ybSgpO1xufVxuXG4vLyBET0NVTUVOVCBSRUFEWSBTVEFSVFMgSEVSRSFcbiQoZnVuY3Rpb24oKSB7XG4gICAgc2hvcGlmeU5ld3NsZXR0ZXIuaW5pdCgpO1xufSk7XG4vLyBET0NVTUVOVCBSRUFEWSBFTkRTIEhFUkUhIl19
