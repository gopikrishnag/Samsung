import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { ProductService } from '../../service/product-service';
import * as productActions from '../actions/product.actions';



@Injectable(
 {providedIn: 'root'}
)
export class ProductEffects {
  constructor(private productService: ProductService,
    private actions$: Actions
  ) {}

  @Effect() loadProduct$: Observable<Action> = this.actions$.pipe(
    ofType<productActions.GetProducts>(productActions.GET_PRODUCTS),
    mergeMap((action) =>
    this.productService.getAllProducts().pipe(
      map(prod => (
        new productActions.LoadProducts(prod)))
    ))
  );




}
