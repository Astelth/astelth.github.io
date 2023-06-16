document.querySelectorAll('.js-select').forEach(el => el.addEventListener('click', evt => selectHandler(evt)));

function selectHandler(e) {
	const currentTarget = e.currentTarget;
	const currentNode = currentTarget.querySelector('.i-select__value');
	const currentList = currentTarget.querySelector('.i-select__list');

	currentList.classList.toggle('i-select__list_active');

	if (e.target.classList.value !== 'i-select__item') return;

	if (currentNode.innerText) {
		currentNode.innerHTML = '';
	}

	currentList.classList.remove('i-select__list_active');
	currentList.querySelectorAll('.i-select__item').forEach(el =>
		el.classList.remove('i-select__item_active'));
	e.target.classList.add('i-select__item_active');
	currentNode.appendChild(document.createTextNode(e.target.innerText));
}