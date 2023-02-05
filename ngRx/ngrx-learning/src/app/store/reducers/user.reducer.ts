import { UserState, initialUserState } from '../state/user.state';
import { UserActionType, UserActions } from '../actions/user.actions';

export function userReducer(
  state = initialUserState,
  action: UserActions
): UserState {
  // re-hydrate state from localStorage
  // state = JSON.parse(localStorage.getItem('state') ?? '{}');

  switch (action.type) {
    case UserActionType.GetUsers:
      state = {
        ...state,
        loading: true,
      };
      break;
    case UserActionType.UserListSuccess:
      state = {
        ...state,
        userList: action.payload.data,
        loaded: true,
        loading: false,
        error: null,
      };
      // To maintain state on browser refresh, saving state to localSTorage
      // localStorage.setItem('state', JSON.stringify(state));
      break;
    case UserActionType.UserListFailure:
      state = {
        ...state,
        error: action.payload.error,
        loaded: false,
        loading: false,
        userList: [],
      };
      // To maintain state on browser refresh, saving state to localSTorage
      // localStorage.setItem('state', JSON.stringify(state));
      break;
    default:
      state = { ...state };
      break;
  }

  return state;
}
