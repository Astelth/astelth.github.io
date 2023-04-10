import { AfterViewInit, Component } from '@angular/core';
import {MENU_BAR_ITEMS, MENU_ITEMS} from '../constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {
  showMenu = false;
  hideMenu = false;
  lastScrollTop = 0;
  customMenuStyle = '';
  items = MENU_ITEMS;
  menuBarItems = MENU_BAR_ITEMS;
  onShowMenu(state: boolean) {
    if (state) {
      // чтобы контент не скакал из-за отсутствуещего скроллбара
      const widthWidth = window.innerWidth;
      const scrollWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth,
      );
      this.customMenuStyle = `-${(widthWidth - scrollWidth) / 2}px`;
    } else {
      this.customMenuStyle = '0';
    }

    document.body.classList.toggle('showMenu', state);
  }
  onClickMenuBarItem(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;

    if (el.dataset?.['anchor']) {
      document.querySelector(`[data-section='${el.dataset?.['anchor']}']`)?.scrollIntoView({behavior: 'smooth'});
    }
  }

  onClickMenuItem(e: MouseEvent) {
    const currentElement = e.currentTarget as HTMLElement;
    const elements = document.querySelectorAll('.menu__item') || [];

    elements.forEach(element => element.classList.remove('menu__item_active'));
    currentElement.classList.add('menu__item_active');
  }
  ngAfterViewInit() {
    const sections = document.querySelectorAll('[data-section]');
    const links = document.querySelectorAll('.menu-bar__item') as NodeListOf<HTMLElement>;
    const viewport = document.querySelector('.menu-bar__list') as HTMLElement;
    const last = links[links.length - 1];
    let activeLink = links[0];

    const cb = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const activeId = entry.target.getAttribute('data-section');

          links.forEach((link) => {
            if (link.getAttribute('data-anchor') === activeId) {
              activeLink = link;
              activeLink.classList.add('menu-bar__item_selected');
            } else {
              link.classList.remove('menu-bar__item_selected');
            }
          });

          if (activeLink.offsetLeft < viewport.offsetWidth - viewport.offsetLeft) {
            viewport.style.transform = `translateX(-${activeLink.offsetLeft}px)`;
          } else {
            viewport.style.transform = `translateX(-${last.offsetLeft + last.offsetWidth - viewport.offsetWidth}px)`;
          }
        }
      });
    };

    const sectionObserver = new IntersectionObserver(cb, {
      threshold: 0.5
    });

    sections.forEach((sec) => {
      sectionObserver.observe(sec);
    });

    window.addEventListener('scroll', () => {
      const {scrollTop} = document.documentElement;

      if (scrollTop > this.lastScrollTop && !this.hideMenu) {
        this.hideMenu = true;
      }

      if (scrollTop < this.lastScrollTop && this.hideMenu) {
        this.hideMenu = false;
      }

      this.lastScrollTop = scrollTop;
    });
  }
}
