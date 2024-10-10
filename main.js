const toggle = document.getElementById('toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


// const marquee = document.getElementById('marquee');

//     marquee.addEventListener('mouseover', () => {
//         marquee.querySelector('.marquee').style.animationPlayState = 'paused'; // Pause animation
//     });

//     marquee.addEventListener('mouseout', () => {
//         marquee.querySelector('.marquee').style.animationPlayState = 'running'; // Resume animation
//     });