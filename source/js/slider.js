import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';

const slider = new Swiper('.slider-juri', {
  modules: [Navigation, Pagination],
  loop: true,
  navigation: {
      nextEl: '.juri__button--next',
      prevEl: '.juri__button--prev',
  },

  breakpoints: {
    320: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 40,
    },
    1366: {
        slidesPerView: 4,
        spaceBetween: 40,
    },
},
});
