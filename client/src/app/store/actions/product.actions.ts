import { Action } from '@ngrx/store';
import { Product } from '../../model/product.model';


export const GET_PRODUCTS    = '[PRODUCT] Get';
export const LOAD_PRODUCTS = '[PRODUCT] Load';


export class GetProducts implements Action {
    readonly type = GET_PRODUCTS;

    constructor(public payload: string) {}
}


export class LoadProducts implements Action {
    readonly type = LOAD_PRODUCTS;

    constructor(public payload: Product[]) {
      //  console.log('Search :', payload);
    }
}

export type Actions = GetProducts | LoadProducts;
