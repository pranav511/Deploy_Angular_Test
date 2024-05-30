import { Injectable } from '@angular/core';
import { ICategory } from '../../ShoppingKart-Interfaces/category';
import { IProduct } from '../../ShoppingKart-Interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products!: IProduct[];
  categories!: ICategory[];
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    let tempVar = this.http.get<IProduct[]>('https://localhost:7152/api/product/GetAllProducts');
    return tempVar;
  }
  getProductCategories(): Observable<ICategory[]> {
    let tempVar = this.http.get<ICategory[]>('https://localhost:7152/api/categories');
    return tempVar;
  }
}
