// Задание 1

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
// Задание 16
