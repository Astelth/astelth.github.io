import { AfterViewInit, Component} from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';
import {PRESS_RELEASE_SLIDER_ITEMS} from '../constants';

@Component({
  selector: 'app-pressrelease',
  templateUrl: './pressrelease.component.html',
  styleUrls: ['./pressrelease.component.scss']
})
export class PressreleaseComponent  implements AfterViewInit {
  items = PRESS_RELEASE_SLIDER_ITEMS;
  private swiper!: Swiper;
  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-container-press', {
      // Swiper options
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-next-slide-press',
        prevEl: '.swiper-prev-slide-press',
      },
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 1.2,
        },
        960: {
          slidesPerView: 'auto',
        },
      },
      centerInsufficientSlides: true,
      spaceBetween: 0,
      // slideClass: 'press__slider-slide',
      // slideActiveClass: 'press__slider-slide_active',
    });
  }
}
