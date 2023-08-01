import '../style.scss';

const burgerMenu = document.getElementById('burgerMenu');
const header = document.getElementById('header');
const searchInput = document.getElementById('headerSearchInput');
const searchItems = document.getElementById('headerSearchItems');

function burgerMenuToggle() {
	header.classList.toggle('header_active');
	document.body.classList.toggle('menu-show');
}

function showSearchInput() {
	searchInput.classList.add('header-bar__search-input_visible');
}

function hideSearchInput() {
	searchInput.classList.remove('header-bar__search-input_visible');
	searchInput.value = '';
	searchItems.classList.remove('header-bar__search-results_visible');
}

function searchInputType(e) {
	if (e.target.value.length > 1) {
		searchItems.classList.add('header-bar__search-results_visible');
	} else {
		searchItems.classList.remove('header-bar__search-results_visible');
	}
}

document.querySelectorAll('.js-search-icon').forEach(el => el.addEventListener('click', showSearchInput));
document.querySelectorAll('.js-close-icon').forEach(el => el.addEventListener('click', hideSearchInput));
burgerMenu.addEventListener('click', burgerMenuToggle);
searchInput.addEventListener('input', searchInputType);


// LAYOUT SCRIPT
const actions = document.querySelectorAll('[data-action]');
const sections = document.querySelectorAll('[data-section]');

function catalogListToggle() {
	const currentSection = this.dataset.action;

	sections.forEach(section => section.dataset.section === currentSection
		? section.classList.remove('catalog__list_hide')
		: section.classList.add('catalog__list_hide')
	)
}

actions.forEach(action => action.addEventListener('click', catalogListToggle));

function setBreadcrumbsHeight() {
	const height = document.documentElement.querySelector('.breadcrumbs')?.offsetHeight || 0;
	document.documentElement.style.setProperty('--breadcrumbs-height', `${height}px`)
}

document.addEventListener('DOMContentLoaded', setBreadcrumbsHeight);
window.addEventListener('resize', setBreadcrumbsHeight);

function onFooterInViewport([observer]) {
	const el = document.querySelector('.page__go-up');

	if (!el) return;

	if (observer.isIntersecting) el.classList.add('page__go-up_visible')
		else el.classList.remove('page__go-up_visible');
}

const observer = new IntersectionObserver(onFooterInViewport, { threshold: 0.1 });
observer.observe(document.querySelector('.page__footer'))
