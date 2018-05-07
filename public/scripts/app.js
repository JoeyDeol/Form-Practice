(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var shopifyNewsletter = {};

shopifyNewsletter.validateMyForm = function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        console.log(e);
        return false;
        // if (false) {
        //     alert("FAILED")
        //     return false;
        // } else {
        //     alert("PASSED")
        //     shopifyNewsletter.httpSimulation()
        //     shopifyNewsletter.getUserInfo();
        //     return true
        // }
    });
};

shopifyNewsletter.httpSimulation = function () {
    console.log('SUBMITTED');
    $('#submit-email-button').empty();
    $('#submit-email-button').text('Submitting ...');
    setTimeout("shopifyNewsletter.getUserInfo", 3000);
};

shopifyNewsletter.getUserInfo = function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        if (shopifyNewsletter.validateMyForm()) {
            var userEmail = $("input[type='email']").val();
            var userInterest = $("select").val();
            console.log(userEmail);
            console.log(userInterest);

            //ALTERNATE METHOD BELOW WORKS AS WELL!
            // const userEmail = e.target[1].value
            // const userInterest = (e.target[2].value);
            // console.log(userEmail;
            // console.log(userInterest);
        } else {
            return false;
        }
    });
};

shopifyNewsletter.init = function () {
    shopifyNewsletter.getUserInfo();
    shopifyNewsletter.validateMyForm();
};

// DOCUMENT READY STARTS HERE!
$(function () {
    shopifyNewsletter.init();
});
// DOCUMENT READY ENDS HERE!

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sb0JBQW9CLEVBQTFCOztBQUdBLGtCQUFrQixjQUFsQixHQUFtQyxZQUFNO0FBQ3JDLE1BQUUsTUFBRixFQUFVLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFVBQUMsQ0FBRCxFQUFPO0FBQzFCLFVBQUUsY0FBRjtBQUNBLGdCQUFRLEdBQVIsQ0FBWSxDQUFaO0FBQ0EsZUFBTyxLQUFQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsS0FiRDtBQWNILENBZkQ7O0FBaUJBLGtCQUFrQixjQUFsQixHQUFtQyxZQUFNO0FBQ3JDLFlBQVEsR0FBUixDQUFZLFdBQVo7QUFDQSxNQUFFLHNCQUFGLEVBQTBCLEtBQTFCO0FBQ0EsTUFBRSxzQkFBRixFQUEwQixJQUExQjtBQUNBLGVBQVcsK0JBQVgsRUFBNEMsSUFBNUM7QUFDSCxDQUxEOztBQVFBLGtCQUFrQixXQUFsQixHQUFnQyxZQUFNO0FBQ2xDLE1BQUUsTUFBRixFQUFVLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFVBQUMsQ0FBRCxFQUFPO0FBQzFCLFVBQUUsY0FBRjtBQUNBLFlBQUksa0JBQWtCLGNBQWxCLEVBQUosRUFBd0M7QUFDcEMsZ0JBQU0sWUFBWSxFQUFFLHFCQUFGLEVBQXlCLEdBQXpCLEVBQWxCO0FBQ0EsZ0JBQU0sZUFBZSxFQUFFLFFBQUYsRUFBWSxHQUFaLEVBQXJCO0FBQ0Esb0JBQVEsR0FBUixDQUFZLFNBQVo7QUFDQSxvQkFBUSxHQUFSLENBQVksWUFBWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsU0FYRCxNQVdPO0FBQ0gsbUJBQU8sS0FBUDtBQUNIO0FBQ0osS0FoQkQ7QUFpQkgsQ0FsQkQ7O0FBb0JBLGtCQUFrQixJQUFsQixHQUF5QixZQUFZO0FBQ2pDLHNCQUFrQixXQUFsQjtBQUNBLHNCQUFrQixjQUFsQjtBQUNILENBSEQ7O0FBS0E7QUFDQSxFQUFFLFlBQVc7QUFDVCxzQkFBa0IsSUFBbEI7QUFDSCxDQUZEO0FBR0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBzaG9waWZ5TmV3c2xldHRlciA9IHt9O1xuXG5cbnNob3BpZnlOZXdzbGV0dGVyLnZhbGlkYXRlTXlGb3JtID0gKCkgPT4ge1xuICAgICQoJ2Zvcm0nKS5vbignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vIGlmIChmYWxzZSkge1xuICAgICAgICAvLyAgICAgYWxlcnQoXCJGQUlMRURcIilcbiAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIGFsZXJ0KFwiUEFTU0VEXCIpXG4gICAgICAgIC8vICAgICBzaG9waWZ5TmV3c2xldHRlci5odHRwU2ltdWxhdGlvbigpXG4gICAgICAgIC8vICAgICBzaG9waWZ5TmV3c2xldHRlci5nZXRVc2VySW5mbygpO1xuICAgICAgICAvLyAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgLy8gfVxuICAgIH0pXG59XG5cbnNob3BpZnlOZXdzbGV0dGVyLmh0dHBTaW11bGF0aW9uID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdTVUJNSVRURUQnKVxuICAgICQoJyNzdWJtaXQtZW1haWwtYnV0dG9uJykuZW1wdHkoKTtcbiAgICAkKCcjc3VibWl0LWVtYWlsLWJ1dHRvbicpLnRleHQoYFN1Ym1pdHRpbmcgLi4uYClcbiAgICBzZXRUaW1lb3V0KFwic2hvcGlmeU5ld3NsZXR0ZXIuZ2V0VXNlckluZm9cIiwgMzAwMClcbn1cblxuXG5zaG9waWZ5TmV3c2xldHRlci5nZXRVc2VySW5mbyA9ICgpID0+IHtcbiAgICAkKCdmb3JtJykub24oJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHNob3BpZnlOZXdzbGV0dGVyLnZhbGlkYXRlTXlGb3JtKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJFbWFpbCA9ICQoXCJpbnB1dFt0eXBlPSdlbWFpbCddXCIpLnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgdXNlckludGVyZXN0ID0gJChcInNlbGVjdFwiKS52YWwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJFbWFpbCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VySW50ZXJlc3QpO1xuICAgIFxuICAgICAgICAgICAgLy9BTFRFUk5BVEUgTUVUSE9EIEJFTE9XIFdPUktTIEFTIFdFTEwhXG4gICAgICAgICAgICAvLyBjb25zdCB1c2VyRW1haWwgPSBlLnRhcmdldFsxXS52YWx1ZVxuICAgICAgICAgICAgLy8gY29uc3QgdXNlckludGVyZXN0ID0gKGUudGFyZ2V0WzJdLnZhbHVlKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJFbWFpbDtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJJbnRlcmVzdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5zaG9waWZ5TmV3c2xldHRlci5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIHNob3BpZnlOZXdzbGV0dGVyLmdldFVzZXJJbmZvKCk7XG4gICAgc2hvcGlmeU5ld3NsZXR0ZXIudmFsaWRhdGVNeUZvcm0oKTtcbn1cblxuLy8gRE9DVU1FTlQgUkVBRFkgU1RBUlRTIEhFUkUhXG4kKGZ1bmN0aW9uKCkge1xuICAgIHNob3BpZnlOZXdzbGV0dGVyLmluaXQoKTtcbn0pO1xuLy8gRE9DVU1FTlQgUkVBRFkgRU5EUyBIRVJFISJdfQ==
