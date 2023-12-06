var menu = document.querySelector('#menu'),
   menu_close = document.querySelector('.menu_close'),
   menu_icon = document.querySelector('#menu-icon'),
   header = document.querySelector('#header-content'),
   nav = document.querySelector('#nav');
nav_content = document.querySelector('#nav-content');

//___Navbar show and hide

menu_icon.onclick = () => {
   menu.classList.toggle('active');
};

menu_close.onclick = () => {
   menu.classList.toggle('active');
};


onscroll = () => {
   if (pageYOffset > 0) {
      nav.classList.add('fixed');
   }
   else if (pageYOffset === 0) {
      nav.classList.remove('fixed');
   }
};



/*
const swiper = new Swiper('.swiper', {
   speed: 500,
   loop: true,
   autoplay: {
      delay: 2000,
   },

   effect: 'coverflow',
   coverflowEffect: {
      depth: 300,
      rotate: 10,
      modifier: 1,
      slideShadows: false,
      scale: 1,
   },

   // // Responsive breakpoints
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 1,
         spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
         slidesPerView: 2,
         spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
         slidesPerView: 3,
         spaceBetween: 40
      }
   },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
   },
});

*/




// const swiper = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like
// swiper.slideNext();


/*
Coverflow Effect Parameters
depth
number
100
Depth offset in px (slides translate in Z axis)

modifier
number
1
Effect multiplier

rotate
number
50
Slide rotate in degrees

scale
number
1
Slide scale effect

slideShadows
boolean
true
Enables slides shadows

stretch
number
0
Stretch space between slides (in px)

*/
