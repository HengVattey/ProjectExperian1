// scroll-reveal.js

document.addEventListener("DOMContentLoaded", function () {

    //cloud page
    ScrollReveal().reveal('.scroll-reveal-top', {
        delay: 600,
        distance: '50px',
        origin: 'top',
    });
    ScrollReveal().reveal('.img_container', {
        delay: 650,
        distance: '50px',
        origin: 'bottom',
    });

    ScrollReveal().reveal('.img-box', {
        delay: 600,
        distance: '50px',
        origin: 'right',
    });
    ScrollReveal().reveal('.detail-box', {
        delay: 600,
        distance: '50px',
        origin: 'left',
    });
    
    //allowx
    ScrollReveal().reveal('.point_text', {
        delay: 600,
        distance: '50px',
        origin: 'top',
    });
    
    //net2 page
    ScrollReveal().reveal('.heading_container', {
        delay: 600,
        distance: '50px',
        origin: 'top',
    });
    ScrollReveal().reveal('.text', {
        delay: 600,
        distance: '50px',
        origin: 'bottom',
    });


    ScrollReveal().reveal('.section-title', {
        delay: 1000,
        distance: '50px',
        origin: 'bottom',
        interval: 200,
    });

    //

    ScrollReveal().reveal('.wsite-button', {
        delay: 1000,
        distance: '50px',
        origin: 'bottom',
        interval: 200,
    });

    ScrollReveal().reveal('wsite-multicol-col','detail-box' ,{
        delay: 600,
        distance: '50px',
        origin: 'left',
    });

    ScrollReveal().reveal('.wsite-section-elements', {
        delay: 1000,
        distance: '50px',
        origin: 'bottom',
        interval: 200,
    });
});
