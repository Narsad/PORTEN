const menuBurger = document.querySelector('.menu');
const nav = document.querySelector('nav');

menuBurger.addEventListener('click', function(){
    nav.classList.toggle('nav');
})