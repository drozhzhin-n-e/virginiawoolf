var gallerySwiper = new Swiper('#section-gallery .swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 400,
    modifier: 1,
    slideShadows : false,
  },
  preloadImages: false,
  lazy: true,
  keyboard: {
    enabled: true,
  },
});