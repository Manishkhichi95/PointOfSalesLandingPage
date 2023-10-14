import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  url: string = '/assets/productList.json';
  productData: any = [];
  totalItems: number = 0;
  constructor(private http: HttpClient) { }

  getProductsList() {
    return this.http.get(this.url);
  }

  setProductData(product: any) {
    debugger
    this.productData.includes(product) ?
      product.count++
      :( product.count = 1, this.productData.push(product));
    return this.productData;
  }

  getProductData() {
    return this.productData;
  }
}