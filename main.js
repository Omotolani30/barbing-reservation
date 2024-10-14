// Select the DOM elements
const toggleButton = document.getElementById('toggle');
const navLinks = document.getElementById('nav-links');

// Add an event listener to toggle the 'active' class on click
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
