// toggle
const toggleButton = document.getElementById('toggle');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// members
// Function to open modal
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

// Function to close modal
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}


document.getElementById('barber').addEventListener('change', function() {
    var selectedBarber = this.value;
});
