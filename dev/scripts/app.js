const shopifyNewsletter = {};

shopifyNewsletter.validateUserEmail = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

shopifyNewsletter.validateMyForm = () => {
    $('form').on('submit', (e) => {
        e.preventDefault();
        const email = $("input[type='email']").val();
        if (shopifyNewsletter.validateUserEmail(email) == false) {
            $('label').toggleClass('invalid__email');
            return false;
        } else {
            shopifyNewsletter.getUserInfo();
            shopifyNewsletter.httpSimulation()
            $('label').removeClass('invalid__email');
            return true
        }
    })
}

shopifyNewsletter.getUserInfo = () => {
    const userEmail = $("input[type='email']").val();
    const userInterest = $("select").val();
    console.log(userEmail);
    console.log(userInterest);

    //ALTERNATE METHOD BELOW WORKS AS WELL!
    // const userEmail = e.target[1].value
    // const userInterest = (e.target[2].value);
    // console.log(userEmail;
    // console.log(userInterest);
}

shopifyNewsletter.httpSimulation = () => {
    $('.subscribe__form__button').html(`
        <input type="submit" name="httpsRequest" value="Submitting..." disabled="disabled" class="https__request"></input>       
        `);
    shopifyNewsletter.vanishForm();
}

shopifyNewsletter.vanishForm = () => {
    let vanish = $('form');
    setTimeout(() => {
        vanish.addClass('form__submitted')
        shopifyNewsletter.thankYou();
    }, 2000);
}

shopifyNewsletter.thankYou = () => {
    $('.newsletter__signUp__subscribe').html(`
        <h3>Thanks for subscribing</h3>
        <p>You'll start receiving free tips and resources soon.</p>
    `)
}

shopifyNewsletter.init = function () {
    shopifyNewsletter.validateMyForm();
}

// DOCUMENT READY STARTS HERE!
$(function() {
    shopifyNewsletter.init();
});
// DOCUMENT READY ENDS HERE!