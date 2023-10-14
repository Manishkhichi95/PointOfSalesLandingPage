import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-add-or-review-product',
  templateUrl: './add-or-review-product.component.html',
  styleUrls: ['./add-or-review-product.component.css']
})
export class AddOrReviewProductComponent implements OnInit {

  totalItems: any;
  ProductData: any = [];
  // delete: boolean = false;
  lastIndex: boolean = false;

  constructor(public ProductsService: ProductsServiceService) {
    this.ProductData = this.ProductsService.getProductData();
  }

  ngOnInit(): void {
    this.totalItems = this.ProductsService.totalItems;
  }

  deleteIndex(i: number) {
    debugger;
    i == 0?
   (   this.lastIndex = true,
      this.ProductData.splice(i,1))
    :
    this.ProductData.splice(i,1);
    // this.delete = true;
  }

  decrement(index: number, count: number) {
    count == 0 ? '' : count--;
    this.ProductData[index].count = count;
  }

  increment(index: number, count: number) {
    count++;
    this.ProductData[index].count = count;
  }
}