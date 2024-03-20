import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  public getAllProducts(): Observable<any> {
    return this.http.get<Product[]>(
      "http://localhost:8091/product");
    }
    public getProductsByPage(pageNumber: number, pageSize: number): Observable<Product[]> {
      const startIndex = (pageNumber - 1) * pageSize;
      return this.http.get<Product[]>(`http://localhost:8091/product?_start=${0}&_limit=${10}`);
    }
    public getAllProductsSortedByPrice(order: string): Observable<Product[]> {
      return this.http.get<Product[]>("http://localhost:8091/product")
        .pipe(
          map((products: Product[]) => {
            return products.slice().sort((a, b) => {
              if (order === 'asc') {
                return (a.price || 0) - (b.price || 0);
              } else if (order === 'desc') {
                return (b.price || 0) - (a.price || 0);
              } else {
                return 0;
              }
            });
          })
        );
    }
}
