import { UserActionsType, UserActions } from '../actions/user-actions';
import { UserState, initialUserState } from '../state/user.state';

export const reducer = (state: UserState, action: UserActions) => {
  switch (action.type) {
    case UserActionsType.GET_USER_LIST:
      return {
        ...state,
        loading: true,
        loaded: false,
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
    case UserActionsType.NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
        loading: true,
        loaded: false,
      };
    default:
      return { ...state };
  }
};

export function userReducer(
  state: UserState = initialUserState,
  action: UserActions
) {
  return reducer(state, action);
}
