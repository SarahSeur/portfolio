const horizontalSwiper = new Swiper(".card-swiper--horizontal", {
  slidesPerView: "auto",
  spaceBetween: 42,
  freeMode: true,
  grabCursor: true,
});

const verticalSwiper = new Swiper(".card-swiper--vertical", {
  direction: 'vertical',
  effect: "cards",
  initialSlide: 1,
  grabCursor: true,
  cardsEffect: {
    perSlideOffset: 20,
    perSlideRotate: 0,
  },
});