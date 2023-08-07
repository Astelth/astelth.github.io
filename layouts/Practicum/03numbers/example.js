/* Задание 1

function isPrimeNumber(a) {
    var result = true
    if (a < 2) {
        result = false
    } else if (a < 4) {
        result = true
    } else {
        if (a % 2 === 0) {
            result = false
        } else {
            for (let i = 3; i <= Math.sqrt(a); i = i + 2) {
                if (a % i === 0) {
                    result = false
                    break
                }
            }
        }
    }
    console.log(result)
    return result
}

isPrimeNumber(3)

// Задание 2
function func(num, min, max) {
    var result
    if (num < min) {
        result = min ** 2
    } else if (num > max) {
        result = max ** 2
    } else if (num < max - (max - min) / 2) {
        result = num ** 2
    } else {
        result = Math.floor(num)
    }
    return result
}
console.log(func(3, 5, 2));
console.log(func(3, 1, 10));
console.log(func(15, 1, 10));
console.log(func(5, 1, 10));
console.log(func(8.5, 1, 10));

// Задание 3
function isPerfectNumber(number) {
    var result = false
    if (number < 6) {
        result = false
    } else if (number % 2 !== 0) {
        result = false
    } else {
        var sum = 3
        for (let i = 3; i <= (number / 2); i++) {
            if (number % i === 0) {
                sum += i
            }
        }
        sum === number ? result = true : result = false
    }
    return result
}
console.log(6, isPerfectNumber(6));
console.log(28, isPerfectNumber(28));
console.log(12, isPerfectNumber(12));
console.log(16, isPerfectNumber(16));
console.log(8128, isPerfectNumber(8128));
console.log(33550336, isPerfectNumber(33550336));

// Задание 4
function getNumberDigit(number, digitPosition) {
    const arr = number.toString().split('')
    //console.log(arr)
    var result = arr[digitPosition]
    return result
}
console.log(getNumberDigit(1, 2))
console.log(getNumberDigit(123, 0))
console.log(getNumberDigit(123, 1))
console.log(getNumberDigit(123, 2))
// Задание 11
const car = {
    name: 'Hendai Solaris',
    type: 'sedan',
    maxSpeed: '320',
    color: 'red',
}
const container = document.querySelector('.container')
const createButton = document.getElementById('car')

createButton.onclick = function () {
    getCar(car)
}

function getCar(a) {
      //  console.log(a)

        container.insertAdjacentHTML('beforeend', `<article>
        <div>
            <h2>${a.name}</h2>
            <span>${a.type}</span>
        </div>
        <div>
            <span>Maximum speed:</span>
            <span>${a.maxSpeed}</span>
        </div>
        <div>
            <span>Color:</span>
            <span style="color: ${a.color}">${a.color}</span>
        </div>
    </article>`
        )
    }

// Задание 12
const sentence = "Hello, how are you? What can i help you, brother? Sorry, you aren't brother for me, son of the bitch!";
console.log(countWords(sentence)); // 4

function countWords(a) {
  //  return a.split(' ')[a.split(' ').length - 1]
    return a.split(' ').length
}
// Задание 13
const fullName = "John what a hell are you doing Doe";
const initials = getInitials(fullName);
console.log(initials); // "J. D."
function getInitials (a) {
    var result = ''
    for (i in a.split(' ')) {
        result += a.split(' ')[i].split('')[0] + '. '
    }
    return result.trim().toUpperCase()
}
// Задание 14
console.log(generateGoogleString(5));
// Goooogle

console.log(generateGoogleString(1));
// Google

console.log(generateGoogleString(-2));
// Google
function generateGoogleString(a) {
    var q = 'oo'
    for (let i = 3;i <= a; i++) {
        q += 'o'
    }
    return 'G' + q + 'gle'
}
// Задание 15
const str = "HelloU, ПрИвет!";
console.log(countVowels(str)); // 4
function countVowels (a) {
    const arr = a.split('');
    var result = 0
    const vowels = ['a', 'e', 'y', 'i', 'o', 'u', 'у', 'е', 'э', 'о', 'а', 'ы', 'я', 'и', 'ю']
    for (i in arr) {
        for (v in vowels) {
            arr[i].toLowerCase() === vowels[v] ? result += 1 : result = result
        }
    }
    return result
}
*/
/* Задание 21
const result1 = sumNumbers(1, 2, 3, 4, 5);
console.log(result1); // 15

const result2 = sumNumbers(10, 20, 30, 1, 2, 3, 4, 5, 7, 8, 3, 2, 5);
console.log(result2); // 60
function sumNumbers(...nums) {
    return nums.reduce((acc2, cur3) => (acc2 += cur3), 0)
}
// Задание 22 
/*
const numbers1 = [1, 2, 3, 4, 5];
const max1 = findMaxValue(numbers1);
console.log(max1); // 5

const numbers2 = [10, 20, 5, 30, 15];
const max2 = findMaxValue(numbers2);
console.log(max2); // 30

const emptyArray = [];
const maxEmpty = findMaxValue(emptyArray);
console.log(maxEmpty); // undefined

function findMaxValue (a) {
    return a.reduce((accumulator, current) => accumulator > current ? accumulator : current, undefined)
}
*/
/* Задание 23
const numbers1 = [1, 2, 3, 4, 5];
console.log(calculateAverage(numbers1)); // 3

const numbers2 = [10, 20, 30, 40, 50];
console.log(calculateAverage(numbers2)); // 30

const emptyArray = [];
console.log(calculateAverage(emptyArray)); // 0
function calculateAverage(a) {
    let sum = 0
    for (i of a) {
        sum += i
    }
    return a.length > 0 ? sum / a.length : 0
}
// Задание 24
console.log(isPalindrome('level')); // true
console.log(isPalindrome('radar')); // true
console.log(isPalindrome('hellolleh')); // false
function isPalindrome(a) {
    return a === a.split('').reverse().join('')
}
// Задание 25
const numbers3 = [1, 2, 3, 3, 4, 5, 5];
console.log(removeDuplicates(numbers3));  // [1, 2, 3, 4, 5]

const numbers4 = [10, 20, 30, 30, 40, 40, 50, 30, 40, 50, 30, 40, 50, 30, 40, 50, 30, 40, 50, 30, 40, 50, 30, 40, 50, 30, 40, 50, 30, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 60];
console.log(removeDuplicates(numbers4));  // [10, 20, 30, 40, 50]

const emptyArray1 = [];
console.log(removeDuplicates(emptyArray1));  // []
function removeDuplicates(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === null) {
            continue
        } else {
            for (let j = i + 1; j < a.length; j++) {
                if (a[i] === a[j]) {
                    a.splice(j, 1)
                    j = j - 1
                }
            }
        }
    }
    return a
}
// Задание 26
function createCounter(value) {
    const inc = () => value++;
    const dec = () => value--;
    const get = () => value;
  
    return { inc, dec, get };
  }
  
  const { inc, dec, get } = createCounter(7);
  console.log(get()); // 5
  inc();
  inc();
  inc();
  dec();
  console.log(get());
  console.log(createCounter(7));
  */


