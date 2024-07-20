import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

new Swiper('.slider-juri', {
  modules: [Navigation],
  loop: true,
  navigation: {
    nextEl: '.juri__button--next',
    prevEl: '.juri__button--prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 35,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
      simulateTouch: false,
    },
  },
});

new Swiper('.slider-reviews', {
  modules: [Navigation],
  loop: false,
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  slidesPerView: 1,
  spaceBetween: 80,

  breakpoints: {
    768: {
      simulateTouch: false,
    },
  },
});
