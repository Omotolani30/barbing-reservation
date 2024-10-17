// Select the DOM elements
const toggleButton = document.getElementById('toggle');
const navLinks = document.getElementById('nav-links');

// Add an event listener to toggle the 'active' class on click
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// Function to open modal
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

// Function to close modal
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}


// Example of dynamic availability based on barber selection
document.getElementById('barber').addEventListener('change', function() {
    var selectedBarber = this.value;
    // You can dynamically update available services or time slots based on the barber selected
});
