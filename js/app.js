// Silect items 
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuLinks = menu.querySelectorAll('li');

// Open
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('show');
})

// Close
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('show')
    })
})


// Change background image ( COLOR SECTION ) 
// SILECT ITEMS
const bgChange = document.querySelector('.c_main__content');
const blueScooter = document.getElementById('blue');
const greenScooter = document.getElementById('green');
const redScooter = document.getElementById('red');
const blackScooter = document.getElementById('black');

// Blue
blueScooter.addEventListener('click', () =>{
    bgChange.style.background = "url('../images/blue_s__bg.webp') no-repeat center/cover"
})

// Green
greenScooter.addEventListener('click', () =>{
    bgChange.style.background = "url('../images/green_s__bg.avif') no-repeat center/cover"
})

// Red
redScooter.addEventListener('click', () =>{
    bgChange.style.background = "url('../images/red_s__bg.webp') no-repeat center/cover"
})

// Black
blackScooter.addEventListener('click', () =>{
    bgChange.style.background = "url('../images/black_s__bg.jpg') no-repeat center/cover"
})

// Install AOS
AOS.init(); 
