import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/store/state';
import { UserLoginSuccess } from '@shared/store/actions';

@Component({
  selector: 'login-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class LoginComponent implements OnInit {
  title = 'login';
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private store: Store<AppState>, private fb: FormBuilder) {}
  ngOnInit() {}

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.store.dispatch(new UserLoginSuccess());
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
