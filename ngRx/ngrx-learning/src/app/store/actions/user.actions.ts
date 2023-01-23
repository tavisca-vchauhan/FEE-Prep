import { Action } from '@ngrx/store';

export enum UserActionType {
  GetUsers = 'Get Users list',
  UserListSuccess = 'User List Success',
  UserListFailure = 'User List Failure',
}

export class GetUsersList implements Action {
  readonly type = UserActionType.GetUsers;
}

export class GetUserListSuccess implements Action {
  readonly type = UserActionType.UserListSuccess;
  constructor(public payload: { data: any }) {}
}

export class GetUserListFailure implements Action {
  readonly type = UserActionType.UserListFailure;
  constructor(public payload: { error: string }) {}
}

export type UserActions =
  | GetUserListFailure
  | GetUserListSuccess
  | GetUsersList;
