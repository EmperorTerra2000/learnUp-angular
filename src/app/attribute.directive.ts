import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective implements OnChanges {
  @Input()
  appAttribute: object;

  constructor(private element: ElementRef<HTMLElement>) { }

  ngOnChanges(changes: SimpleChanges): void {
    for (let key in this.appAttribute) {
      this.element.nativeElement.setAttribute(key, this.appAttribute[key]);
    }
  }
}
