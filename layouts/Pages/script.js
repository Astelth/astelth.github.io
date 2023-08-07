//https://www.figma.com/file/cm3CiZNfRx7OsFhvGl27Bp
document.addEventListener("DOMContentLoaded", () => {
  const scrollItems = document.querySelectorAll(".scroll");

  const scrollAnimation = () => {
    let windowCenter = window.innerHeight / 2 + window.scrollY;
    // console.log(windowCenter)
    scrollItems.forEach((el) => {
      //	let scrollOffset = el.offsetTop + (el.offsetHeight / 2); положение элемента по высоте + половина его собственной высоты
      let scrollOffset = el.offsetTop; //убрал половину высоты элемента
      //console.log(scrollOffset);
      if (windowCenter >= scrollOffset) {
        el.classList.add("animation");
      } else {
        el.classList.remove("animation");
      }
    });
  };

  scrollAnimation();
  window.addEventListener("scroll", () => {
    scrollAnimation();
  });
});
