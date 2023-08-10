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

const list = document.querySelector('#list')
const filter = document.querySelector('#filter')
let Todos = []

filter.addEventListener('input', (event) => {
  const value = event.target.value.toLowerCase()
  const filteredTodos = Todos.filter((todo) =>
    todo.title.toLowerCase().includes(value)
  )
  render(filteredTodos)
})

async function start() {
  list.innerHTML = 'Loading...'
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await resp.json()
    setTimeout(() => {
      Todos = data
      render(data)
    }, 2000)
  } catch (err) {
    list.style.color = 'red'
    list.innerHTML = err.message
  }
}

function render(Todos = []) {
  if (Todos.length === 0) {
    list.innerHTML = 'No matched Todos!'
  } else {
    const html = Todos.map(toHTML).join('')
    list.innerHTML = html
  }
}

function toHTML(todo) {
  return `
    <li class="list-group-item">${todo.title}</li>
  `
}

start()

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
    const x = setTimeout(a + b, delay);
    return x;
  }
  
  
  async function start3() {
    const result = await sumWithDelay(5000, 5, 5);
    console.log(result);
  }
  
  start3();