import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrReviewProductComponent } from './add-or-review-product.component';

const routes: Routes = [{
  path: '',
  component: AddOrReviewProductComponent, pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddOrReviewProductRoutingModule { }
