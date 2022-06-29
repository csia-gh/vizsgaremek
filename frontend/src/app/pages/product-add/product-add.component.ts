import { Product } from './../../models/product';
import { Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product();
  @ViewChild('productForm') form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit({ value, valid }: { value: Product; valid: boolean | null }) {
    if (!valid) {
      // Show error
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger',
        timeout: 4000,
      });
    } else {
      this.productService.create(value).subscribe({
        next: () => {
          // Show message
          this.flashMessage.show('New product added', {
            cssClass: 'alert-success',
            timeout: 4000,
          });

          // Redirect to dash
          this.router.navigate(['/products']);
        },
        error: (err) => console.error(err),
      });
    }
  }
}
