// 10.1
/*
console.log('a');
new Promise((resolve, reject) => {
    console.log('b');
    setTimeout(() => {
        console.log('c');
        resolve();
    }, 0);
})
  .then(() => console.log('d'));

console.log('e');
setTimeout(() => console.log('f'), 0);
console.log('g');
*/

// 10.2
const url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url)
  .then(response => response.json())
  .then(tasks => {
    const ul = document.createElement('ul');
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task.title;
      ul.appendChild(li);
    });
    document.body.appendChild(ul);
  })
  .catch(error => console.error(error));

// 10.3
function sumWithDelay(delay, a, b) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(a + b);
      }, delay);
    });
  }

async function start3() {
    const result = await sumWithDelay(2000, 5, 5);
    console.log(result);
}

start3();


// 10.4
const USERS = [
    { id: '001', name: "Алексей", age: 25 },
    { id: '002', name: "Иван", age: 28 },
    { id: '003', name: "Егор", age: 30 },
];

function fetchUser(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = USERS.find(user => user.id === id);
        if (user) {
          resolve(user);
        } else {
          reject(new Error('Пользователь не найден'));
        }
      }, 2500);
    });
  }

async function start4() {
        // ...
    const result = await fetchUser('002');
    console.log(result); // { id: '001', name: "Алексей", age: 25 }
        }
        // ...

start4();