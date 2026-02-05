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
    bgChange.style.backgroundImage = "url('images/blue_s__bg.webp')";
});

// Green
greenScooter.addEventListener('click', () =>{
    bgChange.style.backgroundImage = "url('images/green_s__bg.avif')";
});

// Red
redScooter.addEventListener('click', () =>{
    bgChange.style.backgroundImage = "url('images/red_s__bg.webp')";
});

// Black
blackScooter.addEventListener('click', () =>{
    bgChange.style.backgroundImage = "url('images/black_s__bg.jpg')";
});

// Install AOS
AOS.init(); 
