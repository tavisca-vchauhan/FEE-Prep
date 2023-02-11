import { UserActionsType, UserActions } from '../actions/user-actions';
import { UserState } from '../state/user.state';

export const reducer = (state: UserState, action: UserActions) => {
  switch (action.type) {
    case UserActionsType.GET_USER_LIST:
      return {
        ...state,
        loading: true,
      };
    case UserActionsType.GET_USER_LIST_SUCCESS:
      return {
        ...state,
        users: action.payload.usersList,
        loading: false,
        loaded: true,
      };
    case UserActionsType.GET_USER_LIST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        loaded: false,
      };
    default:
      return { ...state };
  }
};

export function userReducer(state: UserState, action: UserActions) {
  return reducer(state, action);
}
