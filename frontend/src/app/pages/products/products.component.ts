import { Product } from './../../models/product';
import { ConfigService } from './../../services/config.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  columns = this.config.productTableColumns;

  list$ = this.productService.getAll();

  constructor(
    private config: ConfigService,
    private productService: ProductService,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit(): void {}

  delete(product: Product) {
    this.productService.delete(product._id).subscribe({
      next: () => {
        this.list$ = this.productService.getAll();
        this.flashMessage.show('Product removed', {
          cssClass: 'alert-success',
          timeout: 2000,
        });
      },
      error: (err) => console.error(err),
    });
  }
}
