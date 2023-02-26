import {
  ContentChildren,
  Directive,
  Input,
  OnChanges,
  QueryList,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[myNgSwitchCase]',
})
export class MyNgSwitchCaseDirective {
  // For matching case template
  @Input() myNgSwitchCase: any = null;
  constructor(public template: TemplateRef<any>) {}
}

@Directive({
  selector: '[myNgSwitchCaseDefault]',
})
export class MyNgSwitchCaseDefaultDirective {
  // For default template
  @Input() myNgSwitchCaseDefault: any = null;
  constructor(public template: TemplateRef<any>) {}
}

@Directive({
  selector: '[myNgSwitch]',
})
export class MyNgSwitchDirective implements OnChanges {
  @Input() myNgSwitch: any = null; // To get ngSwitch conditional expression
  @ContentChildren(MyNgSwitchCaseDirective)
  myNgSwitchCases: QueryList<MyNgSwitchCaseDirective>; // To get switch cases

  @ContentChildren(MyNgSwitchCaseDefaultDirective)
  myNgSwitchCasesDefault: QueryList<MyNgSwitchCaseDefaultDirective>; // To get default switch cases

  viewRendered = false;

  constructor(private view: ViewContainerRef) {}

  ngAfterViewInit(): void {
    // To reflect matching changes for the first time. In onInit children content is not available.
    this.RenderMatchingTemplates();
    if (!this.viewRendered) {
      this.RenderDefaultTemplate();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.view.clear();
    this.viewRendered = false;
    if (changes && changes['myNgSwitch']) {
      this.RenderMatchingTemplates();
      if (!this.viewRendered) {
        this.RenderDefaultTemplate();
      }
    }
  }

  RenderDefaultTemplate() {
    this.myNgSwitchCasesDefault?.forEach((defaultCase) => {
      this.view.createEmbeddedView(defaultCase.template);
    });
  }

  RenderMatchingTemplates() {
    this.myNgSwitchCases?.forEach((switchCase) => {
      if (switchCase.myNgSwitchCase == this.myNgSwitch) {
        this.viewRendered = true;
        this.view.createEmbeddedView(switchCase.template);
      }
    });
  }
}
