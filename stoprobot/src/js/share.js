function showShareButtons(e) {
	e.target.closest('.product__share').classList.toggle('product__share_active');
}

document.querySelectorAll('.js-show-share-buttons').forEach(el => (
	el.addEventListener('click', showShareButtons)
));
