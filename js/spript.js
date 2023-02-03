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

// Animation 

window.addEventListener('load', () => {

    // Hero 
    gsap.fromTo(".hero__logo", {y: -100, opacity: 0}, {y: 0, opacity: 1, duration: 1});
    gsap.fromTo(".hero__main-title", {y: -200, opacity: 0}, {y: 0, opacity: 1, duration: 1});
    gsap.fromTo(".hero__subtitle", {y: -100, opacity: 0}, {y: 0, opacity: 1, duration: 1.5});

    // Header 

    gsap.fromTo(".header__logo", {x: -200, opacity: 0}, {x: 0, opacity: 1, duration: 1});
    gsap.fromTo(".header__nav", {x: 300, opacity: 0}, {x: 0, opacity: 1, duration: 1});

    // Story 

    gsap.from(".story__title", {
        scrollTrigger: {
            trigger: ".story__title",
            togglePlay: 'restart none none none',
            start: 'top 90%',
        },
        opacity: 0, 
        y: -100, 
        duration: 1.5,
    });

    gsap.from(".story__name", {
        scrollTrigger: {
            trigger: ".story__name",
            togglePlay: 'restart none none none',
            start: 'top 90%',
        },
        opacity: 0, 
        x: -300, 
        duration: 1.5,
    });

    gsap.from(".story__descr", {
        scrollTrigger: {
            trigger: ".story__name",
            togglePlay: 'restart none none none',
            start: 'top 90%',
        },
        delay: 0.5,
        opacity: 0, 
        x: -300, 
        duration: 1.5,
    });

    gsap.from(".story__bg-item-1", {
        scrollTrigger: {
            trigger: ".story__bg-item-1",
            togglePlay: 'restart none none none',
            start: 'top 90%',
        },
        opacity: 0, 
        x: 200, 
        duration: 1.5,
    });

    gsap.from(".story__bg-item-2", {
        scrollTrigger: {
            trigger: ".story__bg-item-2",
            togglePlay: 'restart none none none',
            start: 'top 90%',
        },
        delay: 0.5,
        opacity: 0, 
        x: 150, 
        duration: 1.5,
    });

    gsap.from(".story__bg-item-3", {
        scrollTrigger: {
            trigger: ".story__bg-item-3",
            togglePlay: 'restart none none none',
            start: 'top 90%',
        },
        delay: 1,
        opacity: 0, 
        x: 100, 
        duration: 1.5,
    });

    // Capabilities

    gsap.from(".capabilities__title", {
        scrollTrigger: {
            trigger: ".capabilities__title",
            togglePlay: 'restart none none none',
            start: 'top 90%',
        },
        opacity: 0, 
        x: -200, 
        duration: 1.5,
    });

    gsap.from(".capabilities__descr", {
        scrollTrigger: {
            trigger: ".capabilities__descr",
            togglePlay: 'restart none none none',
            start: 'top 90%',
        },
        opacity: 0, 
        x: 200, 
        duration: 1.5,
    });

    gsap.from(".capabilities__btn", {
        scrollTrigger: {
            trigger: ".capabilities__btn",
            togglePlay: 'restart none none none',
            start: 'top 90%',
        },
        delay: 0.5,
        opacity: 0, 
        x: 150, 
        duration: 1.5,
    });


    gsap.from(".capabilities__item-1", {
        scrollTrigger: {
            trigger: ".capabilities__item-1",
            togglePlay: 'restart none none none',
            start: 'top 90%',
        },
        opacity: 0, 
        y: 300, 
        duration: 1.5,
    });

    gsap.from(".capabilities__item-2", {
        scrollTrigger: {
            trigger: ".capabilities__item-2",
            togglePlay: 'restart none none none',
            start: 'top 90%',
        },
        delay: 0.5,
        opacity: 0, 
        y: 300, 
        duration: 1.5,
    });

    gsap.from(".capabilities__item-3", {
        scrollTrigger: {
            trigger: ".capabilities__item-3",
            togglePlay: 'restart none none none',
            start: 'top 90%',
        },
        delay: 1,
        opacity: 0, 
        y: 300, 
        duration: 1.5,
    });

    // Bild 

    gsap.from(".bild__title", {
        scrollTrigger: {
            trigger: ".bild__title",
            togglePlay: 'restart none none none',
            start: 'top 90%',
        },
        opacity: 0, 
        y: 200, 
        duration: 1.5,
    });

    gsap.from(".bild__btn", {
        scrollTrigger: {
            trigger: ".bild__btn",
            togglePlay: 'restart none none none',
            start: 'top 90%',
        },
        opacity: 0, 
        y: 200, 
        duration: 1.5,
        delay: 0.5
    });

    // Mail 

    gsap.from(".mail__title", {
        scrollTrigger: {
            trigger: ".mail__title",
            togglePlay: 'restart none none none',
            start: 'top 90%',
        },
        opacity: 0, 
        x: -200, 
        duration: 1.5,
    });

    gsap.from(".mail__form", {
        scrollTrigger: {
            trigger: ".mail__form",
            togglePlay: 'restart none none none',
            start: 'top 90%',
        },
        opacity: 0, 
        x: 200, 
        duration: 1.5,
        delay: 0.5
    });

    // footer 

    gsap.from(".footer__wrap", {
        scrollTrigger: {
            trigger: ".footer__wrap",
            togglePlay: 'restart none none none',
            start: 'top 95%',
        },
        opacity: 0, 
        y: 100, 
        duration: 1.5,
    });
});