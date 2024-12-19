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

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!validateForm(name, email, message)) {
            showMessage('Please, complete all fields.', 'error');
            return;
        }

        const contactData = { name, email, message };
        saveToLocalStorage(contactData);

        showMessage(`Thanks, ${name}. Your message was successfully sent.`, 'success');
        form.reset();
    }

    function validateForm(name, email, message) {
        if (!name || !email || !message) return false;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function saveToLocalStorage(data) {
        let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        messages.push(data);
        localStorage.setItem('contactMessages', JSON.stringify(messages));
    }

    function showMessage(text, type) {
        responseMessage.textContent = text;
        responseMessage.className = `message ${type}`;
        responseMessage.style.display = 'block';

        setTimeout(() => {
            responseMessage.style.display = 'none';
        }, 5000);
    }
});