//Задание 8.1 
/*
const birthDate = new Date('1975-08-17');
const age = calculateAge(birthDate);

function calculateAge(a) {
  const x = (Date.now() - a) / 365.25 / 24 / 60 / 60 / 1000
  const xy = Math.floor(x)
  const xm = (Math.floor((x - xy) * 12))
  const xd = Math.floor((x - xy) * 365.25 - xm * 30.4375)
  return xy + ' лет, ' + xm + ' месяцев, ' + xd + ' дней'
}
console.log(age);

// 8.2
const date1 = new Date('2023-08-06');
const date2 = new Date('2023-08-17');
const difference = getDateDifference(date1, date2);
console.log(difference); // 9
function getDateDifference (a, b) {
  return Math.floor((b - a) / 1000 / 24 / 60 / 60)
}


// 8.3

const targetDate = new Date('2027-12-31T23:59:59');
const timeUntilTargetDate = getTimeUntilDate(targetDate);
console.log(timeUntilTargetDate);
// { days: 100, hours: 20, minutes: 45, seconds: 31 }

function getTimeUntilDate (a) {
  const x = new Object
  x.days = Math.floor((a - Date.now()) / 1000 / 24 / 60 / 60)
  var q = (a - Date.now()) / 1000 / 24 / 60 / 60
  x.hours = Math.floor((q - x.days) * 24)
  q = (q - x.days) * 24
  x.minutes = Math.floor((q - x.hours) * 60)
  q = ((q - x.hours) * 60)
  x.seconds = Math.floor((q - x.minutes) * 60)
  q = ((q - x.minutes) * 60)
  return x
}

// 8.4
const date1 = new Date('2027-07-10');  // Суббота
const date2 = new Date('2027-07-12');  // Понедельник

console.log(isWeekend(date1));  // true
console.log(isWeekend(date2));  // false
function isWeekend (a) {
  return a.getDay() === 0 || a.getDay() === 6
}

// 8.5
console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2104)); // true
function isLeapYear (a) {
  if (a % 400 === 0) {
      return true
  } else if (a % 100 === 0) {
      return false
  } else if (a % 4 === 0) {
      return true
  } else {
      return false
  }
}

// 8.6
// июнь 2027
console.log(getLastDayOfMonth(2027, 5)); // 30

// февраль 2027
console.log(getLastDayOfMonth(2104, 1)); // 28

// январь 2027
console.log(getLastDayOfMonth(2027, 0)); // 31
function getLastDayOfMonth(y, m) {
  if (isLeapYear(y) === true && m === 1) {
      return 29
  } else if (m === 1) {
      return 28
  } else if (m === 1 || m === 3 || m === 5 || m === 8 || m === 10) {
      return 30
  } else {
      return 31
  }
}
*/


// 9.1
//
//
//console.log(circle.name);


class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return (this.radius ** 2 * Math.PI).toFixed(2)
    }
}
const circle = new Circle(7);
console.log(circle.getArea()); // "78.54"


// 9.2
class Product {
    constructor (name, price) {
        this.name = name
        this.price = price
    }
    priceWithDiscout() {
      //  return (price * (100 - d) / 100).toFixed(2)
        return price
    }
}
const product = new Product("Phone", 1000);
console.log(product.name); // 900
console.log(product.priceWithDiscount(10)); // 900
console.log(product.priceWithDiscount(20)); // 800