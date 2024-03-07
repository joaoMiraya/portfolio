import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(private readonly viewportScroller: ViewportScroller) { }


  scrollToElement(target: string) {
    this.viewportScroller.scrollToAnchor(target);
  }
  getCurrentPosition(): number {
    return this.viewportScroller.getScrollPosition()[1];
  }
  goToTop() {
    return this.viewportScroller.scrollToPosition([0, 0])
  }

}
