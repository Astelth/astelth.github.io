export const NOTIFICATION = {
	addToCart: `
		<span class="i-notification__icon i-notification__icon_color_accent icon-check"></span>
		<span class="i-notification__text">
			Товар добавлен в вашу <a class="i-link i-link_color_accent" href="#">Корзину</a>.
		</span>
	`,
	signIn: `
		<span class="i-notification__text">
			Чтобы добавить товар в избранное – <a class="i-link i-link_color_accent" href="#">войдите в аккаунт</a>.
		</span>
	`,
	addToFavorite: `
		<span class="i-notification__text">
			Товар добавлен в <a class="i-link i-link_color_accent" href="#">Избранное</a>.
		</span>
	`,
	removeFromFavorite: `
		<span class="i-notification__text">
			Товар удален из <a class="i-link i-link_color_accent" href="#">Избранного</a>.
		</span>
	`,
	removeOutOfStockItem: `
		<span class="i-notification__text">
			Удалите из <a class="i-link i-link_color_accent" href="#">Корзины</a> закончившиеся товары.
		</span>
	`,
	noMoreItems: `
		<span class="i-notification__icon i-notification__icon_color_red icon-close"></span>
		<span class="i-notification__text">
			Количество этого товара в вашей корзине не может быть изменено. Товар недоступен в большем количестве.
		</span>
	`,
	applied: 'Применен',
};

export const SUGGESTS_LABEL = [
	{name: '2 Soul Records', checked: false},
	{name: '2 Tone', checked: false},
];
export const SUGGESTS_FORMAT = [
	{name: 'LP', checked: false},
	{name: '2LP', checked: true},
	{name: '4AD', checked: true},
	{name: '100% Electronica', checked: false},
	{name: '88rising', checked: false},
	{name: 'A Band Apart', checked: false},
	{name: 'A&M Records', checked: false},
	{name: 'Akashik Records', checked: false},
	{name: 'Animal63', checked: false},
	{name: 'Anti', checked: false},
	{name: 'Anti-Ghost Moon Ray Records', checked: false},
	{name: 'Apple', checked: false},
	{name: 'Arctic Poppy', checked: false},
	{name: 'Arista', checked: false},
	{name: 'Artistry Music', checked: false},
	{name: 'Astralwerks', checked: true},
	{name: 'Asylum Records', checked: true},
	{name: 'Atlantic', checked: true},
	{name: 'Atlantic Records', checked: true},
	{name: 'Atlantic Records UK', checked: true},
	{name: 'AWAL', checked: true},
];
export const SUGGESTS_ARTIST = [
	{name: 'Agnes Obel', checked: false},
	{name: 'Amy Winehouse', checked: false},
	{name: 'Beenie man', checked: false},
	{name: 'Bob Marley & The Wailers', checked: false},
	{name: 'Bounty Killer', checked: false},
	{name: 'Damian Marley', checked: false},
	{name: 'Dj Khaled', checked: false},
	{name: 'Dj Vadim', checked: false},
	{name: 'Frank Sinatra', checked: false},
	{name: 'Frank Zappa', checked: false},
	{name: 'Franz Ferdinand', checked: false},
	{name: 'Freddie Mercury', checked: false},
	{name: 'Freddie Mercury & Montserrat Caballe', checked: false},
	{name: 'Garbage', checked: false},
	{name: 'Gazelle Twin', checked: false},
	{name: 'George Michael', checked: false},
	{name: 'Girl In Red', checked: false},
	{name: 'Glass Animals', checked: false},
	{name: 'Glass Animals, Denzel Curry', checked: false},
	{name: 'Goldfrapp', checked: false},
	{name: 'Gorillaz', checked: false},
	{name: 'Grey October Sound', checked: false},
	{name: 'Grimes', checked: false},
	{name: 'Groove Armada', checked: false},
	{name: 'Grouplove', checked: false},
	{name: 'Gym Class Heroes', checked: false},
	{name: 'Halsey', checked: false},
	{name: 'Hannah Diamond', checked: false},
	{name: 'Harry Styles', checked: false},
	{name: 'Hayley Williams', checked: false},
	{name: 'Hikaru Utada', checked: false},
	{name: 'Honne', checked: false},
	{name: 'Hot Chip', checked: false},
	{name: 'Hozier', checked: false},
];
export const SUGGESTS_STYLE = [
	{name: 'Aboriginal', checked: false},
	{name: 'Abstract', checked: false},
	{name: 'Acid', checked: true},
	{name: 'Acid House', checked: true},
	{name: 'Acid Jazz', checked: false},
	{name: 'Acid Rock', checked: false},
	{name: 'Acoustic', checked: false},
	{name: 'Boom Bap', checked: false},
	{name: 'Bossa nova', checked: false},
	{name: 'Breakbeat', checked: false},
	{name: 'Breaks', checked: false},
	{name: 'Brit Pop', checked: false},
	{name: 'Broken Beat', checked: false},
	{name: 'Country Rock', checked: false},
	{name: 'Crust', checked: false},
	{name: 'Cumbia', checked: false},
	{name: 'Cut-Up/DJ', checked: false},
	{name: 'Dance-pop', checked: false},
	{name: 'Dancehall', checked: false},
	{name: 'Electroclash', checked: false},
	{name: 'Emo', checked: false},
	{name: 'Ethereal', checked: false},
	{name: 'Euro-Disco', checked: false},
	{name: 'Eurodance', checked: false},
	{name: 'Europop', checked: false},
	{name: 'Experimental', checked: false},
	{name: 'Field Recording', checked: false},
	{name: 'Folk', checked: false},
	{name: 'Folk Rock', checked: false},
	{name: 'Funk', checked: false},
	{name: 'Funk Metal', checked: false},
	{name: 'Fusion', checked: false},
	{name: 'Future Jazz', checked: false},
	{name: 'Gangsta', checked: false},
	{name: 'Garage Rock', checked: false},
	{name: 'Glam', checked: false},
	{name: 'Glitch', checked: false},
	{name: 'Goth Rock', checked: false},
	{name: 'Gothic Metal', checked: false},
	{name: 'Grindcore', checked: false},
	{name: 'Groove Metal', checked: false},
	{name: 'Grunge', checked: false},
	{name: 'Hard Rock', checked: false},
	{name: 'Hardcore', checked: false},
	{name: 'Hardcore Hip-Hop', checked: false},
];

export const Categories = {
	artist: 'исполнитель',
	label: 'лейбл',
	format: 'формат',
	style: 'стиль',
}