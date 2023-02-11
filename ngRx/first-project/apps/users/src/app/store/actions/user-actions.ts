import { Action } from '@ngrx/store';
import { User } from '../../interfaces/user';

export enum UserActionsType {
  GET_USER_LIST = '[USER_LIST] Get User List',
  GET_USER_LIST_SUCCESS = '[USER_LIST] Get User List Success',
  GET_USER_LIST_FAILURE = '[USER_LIST] Get User List Failure',
  GET_USER_DETAIL = '[USER_DETAIL] Get User Detail',
  GET_USER_DETAIL_SUCCESS = '[USER_DETAIL] Get User Detail Success',
  GET_USER_DETAIL_FAILURE = '[USER_DETAIL] Get User Detail Failure',
}

export class GetUserList implements Action {
  readonly type = UserActionsType.GET_USER_LIST;
}

export class GetUserListSuccess implements Action {
  readonly type = UserActionsType.GET_USER_LIST_SUCCESS;
  constructor(public payload: { usersList: User[] }) {}
}

export class GetUserListFailure implements Action {
  readonly type = UserActionsType.GET_USER_LIST_FAILURE;
  constructor(public payload: { error: any }) {}
}

export type UserActions = GetUserList | GetUserListFailure | GetUserListSuccess;
