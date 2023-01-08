import { Component } from '@angular/core';

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven-form.html',
  styleUrls: ['./template-driven-form.scss'],
})
export class TemplateDrivenForm {
  constructor() {}

  submitForm(form: any) {
    if (form.valid) {
      console.log('form submitted');
    } else {
      form.control.markAllAsTouched();
    }
  }
}
