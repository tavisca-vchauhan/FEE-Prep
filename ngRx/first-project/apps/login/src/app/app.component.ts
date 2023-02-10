import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  loginForm: FormGroup;

  constructor(private store: Store<AppState>, private router: Router) {
    this.loginForm = new FormGroup({});
  }
  ngOnInit() {
    this.loginForm.reset();
  }

  onLogin() {
    this.store.dispatch(new UserLoginSuccess());
  }
}
