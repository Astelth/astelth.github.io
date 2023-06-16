// INPUT SECRET SCRIPT
const toggleSecretInput = (e) => {
	const wrapper = e.target.closest('.i-input');
	const input = wrapper.querySelector('input');
	const inputType = input.getAttribute('type');

	if (inputType === 'password') {
		wrapper.classList.add('i-input_secret_visible');
		input.setAttribute('type', 'text');
	} else {
		wrapper.classList.remove('i-input_secret_visible');
		input.setAttribute('type', 'password');
	}
};

document.querySelectorAll('.js-input-secret').forEach(el => el.addEventListener('click', toggleSecretInput));

// INPUT FILE SCRIPT
const changeInputFile = (e) => {
	const wrapper = e.target.closest('.i-input');
	let template = '';

	Array.from(e.target.files).forEach(file => {
			template += `<div class="i-input__file-list-item">
				<span class="i-input__file-list-name">${file.name}</span>
				<span class="i-input__file-list-item-size">
					${Math.trunc(file.size / 1024)}kb
				</span>
				<span onclick="this.closest('.i-input__file-list-item').remove();"
					class="i-input__file-list-remove"></span>
			</div>`
		}
	);

	wrapper.querySelector('.i-input__file-list').innerHTML = template;
};

document.querySelectorAll('.i-input__file').forEach(el => el.addEventListener('change', changeInputFile));
