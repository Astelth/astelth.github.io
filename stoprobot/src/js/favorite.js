import {createPopup} from './notification';

function addToFavorite(el) {
	if (!el.target.classList.value.includes('_active')) {
		el.target.classList.add('_active');
		createPopup('addToFavorite');
	} else {
		el.target.classList.remove('_active');
		createPopup('removeFromFavorite');
	}
}

document.querySelectorAll('.js-add-to-favorite').forEach(el => el.addEventListener('click', addToFavorite));
