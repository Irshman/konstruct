let btn = document.querySelector('.header__btn-menu');
let nav = document.querySelector('.header__nav');

btn.addEventListener('click', function() {
    btn.classList.toggle('header__btn-menu--active');
    nav.classList.toggle('header__nav--active');
});