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
            $('label').addClass('invalid__email');
            return false;
        } else {
            shopifyNewsletter.getUserInfo();
            shopifyNewsletter.httpSimulation();
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
    console.log('SUBMITTED');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sb0JBQW9CLEVBQTFCOztBQUVBLGtCQUFrQixpQkFBbEIsR0FBc0MsVUFBQyxLQUFELEVBQVc7QUFDN0MsUUFBTSxRQUFRLHlKQUFkO0FBQ0EsV0FBTyxNQUFNLElBQU4sQ0FBVyxLQUFYLENBQVA7QUFDSCxDQUhEOztBQUtBLGtCQUFrQixjQUFsQixHQUFtQyxZQUFNO0FBQ3JDLE1BQUUsTUFBRixFQUFVLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFVBQUMsQ0FBRCxFQUFPO0FBQzFCLFVBQUUsY0FBRjtBQUNBLFlBQU0sUUFBUSxFQUFFLHFCQUFGLEVBQXlCLEdBQXpCLEVBQWQ7QUFDQSxZQUFJLGtCQUFrQixpQkFBbEIsQ0FBb0MsS0FBcEMsS0FBOEMsS0FBbEQsRUFBeUQ7QUFDckQsY0FBRSxPQUFGLEVBQVcsUUFBWCxDQUFvQixnQkFBcEI7QUFDQSxtQkFBTyxLQUFQO0FBQ0gsU0FIRCxNQUdPO0FBQ0gsOEJBQWtCLFdBQWxCO0FBQ0EsOEJBQWtCLGNBQWxCO0FBQ0EsbUJBQU8sSUFBUDtBQUNIO0FBQ0osS0FYRDtBQVlILENBYkQ7O0FBZUEsa0JBQWtCLFdBQWxCLEdBQWdDLFlBQU07QUFDbEMsUUFBTSxZQUFZLEVBQUUscUJBQUYsRUFBeUIsR0FBekIsRUFBbEI7QUFDQSxRQUFNLGVBQWUsRUFBRSxRQUFGLEVBQVksR0FBWixFQUFyQjtBQUNBLFlBQVEsR0FBUixDQUFZLFNBQVo7QUFDQSxZQUFRLEdBQVIsQ0FBWSxZQUFaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxDQVhEOztBQWFBLGtCQUFrQixjQUFsQixHQUFtQyxZQUFNO0FBQ3JDLFlBQVEsR0FBUixDQUFZLFdBQVo7QUFDSCxDQUZEOztBQUlBLGtCQUFrQixJQUFsQixHQUF5QixZQUFZO0FBQ2pDLHNCQUFrQixjQUFsQjtBQUNILENBRkQ7O0FBSUE7QUFDQSxFQUFFLFlBQVc7QUFDVCxzQkFBa0IsSUFBbEI7QUFDSCxDQUZEO0FBR0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBzaG9waWZ5TmV3c2xldHRlciA9IHt9O1xuXG5zaG9waWZ5TmV3c2xldHRlci52YWxpZGF0ZVVzZXJFbWFpbCA9IChlbWFpbCkgPT4ge1xuICAgIGNvbnN0IHJlZ2V4ID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICByZXR1cm4gcmVnZXgudGVzdChlbWFpbCk7XG59XG5cbnNob3BpZnlOZXdzbGV0dGVyLnZhbGlkYXRlTXlGb3JtID0gKCkgPT4ge1xuICAgICQoJ2Zvcm0nKS5vbignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBlbWFpbCA9ICQoXCJpbnB1dFt0eXBlPSdlbWFpbCddXCIpLnZhbCgpO1xuICAgICAgICBpZiAoc2hvcGlmeU5ld3NsZXR0ZXIudmFsaWRhdGVVc2VyRW1haWwoZW1haWwpID09IGZhbHNlKSB7XG4gICAgICAgICAgICAkKCdsYWJlbCcpLmFkZENsYXNzKCdpbnZhbGlkX19lbWFpbCcpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvcGlmeU5ld3NsZXR0ZXIuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgICAgIHNob3BpZnlOZXdzbGV0dGVyLmh0dHBTaW11bGF0aW9uKClcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5zaG9waWZ5TmV3c2xldHRlci5nZXRVc2VySW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCB1c2VyRW1haWwgPSAkKFwiaW5wdXRbdHlwZT0nZW1haWwnXVwiKS52YWwoKTtcbiAgICBjb25zdCB1c2VySW50ZXJlc3QgPSAkKFwic2VsZWN0XCIpLnZhbCgpO1xuICAgIGNvbnNvbGUubG9nKHVzZXJFbWFpbCk7XG4gICAgY29uc29sZS5sb2codXNlckludGVyZXN0KTtcblxuICAgIC8vQUxURVJOQVRFIE1FVEhPRCBCRUxPVyBXT1JLUyBBUyBXRUxMIVxuICAgIC8vIGNvbnN0IHVzZXJFbWFpbCA9IGUudGFyZ2V0WzFdLnZhbHVlXG4gICAgLy8gY29uc3QgdXNlckludGVyZXN0ID0gKGUudGFyZ2V0WzJdLnZhbHVlKTtcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyRW1haWw7XG4gICAgLy8gY29uc29sZS5sb2codXNlckludGVyZXN0KTtcbn1cblxuc2hvcGlmeU5ld3NsZXR0ZXIuaHR0cFNpbXVsYXRpb24gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1NVQk1JVFRFRCcpXG59XG5cbnNob3BpZnlOZXdzbGV0dGVyLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2hvcGlmeU5ld3NsZXR0ZXIudmFsaWRhdGVNeUZvcm0oKTtcbn1cblxuLy8gRE9DVU1FTlQgUkVBRFkgU1RBUlRTIEhFUkUhXG4kKGZ1bmN0aW9uKCkge1xuICAgIHNob3BpZnlOZXdzbGV0dGVyLmluaXQoKTtcbn0pO1xuLy8gRE9DVU1FTlQgUkVBRFkgRU5EUyBIRVJFISJdfQ==
