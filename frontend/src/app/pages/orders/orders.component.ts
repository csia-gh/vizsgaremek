import { Order } from './../../models/order';
import { FlashMessagesService } from 'flash-messages-angular';
import { OrderService } from './../../services/order.service';
import { ConfigService } from './../../services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  columns = this.config.orderTableColumns;

  list$ = this.orderService.getAll();

  constructor(
    private config: ConfigService,
    private orderService: OrderService,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit(): void {}

  delete(order: Order) {
    this.orderService.delete(order._id).subscribe({
      next: () => {
        this.list$ = this.orderService.getAll();
        this.flashMessage.show('Order removed', {
          cssClass: 'alert-success',
          timeout: 2000,
        });
      },
      error: (err) => console.error(err),
    });
  }
}
