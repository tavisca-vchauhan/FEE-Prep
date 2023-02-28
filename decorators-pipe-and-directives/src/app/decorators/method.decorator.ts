import { Component } from '@angular/core';

@Component({
  selector: 'custom-method',
  template: '<div>Hello Method</div>',
})
export class CustomMethod {
  @CustomMethodDecorator()
  ngOnInit() {
    console.log('onInit method');
  }
}

function CustomMethodDecorator(): MethodDecorator {
  return function (target: any) {
    target.ngOnInit();
  };
}
