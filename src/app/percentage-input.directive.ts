import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPercentInput]'
})
export class PercentInputDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const inputElement = this.el.nativeElement as HTMLInputElement;
    let value = inputElement.value;

    // Remove any characters that are not digits, % symbol, or more than one % symbol
    value = value.replace(/[^0-9%]/g, '');

    // Ensure the value is within the range of 1 to 100%
    if (!value.includes('%') || value == '%') {
      value = '0%';
    } else if (parseInt(value, 10) > 100) {
      alert('Discount value should not be more than 100%')
      value = '100%';
    }

    if (value.indexOf('%') !== value.length - 1) {
      value = value.slice(0, -1); // Remove any extra percentage symbols
    }
    // Update the input field value
    inputElement.value = value;
  }
}