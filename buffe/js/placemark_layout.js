ymaps.ready(function () {
	var map = new ymaps.Map('map', {
		center: [55.736882, 37.589268],
		zoom: 15,
	}, {
		suppressMapOpenBlock: true,
	});
	// Создадим макет метки.
	var animatedLayout = ymaps.templateLayoutFactory.createClass(
		'<div class="placemark"></div>',
	);
	map.geoObjects.add(new ymaps.Placemark([55.736882, 37.589268], {}, {
		iconLayout: animatedLayout,
		hasBalloon: false,
	}));
	map.controls
		.remove('zoomControl')
		.remove('routeButtonControl')
		.remove('trafficControl')
		.remove('typeSelector')
		.remove('rulerControl')
		.remove('searchControl')
		.remove('routeEditor');
});