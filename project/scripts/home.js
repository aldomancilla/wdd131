// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

// newsletter.js
document.addEventListener('DOMContentLoaded', function () {
    const newsletterForm = document.getElementById('nesletterForm');
    const emailInput = document.getElementById('subscribe');
    const messageContainer = document.createElement('div');

    newsletterForm.insertAdjacentElement('afterend', messageContainer);
    messageContainer.className = 'message-container';


    newsletterForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (email === '') {
            showMessage('Please, enter your email.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showMessage('Please, enter a valid email.', 'error');
            return;
        }

        showMessage('¡Thanks for subscribe! Email: ' + email, 'success');
        emailInput.value = '';
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showMessage(message, type) {
        messageContainer.textContent = message;
        messageContainer.className = `message-container ${type}`;
    }
});


