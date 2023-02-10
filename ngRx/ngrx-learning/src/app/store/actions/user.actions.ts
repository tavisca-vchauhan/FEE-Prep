import { Action, createAction, props } from '@ngrx/store';

export enum UserActionType {
  GetUsers = '[User] Get Users',
  UserListSuccess = '[User] User List Success',
  UserListFailure = '[User] User List Failure',
}

export const GetUsersList = createAction(UserActionType.GetUsers);

export const GetUserListSuccess = createAction(
  UserActionType.UserListSuccess,
  props<{ userList: any }>()
);

export const GetUserListFailure = createAction(
  UserActionType.UserListFailure,
  props<{ error: string }>()
);

// export class GetUsersList implements Action {
//   readonly type = UserActionType.GetUsers;
// }

// export class GetUserListSuccess implements Action {
//   readonly type = UserActionType.UserListSuccess;
//   constructor(public payload: { userList: any }) {}
// }

// export class GetUserListFailure implements Action {
//   readonly type = UserActionType.UserListFailure;
//   constructor(public payload: { error: string }) {}
// }

// export type UserActions =
//   | GetUserListFailure
//   | GetUserListSuccess
//   | GetUsersList;
