import { Action } from '@ngrx/store';
import { Credentials } from '../../../login/src/app/interfaces/credentials.interface';

export enum AppActionsType {
  USER_LOGIN = '[LOGIN] User Login',
  USER_LOGIN_SUCCESS = '[LOGIN] User Login success',
  USER_LOGIN_FAIL = '[LOGIN] User Login fail',
  USER_LOGOUT = '[LOGOUT] User Logout',
  USER_REGISTER = '[REGISTER] User Register',
  USER_REGISTER_SUCCESS = '[REGISTER] User Register success',
  USER_REGISTER_FAIL = '[REGISTER] User Register fail',
}

export class UserLogin implements Action {
  readonly type = AppActionsType.USER_LOGIN;
  constructor(public cred: Credentials) {}
}

export class UserLoginSuccess implements Action {
  readonly type = AppActionsType.USER_LOGIN_SUCCESS;
  constructor(public payload: { userToken: string }) {}
}

export class UserLoginFailure implements Action {
  readonly type = AppActionsType.USER_LOGIN_FAIL;
  constructor(public payload: { error: any }) {}
}

export class UserLogout implements Action {
  readonly type = AppActionsType.USER_LOGOUT;
}

export type AppActions =
  | UserLogin
  | UserLoginFailure
  | UserLoginSuccess
  | UserLogout;
