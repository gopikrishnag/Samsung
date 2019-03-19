import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
import { AppStateProduct } from '../store/app.state';
import { Store } from '@ngrx/store';
import * as productActions from '../store/actions/product.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  constructor(private store: Store<AppStateProduct>) {
    this.products$ = store.select('productState');

  }
  products$: Observable<Product[]>;
  products: Product[];
  ngOnInit() {

    this.store.dispatch(new productActions.GetProducts(''));

    this.products$.subscribe(
      x => {
        this.products = x;
      }
    );

  }

}
