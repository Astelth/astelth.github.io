import {AfterViewInit, Component} from '@angular/core';
import {SOCIETY_SLIDER_ITEMS} from '../constants';
import Swiper, {Navigation} from 'swiper';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.scss'],
})

export class SocietyComponent implements AfterViewInit {
  items = SOCIETY_SLIDER_ITEMS;
  slideIndex = 0;
  private swiper!: Swiper;
  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-container-society', {
      // Swiper options
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-next-slide-society',
        prevEl: '.swiper-prev-slide-society',
      },
    });

    this.swiper.on('slideChange', ({activeIndex}) => {
      this.slideIndex = activeIndex;
    });
  }
}
