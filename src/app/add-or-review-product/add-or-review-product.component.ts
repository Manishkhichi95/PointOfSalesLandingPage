import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-add-or-review-product',
  templateUrl: './add-or-review-product.component.html',
  styleUrls: ['./add-or-review-product.component.css']
})
export class AddOrReviewProductComponent implements OnInit {
  totalItems: number = 0;
  ProductData: any = [];
  lastIndex: boolean = false;
  discount: string ='10%';
  vatTax: string = '10%';
  totalVatTax : number = 0;
  totalDiscount : number = 0; 
  isOpen : boolean = false;
  sale_No : number = 101;
  count: number = 0;
  currentDate_Time: Date = new Date();
  
  constructor(public ProductsService: ProductsServiceService) { }
  
  ngOnInit(): void { 
    this.initilizeProductData();
  }

  initilizeProductData(){
    this.ProductData = this.ProductsService.getProductData();
    this.totalVatTax = (this.calculateTotalPrice()/ parseInt(this.vatTax))*100;
    this.ProductsService.totalItems.subscribe((res: any) => {
      this.totalItems = res;
    })
  }
  
  deleteIndex(i: number) {
    this.totalItems == 0 ? '' : this.totalItems--;
    i == 0 ?
    (this.lastIndex = true,
      this.ProductData.splice(i, 1)) :
      this.ProductData.splice(i, 1);
    }
    
    decrement(index: number, count: number) {
      this.totalItems == 0 ? '' : this.totalItems--;
      count == 0 ? '' : count--;
      this.ProductData[index].count = count;
    }

  increment(index: number, count: number) {
    this.totalItems++;
    count++;
    this.ProductData[index].count = count;
  }
  
  calculateTotalPrice() {
    let totalPrice :number = 0;
    for (const product of this.ProductData) {
      const subtotal = product.price * product.count;
      totalPrice += subtotal;
    }
    return totalPrice;
  }

  getTotalVatTax(){
    return  this.totalVatTax = (this.calculateTotalPrice()/100)*parseInt(this.vatTax);
  }
  
  getTotaldiscount(){
    return  this.totalVatTax = (this.calculateTotalPrice()/100)*parseInt(this.discount);  
  }
  
  getTotalAmount(){
    return this.calculateTotalPrice() + this.getTotalVatTax() + this.getTotaldiscount();
  }
  
  cancelSale(){
    this.ProductData = [];
    this.totalItems = 0;
    this.discount = '10%';
    this.vatTax = '10%';
    this.totalVatTax = 0;
    this.totalDiscount = 0;
    this.ProductsService.resetComponent();
    this.initilizeProductData();
  }

  showModal = false;

  processSale() {
    this.count++;
    this.sale_No++;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.cancelSale();
  }
}