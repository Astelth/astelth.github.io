let al = document.querySelectorAll(".aesthetics__line");
let an = document.querySelectorAll(".aesthetics__number");
let at = document.querySelectorAll(".aesthetics__text");
let newln = document.querySelectorAll('.news__line');
let whyc = document.querySelectorAll('.why__case');

let x;

function changeWhy(x) {
  for (let i = 0; i < 3; i++) {
    if (i == x) {
      newln[i].style.background = "#00868A";
      whyc[i].style.display = "block";
    } else {
      newln[i].style.background = "#4FBFA5";
      whyc[i].style.display = "none";
    }
  }
}
function mouseCome(x) {
  an[x].style.position="absolute";
  an[x].style.fontSize="72px";
  an[x].style.color="#00868A";
  an[x].style.lineHeight="90%";
  at[x].style.position="absolute";
  at[x].style.fontSize="24px";
  at[x].style.left="90px";
  al[x].style.opacity="1";
}
function mouseLeft(x) {
  an[x].style.position="static";
  an[x].style.fontSize="48px";
  an[x].style.color="#000000";
  an[x].style.lineHeight="150%";
  at[x].style.position="static";
  at[x].style.fontSize="14px";
  al[x].style.opacity="0.5";
}