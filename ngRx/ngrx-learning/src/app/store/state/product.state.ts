import { Products } from 'src/app/interfaces/products.interface';

export const product_state_name = 'productsState';

export interface ProductState {
  products: Array<Products>;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialProductState: ProductState = {
  products: [],
  error: null,
  loaded: false,
  loading: false,
};
