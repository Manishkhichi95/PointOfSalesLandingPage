import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  url: string = '/assets/productList.json';
  productData: any = [];
  count: number = 0;
  totalItems = new BehaviorSubject<number>(0);
  constructor(private http: HttpClient) { }

  getProductsList() {
    return this.http.get(this.url);
  }

  setProductData(product: any) {
    this.count++;
    this.totalItems.next(this.count);
    this.productData.includes(product) ?
      (product.count++)
      : (product.count = 1, this.productData.push(product));
    return this.productData;
  }

  getProductData() {
    return this.productData;
  }

  getTotalItems() {
    return this.totalItems;
  }

  resetComponent() {
    this.count = 0;
    this.totalItems.next(0);
    this.productData = [];
  }
}