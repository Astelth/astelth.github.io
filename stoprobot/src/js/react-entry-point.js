import { createRoot } from 'react-dom/client';
import {Filter} from './filter';
import {SUGGESTS_STYLE, SUGGESTS_ARTIST, SUGGESTS_LABEL, SUGGESTS_FORMAT} from './constants';

const settings = document.getElementById('settings');

if (settings) {
	createRoot(settings.querySelector('.settings__filter')).render(
		<Filter initial={{
			recommendation: {
				name: 'рекомендации',
				checked: true,
			},
			rus: {
				name: 'rus',
				checked: false,
			},
			stock: {
				name: 'в наличии',
				checked: false,
			},
			artist: SUGGESTS_ARTIST,
			label: SUGGESTS_LABEL,
			format: SUGGESTS_FORMAT,
			style: SUGGESTS_STYLE,
		}} />
	);
}

function toggleAdditionalFilters(el) {
	el.target.classList.toggle('settings__toggle-filters_active');
	document.body.classList.toggle('filter-show');
	settings.classList.toggle('settings__additional_active');
}
function toggleAdditionalDesktopFilters(el) {
	el.target.classList.toggle('settings__toggle-filters_active');
	settings.classList.toggle('settings__additional_hidden');
}

document.querySelectorAll('.js-toggle-additional-filters').forEach(el =>
	el.addEventListener('click', toggleAdditionalFilters));
document.querySelectorAll('.js-toggle-additional-desktop-filters').forEach(el =>
	el.addEventListener('click', toggleAdditionalDesktopFilters));