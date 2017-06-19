import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNonNumeric]'
})
export class NonNumericDirective {

  constructor(private element: ElementRef) { }

  @HostListener('keydown', ['$event'])
  onKeydown(event) {
    event.preventDefault();

    const numberRegex = /[0-9]/;

    if (!numberRegex.test(event.key)) {
      this.element.nativeElement.value = event.key;
    }
  }

}
