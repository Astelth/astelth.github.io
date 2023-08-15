// 1.1
/*
var a = 5;
let b = 10;
const c = 13;
console.log(a, b, c);
a += 2;
b = 15 - 7;
//c = 18;
console.log(a, b, c);
*/

// 1.3
/*
let productName = "Honda Civic";
let productPrice = 2500000;
let productQuantity = 3;
let resultCost = productPrice * productQuantity;
console.log(
  `Вы купили ${productName} (${productQuantity} шт.) по ${productPrice} ₽. Всего было потрачено: ${resultCost} ₽`
);
*/

// 1.4
/*
console.log(typeof 'Hello');
console.log(typeof 10);
console.log(typeof {});
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof true);
console.log(typeof []);
console.log(typeof (() => {}));
*/

// 1.5
/*
console.log(10 == 10)
console.log(10 != 10)
console.log(12 == 'Привет')
console.log(10 < 11)
console.log(12 > 20)
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false || true)
console.log(true || false)
console.log(true || true)
console.log(10 <= 10)
console.log(18 <= 20)
console.log(50 >= 50)
console.log(51 >= 50)
console.log({} === {})
console.log({} == {})
const a = {};
const b = a;
console.log(a === b);
*/

// 1.6
/*
var a = 101;
let b = 13;
console.log(a > b);
*/

// 2.1
/*
var a = 13;
if (a % 2 === 0) {
console.log("Четное");
} else {
    console.log("Нечетное");
    a += 1;
    console.log(a);
}
*/

// 2.2
/*
function getEven () {
    let arr = []
    for (let i = 0;i<=1000;i++) {
        if (i % 2 === 1 || i % 12 === 0 && i != 0) {
            arr.push(i);
        }
    }
    console.log(arr.toString(', '))
}
getEven();
*/

// 2.3
let arr0 = [1, 10, 15, -100, -23, 19, 15032];
let arr1 = [];
for (let i = 0; i < arr0.length; i++) {
  arr1.push(arr0[i] * 1.25);
}
console.log(arr0.toString(", "));
console.log(arr1.toString(", "));

// 2.4
function sayHello(name) {
  if (typeof name == "string" && name.length > 0) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log(`Hello, someone!`);
  }
}

sayHello(5);
// 2.5
function calc(a, b, operation) {
  if (operation == "+") {
    return a + b;
  } else if (operation == "-") {
    return a - b;
  } else if (operation == "*") {
    return a * b;
  } else if (operation == ":" || operation == "/") {
    return a / b;
  }
}

console.log(calc(1, 2, "+")); // 3
console.log(calc(1, 2, "-")); // -1
console.log(calc(2, 2, "*")); // 4
console.log(calc(4, 2, "/")); // 2
// 2.6
let age = 24;
let category;
if (age < 18) {
  category = 'Детский'
} else {
  category = 'Взрослый'
}
console.log(age, category);
// 2.7
let a = 13;
let b = 18;
let c = Math.max(a, b);
console.log(c);