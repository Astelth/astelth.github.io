import {AfterViewInit, Component} from '@angular/core';
import {loadImage} from '../utils';
import {FIRST_SCENE_FRAMES_FOR_MOVEMENT, FIRST_SCENE_FRAMES_FOR_START} from '../constants';
import {Direction} from '../types';

@Component({
  selector: 'app-first-scene',
  templateUrl: './first-scene.component.html',
  styleUrls: ['./first-scene.component.scss']
})
export class FirstSceneComponent implements AfterViewInit {
  imagesForFirstAnimation = [] as HTMLImageElement[];
  imagesForMovementAnimation = [] as HTMLImageElement[];
  promises = [] as Promise<unknown>[];

  ngAfterViewInit() {
    // Сценарий запуска блоков анимаций, в зависимости от положения куба на экране и уже проигранных анимаций
    let canvas = document.getElementById('firstScene')! as HTMLCanvasElement;
    let ctx = canvas.getContext('2d')!;

    // для одинаковой отрисовки в разных браузерах
    let fpsInterval = 0;
    let startTime = 0;
    let now = 0;
    let then = 0;
    let elapsed = 0;

    const queue: (() => void)[] = []; // очередь анимаций
    let lastScene = 0;
    let firstSceneAnimated = false;
    let isAnimation = false;
    let direction = Direction.DOWN; // направление скролла
    let lastImage: HTMLImageElement | null = null; // последний отрисованный кадр анимации, необходимо для бездействия

    let lastScrollTop = 0;
    let imageCounter = 0;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (const [index, url] of FIRST_SCENE_FRAMES_FOR_START.entries()) {
      this.promises.push(loadImage(url, this.imagesForFirstAnimation, index));
    }

    for (const [index, url] of FIRST_SCENE_FRAMES_FOR_MOVEMENT.entries()) {
      this.promises.push(loadImage(url, this.imagesForMovementAnimation, index));
    }

    Promise.allSettled(this.promises).then(() => {
      const {scrollTop} = document.documentElement!;

      if (scrollTop > 0 && !firstSceneAnimated) {
        lastScene = 1;
        firstSceneAnimated = true;
        queue.push(() => drawImages(this.imagesForFirstAnimation, 0));
      }

      if (scrollTop >= 400) {
        lastScene = 2;
        queue.push(() => drawImages(this.imagesForMovementAnimation, 0));
      }

      const drawImages = (images: HTMLImageElement[], initial: number) => {
        imageCounter = isAnimation ? imageCounter : initial;
        isAnimation = true;

        initial === 0 ? ++imageCounter : --imageCounter;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw(images);
      }

      const draw = (images: HTMLImageElement[]) => {
        if (images[imageCounter] === undefined) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          lastImage && ctx.drawImage(lastImage, 0, 0, canvas.width, 900 * canvas.width / 1600);
          isAnimation = false;
          queue.shift();
          return;
        }

        lastImage = images[imageCounter];

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images[imageCounter], 0, 0, canvas.width, 900 * canvas.width / 1600);
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

      window.addEventListener('scroll', () => {
        const {scrollTop} = document.documentElement!;
        direction = lastScrollTop < scrollTop ? Direction.DOWN : Direction.UP;

        if (direction === Direction.DOWN) {
          if (scrollTop > 0 && !firstSceneAnimated && lastScene !== 1) {
            lastScene = 1;
            firstSceneAnimated = true;
            queue.push(() => drawImages(this.imagesForFirstAnimation, 0));
          }

          if (scrollTop > 300 && scrollTop < 400 && lastScene !== 2) {
            lastScene = 2;
            queue.push(() => drawImages(this.imagesForMovementAnimation, 0));
          }
        }

        if (direction === Direction.UP && scrollTop < 400 && lastScene === 2) {
          lastScene = 3;
          queue.push(() => drawImages(this.imagesForMovementAnimation, this.imagesForMovementAnimation.length - 1));
        }

        lastScrollTop = scrollTop;
      });

      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        lastImage && ctx.drawImage(lastImage, 0, 0, canvas.width, 900 * canvas.width / 1600);
      });
    });
  }
}
