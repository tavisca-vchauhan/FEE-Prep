import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState, product_state_name } from '../state/product.state';

const productState = createFeatureSelector<ProductState>(product_state_name);

export const getProducts = createSelector(
  productState,
  (state) => state.products
);

export const getProductFailureError = createSelector(
  productState,
  (state) => state.error
);
