import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productList: any;
  colors: string[] = ['red', 'grey', 'green', 'blue', 'purple','black'];
  constructor(private ProductsService: ProductsServiceService) { }
  
  ngOnInit() {
    this.ProductsService.getProductsList().subscribe((res:any)=>{
      this.productList=res;
    });
   }

   sendProductData(items:Object){
    this.ProductsService.setProductData(items);
  }
}