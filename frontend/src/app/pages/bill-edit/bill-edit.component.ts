import { BillService } from './../../services/bill.service';
import { OrderService } from './../../services/order.service';
import { Bill } from './../../models/bill';
import { FlashMessagesService } from 'flash-messages-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-edit',
  templateUrl: './bill-edit.component.html',
  styleUrls: ['./bill-edit.component.scss'],
})
export class BillEditComponent implements OnInit {
  id: string = '';
  bill = new Bill();
  orders$ = this.orderService.getAll();

  customers$ = this.orderService.getAll();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private orderService: OrderService,
    private billService: BillService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.billService.getOne(this.id).subscribe((bill) => {
      if (bill) {
        this.bill = bill;
      }
    });
  }

  onSubmit({ value, valid }: { value: Bill; valid: boolean | null }) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger',
        timeout: 2000,
      });
    } else {
      value._id = this.id;
      this.billService.update(value).subscribe({
        next: (product) => {
          console.log(product);

          this.flashMessage.show('Bill updated', {
            cssClass: 'alert-success',
            timeout: 2000,
          });

          this.router.navigate(['/bills']);
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
