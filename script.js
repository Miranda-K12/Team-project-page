const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: false,
  simulateTouch: false,
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  simulateTouch: false,
  allowSlideClick: false,
  breakpoints: {
    1440: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
  },
});
