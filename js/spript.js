let btn = document.querySelector('.header__btn-menu');
let nav = document.querySelector('.header__nav');

btn.addEventListener('click', function() {
    btn.classList.toggle('header__btn-menu--active');
    nav.classList.toggle('header__nav--active');
});

//========================================================================================================================================================
// scroll down

const scrollBtn = document.querySelector(".hero__scroll");
const where = document.querySelector(".capabilities__title");

scrollBtn.addEventListener('click', () => {
    where.scrollIntoView({ 
        block: 'center', // к ближайшей границе экрана
        behavior: 'smooth', // и плавно 
    });
})

// $button.addEventListener('click', e => {
//     // Прокрутим страницу к форме 
//     $form.scrollIntoView({ 
//       block: 'nearest', // к ближайшей границе экрана
//       behavior: 'smooth', // и плавно 
//     });
//   });