document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".home");
  const header = document.querySelector(".menu__wrapper");
  const scrollItems = document.querySelectorAll(".scroll");
  let root = document.documentElement;

  const scrollAnimation = () => {
    let windowCenter = window.innerHeight * 0.67 + window.scrollY;
    // console.log(windowCenter)
    scrollItems.forEach((el) => {
      el.style.setProperty("--start-X", Math.random() * 2000 - 1000 + "px");
      el.style.setProperty("--start-Y", Math.random() * 2000 - 1000 + "px");
      el.style.setProperty("--start-Z", Math.random() * 2000 - 1000 + "deg");
      let scrollOffset = el.offsetTop + el.offsetHeight * 0;
      //console.log(scrollOffset);
      if (windowCenter >= scrollOffset) {
        el.classList.add("animation");
      } else {
        el.classList.remove("animation");
      }
    });
  };

  const headerFixed = () => {
    let scrollTop = window.scrollY;
    let heroCenter = hero.offsetHeight / 2;

    if (scrollTop >= heroCenter) {
      header.classList.add("fixed");
      //	hero.style.marginTop = `${header.offsetHeight}px`; // убирает дерганье картинки при появлении меню
    } else {
      header.classList.remove("fixed");
      hero.style.marginTop = `0px`;
    }
  };

  headerFixed();
  scrollAnimation();
  window.addEventListener("scroll", () => {
    headerFixed();
    scrollAnimation();
  });
});


function openMobilMenu() {
  document.querySelector(".mobil").classList.toggle("mobil_active");
  document.querySelector(".menu__burger").classList.toggle("menu__burger_active");
}

    // блок .pre-animation
const options = {
    root: null,
    rootMargin: '0px 0px -45px 0px',
    threshold: 0
}
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const lazyAnima = entry.target;
            lazyAnima.classList.add('animated');
            observer.unobserve(lazyAnima);
        }
    })
}, options);
const arr = document.querySelectorAll('.pre-animation');
arr.forEach(el => {
    observer.observe(el);
});

var list = [
  " ",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "p",
  "n",
  "m",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "z",
  "x",
  "c",
  "v",
  "b",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "[",
  "]",
  "<",
  ">",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "(",
  ")",
  "-",
  "+",
  "=",
  "{",
  "}"
];

let currentPassword = document.querySelector("#generator");

function generation() {
  for (let i = 1; i < 100; i++) {
    var x = window.setTimeout(randomX(), 300);
  }
//  currentPassword.value = "Hello, world";
//  alert(randomX());
}

function randomX() {
  var y = list[Math.floor(Math.random() * 76) + 1];
  currentPassword.textContent = list[Math.floor(Math.random() * 76) + 1];
}
