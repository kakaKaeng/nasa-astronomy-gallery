import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  @HostBinding('class.scroll') isScrolled = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
