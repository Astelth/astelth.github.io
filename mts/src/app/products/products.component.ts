import {AfterViewInit, Component, ViewEncapsulation} from '@angular/core';
import {
  PRIVATE_SLIDER_ITEMS,
  SECOND_SCENE_MOVE_1,
  SECOND_SCENE_MOVE_2,
  SECOND_SCENE_MOVE_3,
  SECOND_SCENE_MOVE_4,
  SECOND_SCENE_MOVE_5,
  SECOND_SCENE_MOVE_6,
  SECOND_SCENE_MOVE_7,
  SECOND_SCENE_MOVE_8,
  SECOND_SCENE_MOVE_9,
  SECOND_SCENE_MOVE_10,
  SECOND_SCENE_MOVE_11,
} from '../constants';
import {loadImage} from '../utils';
import Swiper, {Navigation, Pagination} from 'swiper';
import {Slide} from '../types';

const setTheme = (items: Slide[], index: number) => {
  document.body.style.setProperty('--product-text', items[index]?.theme?.['textColor'] || '#2f2f2f');
  document.body.style.setProperty('--product-title', items[index]?.theme?.['titleColor'] || '#ff002d');
  document.body.style.setProperty('--pagination-text', items[index]?.theme?.['paginationColor'] || '#2f2f2f');
}

const sceneMapFrames: Record<number, string[]> = {
  0: SECOND_SCENE_MOVE_1,
  1: SECOND_SCENE_MOVE_2,
  2: SECOND_SCENE_MOVE_3,
  3: SECOND_SCENE_MOVE_4,
  4: SECOND_SCENE_MOVE_5,
  5: SECOND_SCENE_MOVE_6,
  6: SECOND_SCENE_MOVE_7,
  7: SECOND_SCENE_MOVE_8,
  8: SECOND_SCENE_MOVE_9,
  9: SECOND_SCENE_MOVE_10,
  10: SECOND_SCENE_MOVE_11,
};

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent implements AfterViewInit {
  items = PRIVATE_SLIDER_ITEMS;
  private swiper!: Swiper;
  images = {} as Record<number, HTMLImageElement[]>;
  promises = [] as Promise<unknown>[];

  ngAfterViewInit() {
    let imageCounter = 0;
    let isAnimation = false;
    let lastImage: HTMLImageElement | null = null;
    const queue: (() => void)[] = []; // очередь анимаций

    // для одинаковой отрисовки в разных браузерах
    let fpsInterval = 0;
    let startTime = 0;
    let now = 0;
    let then = 0;
    let elapsed = 0;

    // Get the canvas element
    let canvas = document.getElementById('secondScene')! as HTMLCanvasElement;
    canvas.width = 600;
    canvas.height = 750;

    let ctx = canvas.getContext('2d')!;
    for (const [key, item] of Object.entries(sceneMapFrames)) {
      for (const [index, url] of item.entries()) {
        if (!this.images[Number(key)]) this.images[Number(key)] = [];
        this.promises.push(loadImage(url, this.images[Number(key)], index));
      }
    }

    Promise.allSettled(this.promises).then(() => {

      // отрисовываем дефолтное изображение
      ctx.drawImage(this.images[0]?.[0], 0, 0, 800, 900);

      this.swiper = new Swiper('.swiper-container-private', {
        // Swiper options
        modules: [Navigation, Pagination],
        pagination: {
          el: '.swiper-pagination-private',
          type: 'fraction',
          currentClass: 'products__pagination-current',
          totalClass: 'products__pagination-total',
          renderFraction: function (currentClass, totalClass) {
            return `<div class="products__pagination">
                    <span class="${currentClass}"></span><span class="${totalClass}"></span>
                  </div>`
          },
        },
        navigation: {
          nextEl: '.swiper-next-slide-private',
          prevEl: '.swiper-prev-slide-private',
        },
      });

      this.swiper.on('update', ({activeIndex}) => {
        setTheme(this.items, activeIndex);
      });

      this.swiper.on('slideChange', ({previousIndex, activeIndex, realIndex}) => {
        setTheme(this.items, activeIndex);

        if (previousIndex < activeIndex) {
          this.images[previousIndex] && queue.push(() => drawImages(this.images[previousIndex], 0));
        } else {
          this.images[activeIndex] && queue.push(() => drawImages(this.images[activeIndex],
            this.images[activeIndex].length - 1));
        }

      });
      const draw = (images: HTMLImageElement[]) => {
        if (images[imageCounter] === undefined) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          lastImage && ctx.drawImage(lastImage, 0, 0, 800, 900);
          isAnimation = false;
          queue.shift();
          return;
        }

        lastImage = images[imageCounter];

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images[imageCounter], 0, 0, 800, 900);
      }
      const drawImages = (images: HTMLImageElement[], initial: number) => {
        imageCounter = isAnimation ? imageCounter : initial;
        isAnimation = true;

        initial === 0 ? ++imageCounter : --imageCounter;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw(images);
      }

      const animate = () => {
        requestAnimationFrame(animate);

        now = performance.now();
        elapsed = now - then;

        if (elapsed > fpsInterval) {
          then = now - (elapsed % fpsInterval);
          if (queue.length) queue[0]();
        }
      }

      function startAnimating(fps: number) {
        fpsInterval = 1000 / fps;
        then = performance.now();
        startTime = then;
        animate();
      }

      startAnimating(60);
    });
  }
}

