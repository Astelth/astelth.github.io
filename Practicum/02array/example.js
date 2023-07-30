
//const names = new Array('Артём', 'Ольга', 'Анатолий', 'Нина', 'Марина')


/* Задание 1
//1.
const john = {name:'john', age:25, pet:'bazz'}
const ann = {name:'ann', age:21, pet:'blizz'}

//2.
function myName(personName) {
    console.log(`Меня зовут ${personName.name}, мне ${personName.age}, у меня есть питомец ${personName.pet}`)
}
myName(john)

//3.
function incrementAge(personName) {
    console.log('Возраст', personName.name, ':', personName.age)
    personName.age += 1
    console.log('Новый возраст', personName.name, ':', personName.age)
    return personName.age
}
incrementAge(john)

//4.
function getProperties (qw) {
    var result = ''
    for (const [key, value] of Object.entries(qw)) {
        result += `${key}: ${value}\n`
      }
    console.log(result)
    return result
}
getProperties(ann)

/*

function myName(personName) {
    console.log(`Меня зовут ${personName.name}, мне ${personName.age}, у меня есть питомец ${personName.pet}`)
}
myName(array[1])
incrementAge(array[0])
function incrementAge(personName) {
    console.log('Возраст', personName.name, ':', personName.age)
    personName.age += 1
    console.log('Новый возраст', personName.name, ':', personName.age)
    return personName.age
}

/*
function objectProperties (personName) {
    const personIndex = array.indexOf(personName)
    console.log(array[personIndex].propertyName)
}

objectProperties('john')


function listAllProperties(o) {
    var objectToInspect = o;
    var result = '';

    /*
    for (var prop in o) {
        // console.log("obj." + prop + " = " + obj[prop]);
        for (var p in prop) {
            result += p + ' = ' + prop[p] + '\n'
        }
    }
    

    //console.log(objectToInspect.name)
    console.log(o)
    return result;
}
listAllProperties(array[0])

function showProps(obj, objName) {
    var result = '';
    
    for (var i in obj) {
        // if (obj.hasOwnProperty(i)) {
        result += objName + "." + i + " = " + obj[i] + "\n";
        // }
    }
    
    console.log(result)
    return result;
}
showProps(array, array[0])

*/

/*
// Задание 2.
function sum(array) {
    let sumArray = 0
    for (let i=0; i<array.length; i++) {
        sumArray = sumArray + array[i]
        //console.log(sumArray)
    }
    return sumArray
}
const arr = [1, 50,20,75,90]
console.log(sum(arr));
console.log(arr)
*/

/* Задание 3 
const names = new Array()
names.push('Артём')
names.push('Ольга')
names.push('Анатолий')
names.push('Нина')
names.push('Ирина')
console.log(names)
names.shift()
names.pop()
console.log(names)
*/

/* Задание 4
//const names = ['Eva', 'Dilan', 'Channing', 'Bob', 'April']
const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Victoriya']
console.log(names)
const container = document.querySelector('.container')
const createListButton = document.getElementById('createList')
createListButton.onclick = function () {
    container.insertAdjacentHTML('beforeend', `<div class='names'>Имена:<ul class='names__list'></ul></div>`)
    const namesList = document.querySelector('.names__list')
    for (let name in names) {
        namesList.insertAdjacentHTML('beforeend', `<li class='names__item'>${names[name]}</li>`)
    }
}
*/


/* Задание 5 */

const obj = {age: 22, favColor: 'red', height: 188, pet: 'dog', money: 12300}
let {age, favColor, height, pet, money} = obj
console.log(age, favColor, height, pet, money)

/* Задание 6 

const obj = {age: 22, favColor: 'red', height: 188, pet: 'dog', money: 12300}
const updateObj = {age: 23, favColor: 'blue', money: 11450}
const obj2 = {}
    for (const [key, value] of Object.entries(obj)) {
        obj2[key] = ''
      }
    for (const [key, value] of Object.entries(updateObj)) {
        obj2[key] = value
      }
    console.log(obj2)

*/