import { Order } from './../../models/order';
import { CustomerService } from './../../services/customer.service';
import { OrderService } from './../../services/order.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss'],
})
export class OrderEditComponent implements OnInit {
  id: string = '';
  order: Order = new Order();

  customers$ = this.customerService.getAll();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private orderService: OrderService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.orderService.getOne(this.id).subscribe((order) => {
      if (order) {
        this.order = order;
      }
    });
  }

  onSubmit({ value, valid }: { value: Order; valid: boolean | null }) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger',
        timeout: 2000,
      });
    } else {
      value._id = this.id;
      this.orderService.update(value).subscribe({
        next: (product) => {
          console.log(product);

          this.flashMessage.show('Order updated', {
            cssClass: 'alert-success',
            timeout: 2000,
          });

          this.router.navigate(['/orders']);
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
