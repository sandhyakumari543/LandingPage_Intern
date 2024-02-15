// // Countdown timer implementation
// const countdownElement = document.getElementById('countdown');

// function countdown() {
//     const countDate = new Date('February 15, 2024 00:00:00').getTime();
//     const now = new Date().getTime();
//     const gap = countDate - now;

//     const seconds = 1000;
//     const minutes = seconds * 60;
//     const hours = minutes * 60;
//     const days = hours * 24;

//     const textDays = Math.floor(gap / days);
//     const textHours = Math.floor((gap % days) / hours);
//     const textMinutes = Math.floor((gap % hours) / minutes);
//     const textSeconds = Math.floor((gap % minutes) / seconds);

//     countdownElement.innerHTML = `
//         <div>${textDays}<span>Days</span></div>
//         <div>${textHours}<span>Hours</span></div>
//         <div>${textMinutes}<span>Minutes</span></div>
//         <div>${textSeconds}<span>Seconds</span></div>
//     `;
// }

// setInterval(countdown, 1000);

// // Slide-up form after 15 seconds
// setTimeout(function() {
//     document.getElementById('slide-up-form').classList.add('show');
// }, 15000);



// Toggle icon
let menuIcon=document.querySelector('#menu-icon');
let navbar=document .querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}



// Scroll Section 

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link 
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

const countdownDate = new Date('February 28, 2024 00:00:00').getTime();

const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const timeRemaining = countdownDate - now;
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');


    document.getElementById('timer-display').textContent = formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;
    if (timeRemaining < 0) {
        clearInterval(countdownTimer);
        document.getElementById('timer-display').textContent = "Countdown expired!";
    }
}, 1000); 
