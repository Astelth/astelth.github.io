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
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
let action = "+";
plusBtn.onclick = function () {
  action = "+";
};
minusBtn.onclick = function () {
  action = "-";
};
multiplyBtn.onclick = function () { action = '*' }
divideBtn.onclick = function () { action = ':' }
// console.log(resultElement.textContent)
// resultElement.textContent = 42

function printResult(result) {
  if (result > 0) {
    resultElement.style.color = "green";
  } else if (result == 0) {
    resultElement.style.color = "black";
  } else {
    resultElement.style.color = "red";
  }
  resultElement.textContent = result;
}

function computeNumbersWithAction(val1, val2, actionSymbol) {
  const inp1 = Number(val1.value)
  const inp2 = Number(val2.value)
  if (actionSymbol == "+") {
    return inp1 + inp2
  } else if (actionSymbol == "-") {
    return inp1 - inp2
  } else if (actionSymbol == "*") {
    return inp1 * inp2
  } else if (actionSymbol == ":") {
    return inp1 / inp2
  }
}

submitBtn.onclick = function () {
    printResult(computeNumbersWithAction(input1, input2, action))
}
