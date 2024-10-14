// Select the DOM elements
const toggleButton = document.getElementById('toggle');
const navLinks = document.getElementById('nav-links');

// Add an event listener to toggle the 'active' class on click
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// const marquee = document.getElementById('marquee');

//     marquee.addEventListener('mouseover', () => {
//         marquee.querySelector('.marquee').style.animationPlayState = 'paused'; // Pause animation
//     });

//     marquee.addEventListener('mouseout', () => {
//         marquee.querySelector('.marquee').style.animationPlayState = 'running'; // Resume animation
//     });