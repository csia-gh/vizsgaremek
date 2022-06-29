import { CustomerService } from './../../services/customer.service';
import { Order } from './../../models/order';
import { Router } from '@angular/router';
import { OrderService } from './../../services/order.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.scss'],
})
export class OrderAddComponent implements OnInit {
  order: Order = new Order();
  @ViewChild('orderForm') form: any;
  customers$ = this.customerService.getAll();

  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router,
    private customerService: CustomerService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {}

  onSubmit({ value, valid }: { value: Order; valid: boolean | null }) {
    if (!valid) {
      // Show error
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger',
        timeout: 2000,
      });
    } else {
      this.orderService.create(value).subscribe({
        next: () => {
          // Show message
          this.flashMessage.show('New order added', {
            cssClass: 'alert-success',
            timeout: 2000,
          });

          // Redirect to dash
          this.router.navigate(['/orders']);
        },
        error: (err) => console.error(err),
      });
    }
  }
}
