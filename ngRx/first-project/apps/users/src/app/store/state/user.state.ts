import { User } from '../../interfaces';

export interface UserState {
  users: User[];
  error: any;
  loading: boolean;
  loaded: boolean;
  page: number;
}

export const initialUserState: UserState = {
  users: [],
  error: null,
  loading: false,
  loaded: false,
  page: 1,
};

export const USER_STATE_NAME = 'userState';
