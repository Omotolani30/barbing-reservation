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

// document.querySelectorAll('.team-member').forEach(member => {
//     member.addEventListener('click', function() {
//         const memberId = this.dataset.id;
//         // Fetch data from backend (this part interacts with backend)
//         fetch(`/team-member/${memberId}`)
//             .then(response => response.json())
//             .then(data => {
//                 // Populate popup with team member info
//                 document.getElementById('popup-name').innerText = data.name;
//                 document.getElementById('popup-role').innerText = data.role;
//                 document.getElementById('popup-bio').innerText = data.bio;
//                 // Display popup
//                 document.getElementById('team-popup').style.display = 'block';
//             });
//     });
// });



// Example of dynamic availability based on barber selection
document.getElementById('barber').addEventListener('change', function() {
    var selectedBarber = this.value;
    // You can dynamically update available services or time slots based on the barber selected
});
