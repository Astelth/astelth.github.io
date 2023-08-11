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

const list = document.querySelector("#list");
const filter = document.querySelector("#filter");
let Todos = [];

filter.addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase();
  const filteredTodos = Todos.filter((todo) =>
    todo.title.toLowerCase().includes(value)
  );
  render(filteredTodos);
});

async function start() {
  list.innerHTML = "Loading...";
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await resp.json();
    setTimeout(() => {
      Todos = data;
      render(data);
    }, 2000);
  } catch (err) {
    list.style.color = "red";
    list.innerHTML = err.message;
  }
}

function render(Todos = []) {
  if (Todos.length === 0) {
    list.innerHTML = "No matched Todos!";
  } else {
    const html = Todos.map(toHTML).join("");
    list.innerHTML = html;
  }
}

function toHTML(todo) {
  return `
    <li class="list-group-item">${todo.title}</li>
  `;
}

start();

/*
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

  */

// 10.3
function sumWithDelay(delay, a, b) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([a, b]);
    }, delay);
  });
  const x = promise.then((data) => {
    var x = 0;
    for (i of data) {
      x += i;
    }
    return x;
  });
  return x
}

//console.log(sumWithDelay(2000, 5, 5));

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
  // Ваш код здесь...
}

async function start4() {
  // ...
  const result = await fetchUser('001');
  console.log(result); // { id: '001', name: "Алексей", age: 25 }
  // ...
}

start4();