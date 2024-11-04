const swiper = new Swiper('.projects .content', {
  loop: true,
  spaceBetween: 30,
  loopFillGroupWithBlank: true, // Assicura che gli spazi siano gestiti correttamente
  pagination: {
      el: '.swiper-pagination',
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
  }
});
