function changeDeliveryType(wrapper) {
	const currentTarget = wrapper.target.closest('.js-delivery-type');

	if (currentTarget) {
		const contentList = wrapper.currentTarget.querySelectorAll('.checkout__delivery-content-item');

		contentList.forEach(el => {
			if (currentTarget.dataset.id === el.dataset.id) el.classList.add('checkout__delivery-content-item_active')
			else el.classList.remove('checkout__delivery-content-item_active');
		});
		wrapper.currentTarget.querySelectorAll('.js-delivery-type').forEach(el => {
			if (el === currentTarget) el.classList.add('checkout__delivery-header-item_active')
			else el.classList.remove('checkout__delivery-header-item_active');
		});
	}
}

document.querySelectorAll('.js-delivery').forEach(el => el.addEventListener('click', changeDeliveryType));
