import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.html',
  styleUrls: ['./reactive-form.scss'],
})
export class ReactiveForm {
  constructor(private fb: FormBuilder) {}

  studentForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(4)]],
    lastName: [''],
    address: this.fb.group({
      street: ['', Validators.required],
      city: [''],
      state: [''],
      pincode: [''],
    }),
    email: [''],
    contactInfo: this.fb.group({
      primaryPhone: ['', Validators.required],
      secondaryPhone: [''],
    }),
  });

  get firstName() {
    return this.studentForm.get('firstName');
  }
  get email() {
    return this.studentForm.get('email');
  }
  get street() {
    return this.studentForm.get('address.street');
  }
  get state() {
    return this.studentForm.get('address.state');
  }
  get pincode() {
    return this.studentForm.get('address.pincode');
  }

  get primaryPhone() {
    return this.studentForm.get('contactInfo.primaryPhone');
  }

  onSubmit() {
    if (!this.studentForm.valid) {
      this.studentForm.markAllAsTouched();
    } else {
      console.log('form submitted');
    }
  }
}
