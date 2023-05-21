import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-toolbox';
  isHeaderVisible = true;
  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    this.isHeaderVisible = st < this.lastScrollTop;
    this.lastScrollTop = st;
  }
}
