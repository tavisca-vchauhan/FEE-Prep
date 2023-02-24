import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[myNgIf]',
})
export class MyNgIfDirective implements OnInit {
  // Structural directive
  @Input() myNgIf = false;
  @Input() myNgIfElse = false;

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) {}

  ngOnInit() {
    if (this.myNgIf || this.myNgIfElse) {
      this.view.createEmbeddedView(this.template);
    } else {
      this.view.clear();
    }
  }
}
