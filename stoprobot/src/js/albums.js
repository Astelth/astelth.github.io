// ALBUMS FILTER SCRIPT
function selectBarViewType(element) {
	const value = element.currentTarget.value;
	const wrapper = document.querySelector('.albums');

	document.querySelectorAll('.album').forEach(el => {
		if (value === 'row') {
			wrapper.classList.add('albums_linear');
			wrapper.classList.remove('albums_mini');
			el.classList.add('album_linear');
			el.classList.remove('album_mini');
		} else if (value === 'grid3') {
			wrapper.classList.add('albums_mini');
			wrapper.classList.remove('albums_linear');
			el.classList.add('album_mini');
			el.classList.remove('album_linear');
		} else {
			wrapper.classList.remove('albums_linear');
			wrapper.classList.remove('albums_mini');
			el.classList.remove('album_mini');
			el.classList.remove('album_linear');
		}
	});
}

document.querySelectorAll('.js-setting-view-type')
	.forEach(el => el.addEventListener('click', el => selectBarViewType(el)));
