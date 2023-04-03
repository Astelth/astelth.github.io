const header = document.querySelector('.header');
const goBack = document.querySelector('.header__go-back');

function openMenu() {
    header.classList.toggle('header_visible');
}

var t;

function up() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

function toggleGoUpButton() {
    goBack.classList.toggle('header__go-back_active', document.documentElement.scrollTop > 50);
}

window.addEventListener('load', toggleGoUpButton);
window.addEventListener('scroll', toggleGoUpButton);

// Блок анимации при скролле
    // устанавливаем настройки
    const options = {
        // родитель целевого элемента - область просмотра
        root: null,
        // отступ
        rootMargin: '0px 0px -45px 0px',
        // процент пересечения - полностью
        threshold: 1
    }
    // создаем наблюдатель
    const observer = new IntersectionObserver((entries, observer) => {
        // для каждой записи-целевого элемента
        entries.forEach(entry => {
            // если элемент является наблюдаемым
            if (entry.isIntersecting) {
                const lazyAnima = entry.target;
                // выводим информацию в консоль - проверка работоспособности наблюдателя
                // console.log(lazyAnima);
                // меняем фон контейнера
                lazyAnima.classList.add('animated');
                // прекращаем наблюдение
                observer.unobserve(lazyAnima);
            }
        })
    }, options);
    // с помощью цикла следим за всеми .pre-animation-state на странице
    const arr = document.querySelectorAll('.pre-animation-state');
    arr.forEach(el => {
        observer.observe(el);
    });
