import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDisplay]'
})
export class DisplayDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.display="none"
  }

}
