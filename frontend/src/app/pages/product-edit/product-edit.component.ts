import { CategoryService } from './../../services/category.service';
import { ProductService } from './../../services/product.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  id: string = '';
  product: Product = new Product();

  categories$ = this.catService.getAll();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private productService: ProductService,
    private catService: CategoryService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.productService.getOne(this.id).subscribe((product) => {
      if (product) {
        this.product = product;
      }
    });
  }

  onSubmit({ value, valid }: { value: Product; valid: boolean | null }) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger',
        timeout: 4000,
      });
    } else {
      value._id = this.id;
      this.productService.update(value).subscribe({
        next: (product) => {
          console.log(product);

          this.flashMessage.show('Product updated', {
            cssClass: 'alert-success',
            timeout: 2000,
          });

          this.router.navigate(['/products']);
        },
        error: (err) => {
          this.flashMessage.show(err.message, {
            cssClass: 'alert-danger',
            timeout: 2000,
          });
        },
      });
    }
  }
}
