import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductsServiceService } from './products-service.service';
import { AddOrReviewProductComponent } from './add-or-review-product/add-or-review-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PercentInputDirective } from './percentage-input.directive';
@NgModule({
  declarations: [
    AppComponent,
    AddOrReviewProductComponent,
    ProductListComponent,
    PercentInputDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ProductsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }