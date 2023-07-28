/* Задание 1*/
const array = [
    {
        name: 'john', 
    age: 25, 
    pet: 'bazz'
},
    {
        name: 'ann', 
    age: 21, 
    pet: 'bizz'
},
]
function myName(personName) {
    console.log(`Меня зовут ${personName.name}, мне ${personName.age}, у меня есть питомец ${personName.pet}`)
}
myName(array[1])



/* Задание 2.
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