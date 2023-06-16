import {NOTIFICATION} from './constants';

const popupWrapper = document.querySelector('.js-popup-wrapper');
export const createPopup = (message) => {
	const closeElement = document.createElement('div');
	const el = document.createElement('div');

	closeElement.classList.add('i-notification__close');
	el.classList.add('i-notification');
	el.innerHTML = NOTIFICATION[message];
	el.appendChild(closeElement);
	popupWrapper.appendChild(el);

	closeElement.addEventListener('click', () => el.remove())

	setTimeout(() => el.remove(), 2000)
};

document.querySelectorAll('.js-call-popup').forEach(el => el.addEventListener('click', el => {
	const {dataset} = el.currentTarget;
	createPopup(dataset.message);
}));

const createSmallPopup = (el) => {
	const wrapper = document.createElement('div');

	wrapper.classList.add('i-notification');
	wrapper.classList.add('i-notification_small');
	wrapper.innerHTML = NOTIFICATION[el.currentTarget.dataset.message];
	el.currentTarget.appendChild(wrapper);
};
const removeSmallPopup = (el) => {
	const popup = el.currentTarget.querySelector('.i-notification');
	el.currentTarget.removeChild(popup);
};

document.querySelectorAll('.js-call-small-popup').forEach(el => el.addEventListener('mouseenter', createSmallPopup));
document.querySelectorAll('.js-call-small-popup').forEach(el => el.addEventListener('mouseleave', removeSmallPopup));
