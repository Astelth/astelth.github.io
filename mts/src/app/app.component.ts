import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'mts';

  ngAfterViewInit() {
    const animateNodes = document.querySelectorAll('[data-animation-delay]');

    const cb = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          entry.target.setAttribute('style', `transform: translateY(0); opacity: 1;
            transition-delay: ${entry.target.getAttribute('data-animation-delay')}s`);
        }
      });
    };

    const sectionObserver = new IntersectionObserver(cb, {
      threshold: [0.2, 0.5, 0.8]
    });

    animateNodes.forEach((sec) => {
      sectionObserver.observe(sec);
    });
  }
}
