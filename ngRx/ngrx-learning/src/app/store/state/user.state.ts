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

export const userStateFeatureKey = 'usersState';
