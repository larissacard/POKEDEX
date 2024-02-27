import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHorizontalScroll]',
})
export class HorizontalScrollDirective {
  constructor(private element: ElementRef) {}

  @HostListener('wheel', ['$event'])
  public onWheel(event: WheelEvent): void {
    this.element.nativeElement.scrollLeft += event.deltaY;
  }
}
