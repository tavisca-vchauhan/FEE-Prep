import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '@shared/store/state';
import { UserLogin } from '@shared/store/actions';
import { userLoginStatus } from '@shared/store/selectors';
import { Credentials } from './interfaces/credentials.interface';

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

  cred: Credentials;
  errorMessage: string;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {}

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.cred = {
        username: this.loginForm.controls.username.value,
        password: this.loginForm.controls.password.value,
      };

      this.store.dispatch(new UserLogin(this.cred));

      this.store.select(userLoginStatus).subscribe((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['login']);
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
