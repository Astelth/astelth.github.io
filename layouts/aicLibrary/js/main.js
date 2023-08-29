const burger = document.querySelector('.burger');
function burgerClick() {
    document.querySelector('.burger').classList.toggle('burger_active');
    document.querySelector('.mobile').classList.toggle('mobile_active');
    document.querySelector('.top').classList.toggle('top_active');
}


// Инициализация слайдера изображений
const sliderImages = new Swiper('.slider__images .swiper-container', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'vertical', // вертикальная прокрутка
	slidesPerView: 1, // показывать по 1 изображению
	spaceBetween: 32, // расстояние между слайдами
	mousewheel: true, // можно прокручивать изображения колёсиком мыши
	navigation: { // задаем кнопки навигации
		nextEl: '.slider__next', // кнопка Next
		prevEl: '.slider__prev' // кнопка Prev
	},
	grabCursor: true, // менять иконку курсора
	thumbs: { // указываем на превью слайдер
		swiper: sliderThumbs // указываем имя превью слайдера
	},
	breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и выше
			direction: 'horizontal', // горизонтальная прокрутка
		},
		768: { // при 768px и выше
			direction: 'vertical', // вертикальная прокрутка
		}
	}
});
