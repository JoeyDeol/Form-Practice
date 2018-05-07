const shopifyNewsletter = {};


shopifyNewsletter.validateMyForm = () => {
    $('form').on('submit', (e) => {
        e.preventDefault();
        console.log(e)
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
    })
}

shopifyNewsletter.httpSimulation = () => {
    console.log('SUBMITTED')
    $('#submit-email-button').empty();
    $('#submit-email-button').text(`Submitting ...`)
    setTimeout("shopifyNewsletter.getUserInfo", 3000)
}


shopifyNewsletter.getUserInfo = () => {
    $('form').on('submit', (e) => {
        e.preventDefault();
        if (shopifyNewsletter.validateMyForm()) {
            const userEmail = $("input[type='email']").val();
            const userInterest = $("select").val();
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
    })
}

shopifyNewsletter.init = function () {
    shopifyNewsletter.getUserInfo();
    shopifyNewsletter.validateMyForm();
}

// DOCUMENT READY STARTS HERE!
$(function() {
    shopifyNewsletter.init();
});
// DOCUMENT READY ENDS HERE!