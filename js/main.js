// Initialize AOS (scroll animations)
AOS.init({
  duration: 900,
  once: true,
  easing: 'ease-in-out'
});

// Initialize Swiper (services slider)
const serviceSwiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
