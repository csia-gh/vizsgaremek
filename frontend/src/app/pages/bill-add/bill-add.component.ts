import { OrderService } from './../../services/order.service';
import { Router } from '@angular/router';
import { BillService } from './../../services/bill.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { Bill } from './../../models/bill';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bill-add',
  templateUrl: './bill-add.component.html',
  styleUrls: ['./bill-add.component.scss'],
})
export class BillAddComponent implements OnInit {
  bill = new Bill();
  orders$ = this.orderService.getAll();
  @ViewChild('orderForm') form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private billService: BillService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit({ value, valid }: { value: Bill; valid: boolean | null }) {
    if (!valid) {
      // Show error
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger',
        timeout: 4000,
      });
    } else {
      this.billService.create(value).subscribe({
        next: () => {
          // Show message
          this.flashMessage.show('New bill added', {
            cssClass: 'alert-success',
            timeout: 4000,
          });

          // Redirect to dash
          this.router.navigate(['/bills']);
        },
        error: (err) => console.error(err),
      });
    }
  }
}
