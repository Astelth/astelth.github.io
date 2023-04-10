import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';
import {REPORTS_SLIDER_ITEMS} from '../constants';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ReportsComponent implements AfterViewInit {
  items = REPORTS_SLIDER_ITEMS;
  private swiper!: Swiper;
  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-container-reports', {
      // Swiper options
      modules: [Navigation, Pagination],
      pagination: {
        el: '.swiper-pagination-reports',
        type: 'fraction',
        currentClass: 'reports__pagination-current',
        totalClass: 'reports__pagination-total',
        renderFraction: function (currentClass, totalClass) {
          return `<div class="reports__pagination">
                    <span class="${currentClass}"></span><span class="${totalClass}"></span>
                  </div>`
        },
      },
      slidesPerView: 'auto',
      spaceBetween: 8,
      breakpoints: {
        1280: {
          spaceBetween: 12,
        },
      },
    });
  }
}
