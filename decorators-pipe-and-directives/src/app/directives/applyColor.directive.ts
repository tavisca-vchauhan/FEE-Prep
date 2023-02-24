import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[applyColor]',
})
export class ApplyColorDirective implements OnInit {
  // Attribute directive
  @Input() applyColor = 'red';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.color = this.applyColor;
  }
}
