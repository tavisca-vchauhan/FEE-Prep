import { Component } from '@angular/core';

@CustomClassDecorator()
@Component({
  selector: 'custom-class',
  template: '<div>Hello Class</div>',
})
export class CustomClass {
  ngOnInit() {
    console.log('onInit class');
  }
}

function CustomClassDecorator(): ClassDecorator {
  return function (target: any) {
    new target().ngOnInit();
  };
}
