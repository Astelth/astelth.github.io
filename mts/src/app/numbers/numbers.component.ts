import {AfterViewInit, Component} from '@angular/core';
import { NUMBERS_SLIDER_ITEMS } from '../constants';
import Swiper, {FreeMode, Navigation} from 'swiper';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements AfterViewInit {
  items = NUMBERS_SLIDER_ITEMS;

  delta = 0;
  contentWidth = 0;
  private swiper!: Swiper;
  private viewportElement!: HTMLElement;

  animate(elements: HTMLDivElement[]) {
    if (window.innerWidth < 960) return;

    elements.forEach((element, index) => {
      element.style.setProperty('--sliderNumbersTranslate', `${this.delta/10 + 90*index}px`);
    });
  }

  setContentHeight(elements: HTMLDivElement[]) {
    if (window.innerWidth >= 960) {
      this.contentWidth = 0;
      elements.forEach(element => this.contentWidth += (element as HTMLElement).offsetWidth);
      this.viewportElement.style.height = `${this.contentWidth + 400}px`;
    } else this.viewportElement.style.height = 'auto';
  }

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-container-numbers', {
      // Swiper options
      modules: [Navigation, FreeMode],
      mousewheel: true,
      freeMode: true,
      slidesPerView: 1.3,
      spaceBetween: 20,
      breakpoints: {
        375: {
          slidesPerView: 1.5,
        },
      },
    });

    // Parallax animation
    this.viewportElement = document.getElementById('numbersViewport')!;
    const contentItems = document.querySelectorAll('.numbers__item')! as unknown as HTMLDivElement[] || [];
    const listElement = document.getElementById('numbersList')!;

    window.addEventListener('load', () => this.setContentHeight(contentItems));

    window.addEventListener('resize', () => this.setContentHeight(contentItems));

    window.addEventListener('scroll', () => {
      let result = 0;
      let last = contentItems[contentItems.length - 1] as HTMLElement;
      this.delta = this.viewportElement.offsetTop - document.documentElement.scrollTop;

      if (this.viewportElement.offsetTop < document.documentElement.scrollTop) {
        result = this.delta;
      }

      if (last.offsetWidth - last.offsetLeft > this.delta) {
        result = last.offsetWidth - last.offsetLeft;
      }

      this.animate(contentItems);

      listElement.style.transform = `translateX(${result}px`;
    });
  }
}
