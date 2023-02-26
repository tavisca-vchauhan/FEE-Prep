import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[myNgFor]',
})
export class MyNgForDirective implements OnInit {
  // Structural directive
  @Input() myNgForOf: any = null;

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) {}

  ngOnInit() {
    if (this.myNgForOf.length)
      this.myNgForOf.forEach((obj: any, index: any) => {
        this.view.createEmbeddedView(this.template, {
          $implicit: obj,
          index: index,
          isFirst: index == 0,
        });
      });
  }
}
