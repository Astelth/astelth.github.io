import {AfterViewInit, Component} from '@angular/core';
import {STRATEGY_SLIDER_ITEMS} from '../constants';
import Swiper, {Navigation} from 'swiper';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})

export class StrategyComponent implements AfterViewInit {
  items = STRATEGY_SLIDER_ITEMS;
  private swiper!: Swiper;
  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-container-strategy', {
      // Swiper options
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-next-slide-strategy',
        prevEl: '.swiper-prev-slide-strategy',
      },
    });
  }
}
