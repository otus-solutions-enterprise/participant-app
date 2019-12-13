import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-host]',
})
export class AddEventDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
