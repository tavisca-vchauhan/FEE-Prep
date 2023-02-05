import { initialProductState, ProductState } from '../state/product.state';
import { ProductActions, ProductActionType } from '../actions/product.actions';

export function productReducer(
  state = initialProductState,
  action: ProductActions
): ProductState {
  switch (action.type) {
    case ProductActionType.GetProduct:
      return {
        ...state,
        loading: true,
      };
    case ProductActionType.GetProductSuccess:
      return {
        ...state,
        products: action.payload.products,
        loading: false,
        loaded: true,
      };
    case ProductActionType.GetProductFailure:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        loaded: false,
      };
    default: // adding default condition to initiate default state as initial state.
      return { ...state };
  }
}
