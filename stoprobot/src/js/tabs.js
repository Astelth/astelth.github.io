const showTabContent = (e) => {
	const current = e.target;
	const currentId = current.dataset.tabid;
	const wrapper = current.closest('.i-tabs');
	const tabHeaders = wrapper.querySelectorAll('.i-tabs__header-title');
	const tabs = wrapper.querySelectorAll('.i-tabs__content-item');

	tabs.forEach(el => {
		if (el.dataset.tabid === currentId) {
			el.classList.add('i-tabs__content-item_visible')
		} else el.classList.remove('i-tabs__content-item_visible');
	});

	tabHeaders.forEach(el => {
		if (el.dataset.tabid === currentId) {
			el.classList.add('i-tabs__header-title_active')
		} else el.classList.remove('i-tabs__header-title_active');
	});
};

document.querySelectorAll('.js-tab-item').forEach(el => el.addEventListener('click', showTabContent));
