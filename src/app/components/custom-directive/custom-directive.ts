import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[effects]'
})
export class CustomDirective {
  constructor(private element: ElementRef) {
    element.nativeElement.style.color = 'red';
  }
  @HostListener('click')
  showMessage () {
    alert('click on directive');
  }
  @HostListener('mouseover')
  applyAffecs() {
    this.element.nativeElement.style.fontSize = '175%'
  }
  @HostListener('mouseleave')
  removeAffects() {
    this.element.nativeElement.style.fontSize = '100%';
  }
}
