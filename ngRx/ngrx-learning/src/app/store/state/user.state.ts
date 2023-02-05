export const user_state_name = 'usersState';

export interface UserState {
  userList: Array<Object>;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialUserState: UserState = {
  userList: [],
  loading: false,
  loaded: false,
  error: null,
};
