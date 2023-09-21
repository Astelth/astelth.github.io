var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".preview__swiper-button-next",
      prevEl: ".preview__swiper-button-prev",
    },
    pagination: {
      el: ".preview__swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });