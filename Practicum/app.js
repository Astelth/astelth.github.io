let num = 42;
let firstName = "Vladilen";
const isProgrammer = true;

//isProgrammer = false

num = 10;
let num2 = num + 10;

console.log(isProgrammer, num * 3, num2, firstName);

const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
let action = "+";
plusBtn.onclick = function () {
  action = "+";
};
minusBtn.onclick = function () {
  action = "-";
};
// console.log(resultElement.textContent)
// resultElement.textContent = 42
submitBtn.onclick = function () {
  if (action == "+") {
    const sum = Number(input1.value) + Number(input2.value);
    resultElement.textContent = sum;
  } else if (action == "-") {
    const sum = Number(input1.value) - Number(input2.value);
    if (sum > 0) {
      resultElement.style.color = "green";
    } else {
      resultElement.style.color = "red";
    }
    resultElement.textContent = sum;
  }
  console.log(sum);
};
