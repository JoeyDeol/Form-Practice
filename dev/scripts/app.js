const shopifyNewsletter = {};

shopifyNewsletter.getUserInfo = () => {
    $('form').on('submit', (e) => {
        e.preventDefault();
        const userEmail = $("input[type='email']").val();
        const userInterest = $("select").val();
        console.log(userEmail);
        console.log(userInterest);

        //ALTERNATE METHOD BELOW WORKS AS WELL!
        // const userEmail = e.target[1].value
        // const userInterest = (e.target[2].value);
        // console.log(userEmail;
        // console.log(userInterest);
    })
}

shopifyNewsletter.init = function () {
    shopifyNewsletter.getUserInfo();
}

// DOCUMENT READY STARTS HERE!
$(function() {
    shopifyNewsletter.init();
});
// DOCUMENT READY ENDS HERE!