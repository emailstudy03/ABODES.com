document.addEventListener("DOMContentLoaded", () => {
    const welcomePage = document.getElementById('welcome-page');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const userInfo = document.getElementById('user-info');
    const subscriptionForm = document.getElementById('subscription-form');
    const successPage = document.getElementById('success-page');
    const orderDetails = document.getElementById('order-details');
    const settings = document.getElementById('settings');
    const receipt = document.getElementById('receipt');
    const disclaimer = document.getElementById('disclaimer');

    window.showLoginPage = () => {
        hideAllSections();
        loginForm.classList.remove('hidden');
    };

    window.showSignupPage = () => {
        hideAllSections();
        signupForm.classList.remove('hidden');
    };

    window.loginUser = () => {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (email && password) {
            document.getElementById('user-details').innerHTML = `
                <p>Email: ${email}</p>
            `;
            hideAllSections();
            userInfo.classList.remove('hidden');
        }
    };

    window.signupUser = () => {
        const fullname = document.getElementById('signup-fullname').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        if (fullname && email && password) {
            document.getElementById('user-details').innerHTML = `
                <p>Full Name: ${fullname}</p>
                <p>Email: ${email}</p>
            `;
            hideAllSections();
            userInfo.classList.remove('hidden');
        }
    };

    window.showSubscriptionForm = () => {
        hideAllSections();
        subscriptionForm.classList.remove('hidden');
    };

    window.showUserInfo = () => {
        hideAllSections();
        userInfo.classList.remove('hidden');
    };

    window.showOrderDetails = () => {
        hideAllSections();
        orderDetails.classList.remove('hidden');
    };

    window.showSettings = () => {
        hideAllSections();
        settings.classList.remove('hidden');
    };

    window.showReceipt = () => {
        hideAllSections();
        receipt.classList.remove('hidden');
    };

    window.showDisclaimer = () => {
        hideAllSections();
        disclaimer.classList.remove('hidden');
    };

    const form = document.getElementById('form');
    const formSteps = [...document.querySelectorAll('.form-step')];
    let formStepsNum = 0;

    document.querySelectorAll('.btn-next').forEach(button => {
        button.addEventListener('click', () => {
            formStepsNum++;
            updateFormSteps();
        });
    });

    document.querySelectorAll('.btn-prev').forEach(button => {
        button.addEventListener('click', () => {
            formStepsNum--;
            updateFormSteps();
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const service = document.getElementById('service').value;
        const frequency = document.getElementById('frequency').value;
        const address = document.getElementById('address').value;
        const payment = document.getElementById('payment').value;
        const serviceDetails = document.getElementById('service-details').value;
        const preferredDate = document.getElementById('preferred-date').value;
        const preferredTime = document.getElementById('preferred-time').value;
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const dob = document.getElementById('dob').value;
        const gender = document.getElementById('gender').value;

        hideAllSections();
        successPage.classList.remove('hidden');

        const updatesContent = document.getElementById('updates-content');
        updatesContent.innerHTML = `
            <h4>Subscription Confirmation</h4>
            <p>Service: ${service}</p>
            <p>Frequency: ${frequency}</p>
            <p>Address: ${address}</p>
            <p>Payment Method: ${payment}</p>
            <p>Service Details: ${serviceDetails}</p>
            <p>Preferred Date: ${preferredDate}</p>
            <p>Preferred Time: ${preferredTime}</p>
            <p>Full Name: ${fullname}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Date of Birth: ${dob}</p>
            <p>Gender: ${gender}</p>
            <p>Thank you for subscribing to our service!</p>
        `;
    });

    function updateFormSteps() {
        formSteps.forEach((formStep) => {
            formStep.classList.contains('form-step-active') && formStep.classList.remove('form-step-active');
        });
        formSteps[formStepsNum].classList.add('form-step-active');
    }

    function hideAllSections() {
        welcomePage.classList.add('hidden');
        loginForm.classList.add('hidden');
        signupForm.classList.add('hidden');
        userInfo.classList.add('hidden');
        subscriptionForm.classList.add('hidden');
        successPage.classList.add('hidden');
        orderDetails.classList.add('hidden');
        settings.classList.add('hidden');
        receipt.classList.add('hidden');
        disclaimer.classList.add('hidden');
    }
});
