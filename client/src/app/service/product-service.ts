import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';
import { Observable, of } from 'rxjs';
import { map,  catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:5000/v1/products';


  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url)
      .pipe(
        map((respone: Product[]) => {
          return respone;
        }),
        catchError(this.handleError('get product', []))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {


      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

