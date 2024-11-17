// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

// Display the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Display the last modified date of the document
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;