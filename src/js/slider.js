import Swiper from 'swiper/swiper-bundle.js'


const slider = document.querySelector('.brands__swiper');

let mySwiper;
let mySwiper2;
let mySwiper3;


function mobileSlider() {
  if (window.innerWidth < 767)  {
    mySwiper = new Swiper(slider, {

      slidesPerView: 'auto',
      spaceBetween: 16,
      wrapperClass: 'brands__swiper-wrapper',
      slideClass: 'brands__swiper-slide',
      pagination: {
        el: '.pagination', clickable: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 2,
        },

        720: {
          slidesPerView: 3,
        }
      }
    });

    mySwiper2 = new Swiper('.repair-types__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      wrapperClass: 'repair-types__swiper-wrapper',
      slideClass: 'repair-types__swiper-slide',
      pagination: {
        el: '.repair-types__pagination', clickable: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 2,
        },

        720: {
          slidesPerView: 3,
        }
      }
    });

    mySwiper3 = new Swiper('.price-list__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      wrapperClass: 'price-list__swiper-wrapper',
      slideClass: 'price-list__swiper-slide',
      pagination: {
        el: '.price-list__pagination', clickable: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 2,
        },

        720: {
          slidesPerView: 3,
        }
      }
    });


  }

  if (window.innerWidth > 767) {


    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }

  }
}

mobileSlider();


window.addEventListener('resize', () => {
  mobileSlider();
})
