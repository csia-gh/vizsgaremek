import { ProductService } from 'src/app/service/product.service';
import { ConfigService } from 'src/app/service/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  columns = this.config.productTableColumns;

  list$ = this.productService.getAll();

  constructor(
    private config: ConfigService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {}
}
