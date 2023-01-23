import { UserState, initialUserState } from '../state/user.state';
import { UserActionType, UserActions } from '../actions/user.actions';

export const userFeatureKey = 'usersState';

export function reducer(
  state = initialUserState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionType.GetUsers:
      return {
        ...state,
      };
    case UserActionType.UserListSuccess:
      return {
        ...state,
        userList: action.payload.data,
        loaded: true,
        error: null,
      };
    case UserActionType.UserListFailure:
      return {
        ...state,
        error: action.payload.error,
        loaded: false,
        userList: [],
      };
    default:
      return { ...state };
  }
}
