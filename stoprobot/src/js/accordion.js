document.addEventListener('click', e => {
	if (e.target.classList.value.includes('product__accordion-title')) {
		e.target.closest('.product__accordion').classList.toggle('product__accordion_active')
	}
});
