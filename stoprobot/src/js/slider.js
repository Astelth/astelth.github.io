// SLIDERS SCRIPT
new Swiper('[data-slider="moreFromAuthor"]', {
	speed: 800,
	spaceBetween: 8,
	slidesPerView: 2,
	slidesPerGroup: 2,
	loop: true,
	breakpoints: {
		768: {
			spaceBetween: 12,
			slidesPerView: 4,
			slidesPerGroup: 4,
		},
		1200: {
			spaceBetween: 28,
			slidesPerView: 5,
			slidesPerGroup: 5,
		},
	},
	navigation: {
		nextEl: '.slider__swiper-button-next_moreFromAuthor',
		prevEl: '.slider__swiper-button-prev_moreFromAuthor',
	},
	pagination: {
		el: '.slider__swiper-pagination',
		clickable: true,
	},
	on: {
		init: function () {
			const additionalNavigation = this.el.querySelector('.js-slider-additional-actions');
			this.el.parentNode.appendChild(additionalNavigation);
		},
	},
});
new Swiper('[data-slider="moreFromLabel"]', {
	speed: 800,
	spaceBetween: 8,
	slidesPerView: 2,
	slidesPerGroup: 2,
	loop: true,
	breakpoints: {
		768: {
			spaceBetween: 12,
			slidesPerView: 4,
			slidesPerGroup: 4,
		},
		1200: {
			spaceBetween: 28,
			slidesPerView: 5,
			slidesPerGroup: 5,
		},
	},
	navigation: {
		nextEl: '.slider__swiper-button-next_moreFromLabel',
		prevEl: '.slider__swiper-button-prev_moreFromLabel',
	},
	pagination: {
		el: '.slider__swiper-pagination',
		clickable: true,
	},
	on: {
		init: function () {
			const additionalNavigation = this.el.querySelector('.js-slider-additional-actions');
			this.el.parentNode.appendChild(additionalNavigation);
		},
	},
});

const thumbs = [
	'../assets/images/temp/9fff32d7811dcb8d30eaab9c50e4d3b91.png',
	'../assets/images/temp/2f46aad634acda508162b35fdbe3f7a6.jpg',
	'../assets/images/temp/19695860d33c37d8358d9e2cb38e8d861.jpg',
	'../assets/images/temp/b662ef09934a5c98ce3b930204f4c29b.jpg',
	'../assets/images/temp/b662ef09934a5c98ce3b930204f4c30c.jpg',
	'../assets/images/temp/b662ef09934a5c98ce3b930204f4c31d.jpg',
];

new Swiper('[data-slider="product"]', {
	spaceBetween: 10,
	effect: 'fade',
	breakpoints: {
		960: {
			pagination: {
				renderBullet: function (index, className) {
					return `<img class='${className} slider__swiper-bullet' src='${thumbs[index]}' alt='thumb-${index}' />`;
				},
			},
			effect: 'fade',
		},
	},
	pagination: {
		el: '.slider__swiper-pagination',
		clickable: true,
		bulletActiveClass: 'slider__swiper-bullet_active',
	},
});

new Swiper('[data-slider="about"]', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

new Swiper('[data-slider="mini"]', {
	navigation: {
		nextEl: '.album__arrow_right',
		prevEl: '.album__arrow_left',
	},
});

new Swiper('[data-slider="main"]', {});

const doubleSlider = new Swiper('[data-slider="double"]', {
	speed: 800,
	slidesPerView: 2,
	slidesPerGroup: 2,
	centeredSlides: false,
	slidesPerGroupSkip: 0,
	grabCursor: true,
	spaceBetween: 8,
	loop: true,
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		768: {
			spaceBetween: 16,
			slidesPerView: 4,
			slidesPerGroup: 4,
		},
		1200: {
			spaceBetween: 28,
			slidesPerView: 5,
			slidesPerGroup: 5,
		},
	},
	navigation: {
		nextEl: '.slider__swiper-button-next',
		prevEl: '.slider__swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	on: {
		init: function () {
			let max = 0;
			const imageHeight = this.slides[0]?.querySelector('.album__image').offsetHeight;
			this.slides.forEach((item) => {
				const {offsetHeight} = item.querySelector('.album__wrapper');
				max = offsetHeight > max ? offsetHeight : max;
			});
			this.el.style.setProperty('--album-height', `${max + imageHeight + 20}px`);

			const additionalNavigation = this.el.querySelector('.js-slider-additional-actions');
			this.el.parentNode.appendChild(additionalNavigation);
		},
		resize: function () {
			let max = 0;
			const imageHeight = this.slides[0]?.querySelector('.album__image').offsetHeight;
			this.slides.forEach((item) => {
				const {offsetHeight} = item.querySelector('.album__wrapper');
				max = offsetHeight > max ? offsetHeight : max;
			});
			this.el.style.setProperty('--album-height', `${max + imageHeight + 20}px`);
		},
	},
});
