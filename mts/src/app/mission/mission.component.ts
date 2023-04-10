import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements AfterViewInit {
  showFirstScreen = true;
  ngAfterViewInit() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // Listen for the scroll event
    window.addEventListener('scroll', () => {
      if (this.showFirstScreen) this.showFirstScreen = false;
    });
  }
}
