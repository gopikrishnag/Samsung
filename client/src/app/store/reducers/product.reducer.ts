import { Product } from '../../model/product.model';
import * as ProductActions from './../actions/product.actions';

export const initialState: Product = {};

export function ProductReducer(state: Product[] = [initialState], action: ProductActions.Actions) {


    switch (action.type) {
        case ProductActions.GET_PRODUCTS:
        return [...state, action.payload];

        case ProductActions.LOAD_PRODUCTS:
            return [action.payload];

        default:
            return state;
    }
}
