import { User } from '../../interfaces';

export interface UserState {
  users: User[];
  error: any;
  loading: boolean;
  loaded: boolean;
}

export const initialUserState: UserState = {
  users: [],
  error: null,
  loading: false,
  loaded: false,
};

export const USER_STATE_NAME = 'userState';
