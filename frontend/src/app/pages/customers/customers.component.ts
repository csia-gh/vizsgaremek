import { Customer } from './../../models/customer';
import { CustomerService } from './../../services/customer.service';
import { Product } from './../../models/product';
import { ConfigService } from './../../services/config.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  columns = this.config.customerTableColumns;

  list$ = this.customerService.getAll();

  constructor(
    private config: ConfigService,
    private customerService: CustomerService,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit(): void {}

  delete(product: Customer) {
    // this.productService.delete(product._id).subscribe({
    //   next: () => {
    //     this.list$ = this.productService.getAll();
    //     this.flashMessage.show('Product removed', {
    //       cssClass: 'alert-success',
    //       timeout: 2000,
    //     });
    //   },
    //   error: (err) => console.error(err),
    // });
  }
}
