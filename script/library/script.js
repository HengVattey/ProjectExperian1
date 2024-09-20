
/*
1. PRELOADER JS
2. JQUERY STICKY MENU
3. SCROLL MENU JS
4. SECTIONS BACKGROUNDS
5. ACTIVE BOOTSTRAP TOOLTIP
5. MOBILE MENU JS
6. HOME SLIDER JS
7. TEAM SLIDER JS
8. TESTIMONIAL SLIDER JS
9. CLIENT SLIDER JS
10. COUNTDOWN JS
11. VENOBOX JS
12. PORTFOLIO JS
13. HOME ACCORDION JS
14. FAQ ACCORDION JS
15. SLICK SLIDER JS
16. WOW ANIMATION JS
*/

(function($) {
  'use strict';

  $(document).ready(function(){


      /* 1. PRELOADER JS */

          function fadeOut(el) {
              el.style.opacity = 0.4;
              var last;
              var tick = function() {
                  el.style.opacity = +el.style.opacity - (new Date() - last) / 600;
                  last = +new Date();
                  if (+el.style.opacity > 0) {
                      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 100);
                  } else {
                      el.style.display = "none";
                  }
              };
              tick();
          }
          var pagePreloaderId = document.getElementById("page-preloader");
          setTimeout(function() {
              fadeOut(pagePreloaderId)
          }, 1000);
   

          /* 2. JQUERY STICKY MENU */

          $(".sticky-menu").sticky({
              topSpacing: 0
          });


          /* 3. SCROLL MENU JS */

          $(window).on('scroll', function () {
              if ($(this).scrollTop() > 200) {
                  $('.mainmenu-area').addClass('menu-animation');
                  $('.topcontrol').addClass('topanimation');
              } else {
                  $('.mainmenu-area').removeClass('menu-animation');
                  $('.topcontrol').removeClass('topanimation');
              }
          });


          $('a.js-scroll-trigger').on('click', function(e) {
              var anchor = $(this);
              $('html, body').stop().animate({
                  scrollTop: $(anchor.attr('href')).offset().top - 48
              }, 1000);
              e.preventDefault();
          });
      

          /* 4. SECTIONS BACKGROUNDS */

          var pageSection = $("section,div");
          pageSection.each(function(indx) {

              if ($(this).attr("data-background")) {
                  $(this).css("background-image", "url(" + $(this).data("background") + ")");
              }
          });
      

          /* 5. ACTIVE BOOTSTRAP TOOLTIP */

          var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
          var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
          })


          /* 5. MOBILE MENU JS */

          $('.mainmenu-area nav.navbar').meanmenu({
              meanMenuContainer: '.mainmenu-area',
              meanScreenWidth: "991"
          });


          /* 6. HOME SLIDER JS */

          $('.home-slides').owlCarousel({
              loop: true,
              autoplay: false,
              autoplayTimeout: 4000,
              dots: true,
              items: 1,
              nav: true,
              navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
              responsiveClass:true,
              responsive:{
                  0:{
                      items:1,
                      nav:false
                  },
                  600:{
                      items:1,
                      nav:false
                  },
                  768:{
                      items:1,
                      nav:true
                  },
                  1000:{
                      items:1,
                      nav:true
                  }
              }
          });

          $('#home-slides-2').owlCarousel({
              loop: true,
              autoplay: false,
              autoplayTimeout: 4000,
              dots: true,
              items: 1,
              nav: true,
              navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
              responsiveClass:true,
              responsive:{
                  0:{
                      items:1,
                      nav:false
                  },
                  600:{
                      items:1,
                      nav:false
                  },
                  768:{
                      items:1,
                      nav:true
                  },
                  1000:{
                      items:1,
                      nav:true
                  }
              }
          });


          /* 7. TEAM SLIDER JS */

          $('.team-slider').owlCarousel({
              loop: true,
              margin: 30,
              autoplay: false,
              autoplayTimeout: 4000,
              navSpeed: 700,
              dotsSpeed: 700,
              dragEndSpeed: 1000,
              dots: true,
              responsiveClass:true,
              responsive:{
                  0:{
                      items:1
                  },
                  600:{
                      items:1
                  },
                  768:{
                      items:2
                  },
                  1000:{
                      items:3
                  }
              }
          });

              
          /* 8. TESTIMONIAL SLIDER JS */

          $('#testimonial-slider').owlCarousel({
              loop: true,
              margin: 30,
              autoplay: false,
              autoplayTimeout: 4000,
              navSpeed: 700,
              dotsSpeed: 700,
              dragEndSpeed: 1000,
              dots: true,
              responsiveClass:true,
              responsive:{
                  0:{
                      items:1
                  },
                  600:{
                      items:1
                  },
                  768:{
                      items:1
                  },
                  1000:{
                      items:2
                  }
              }
          });


          /* 9. CLIENT SLIDER JS */

          $('.client-slider').owlCarousel({
              margin: 30,
              loop: true,
              autoplay: true,
              autoplayTimeout: 4000,
              dragEndSpeed: 700,
              dots: false,
              nav: false,
              responsiveClass: true,
              responsive: {
                  0: {
                      items: 1
                  },
                  600: {
                      items: 2
                  },
                  768: {
                      items: 3
                  },
                  1000: {
                      items: 5
                  }
              }
          });


          $('#testimonial-slider-about').owlCarousel({
              loop: true,
              margin: 30,
              autoplay: false,
              autoplayTimeout: 4000,
              navSpeed: 700,
              dotsSpeed: 700,
              dragEndSpeed: 1000,
              dots: true,
              responsiveClass:true,
              responsive:{
                  0:{
                      items:1
                  },
                  600:{
                      items:1
                  },
                  768:{
                      items:1
                  },
                  1000:{
                      items:1
                  }
              }
          });

          /* 10. COUNTDOWN JS */

          $('.counter-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
              if (visible) {
                  $(this).find('.timer').each(function() {
                      var $this = $(this);
                      $({
                          Counter: 0
                      }).animate({
                          Counter: $this.text()
                      }, {
                          duration: 2000,
                          easing: 'swing',
                          step: function() {
                              $this.text(Math.ceil(this.Counter));
                          }
                      });
                  });
                  $(this).unbind('inview');
              }
          });
          /* END COUNTDOWN JS */


          /* 11. VENOBOX JS */

          $('.venobox').venobox({
              numeratio: true,
              titleattr: 'data-title',
              spinner: 'cube-grid',
              spinColor: '#fff'
          });


          /* 12. PORTFOLIO JS */

          $(".portfolio-filter-menu ul li").click(function () {
              $(".portfolio-filter-menu ul li").removeClass("active");
              $(this).addClass("active");
              var selector = $(this).attr("data-filter");
              $(".project-list").isotope({
                  filter: selector,
              });
          });

          $(".project-list").isotope();


          /* 13. HOME ACCORDION JS */

          $(".accordion-box").on('click', '.acc-btn', function () {
              var outerBox = $(this).parents('.accordion-box');
              var target = $(this).parents('.accordion');
              if ($(this).hasClass('active') !== true) {
                  $('.accordion .acc-btn').removeClass('active');
              }
              if ($(this).next('.acc-content').is(':visible')) {
                  return false;
              } else {
                  $(this).addClass('active');
                  $(outerBox).children('.accordion').removeClass('active-block');
                  $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                  target.addClass('active-block');
                  $(this).next('.acc-content').slideDown(300);
              }
          });


          /* 14. FAQ ACCORDION JS  */

          var selectIds = $('#collapse1,#collapse2,#collapse3,#collapse4,#collapse5,#collapse6,#collapse7,#collapse8');
          $(function($) {
              selectIds.on('show.bs.collapse hidden.bs.collapse', function() {
                  $(this).prev().find('.icofont').toggleClass('icofont-minus icofont-plus');
              })
          });


          /* 15. SLICK SLIDER JS  */
  
          // The slider being synced must be initialized first
          $('#carousel').flexslider({
              animation: "slide",
              controlNav: false,
              animationLoop: false,
              slideshow: false,
              itemWidth: 177,
              itemMargin: 28,
              asNavFor: '#slider',
              controlsContainer: $("#carousel"),
              customDirectionNav: $(".custom-navigation a")
          });

          $('#slider').flexslider({
              animation: "slide",
              controlNav: false,
              animationLoop: false,
              slideshow: false,
              sync: "#carousel",
              directionNav: false,
          });




});


      /* 16. WOW ANIMATION JS */

      new WOW().init();

      
    
})(jQuery);