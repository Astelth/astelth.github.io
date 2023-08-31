const burger = document.querySelector('.burger');
function burgerClick() {
    document.querySelector('.burger').classList.toggle('burger_active');
    document.querySelector('.mobile').classList.toggle('mobile_active');
    document.querySelector('.top').classList.toggle('top_active');
}
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });