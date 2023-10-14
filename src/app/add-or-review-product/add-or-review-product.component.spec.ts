import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrReviewProductComponent } from './add-or-review-product.component';

describe('AddOrReviewProductComponent', () => {
  let component: AddOrReviewProductComponent;
  let fixture: ComponentFixture<AddOrReviewProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOrReviewProductComponent]
    });
    fixture = TestBed.createComponent(AddOrReviewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
