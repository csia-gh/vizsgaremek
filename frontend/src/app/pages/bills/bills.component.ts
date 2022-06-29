import { Bill } from './../../models/bill';
import { FlashMessagesService } from 'flash-messages-angular';
import { BillService } from './../../services/bill.service';
import { ConfigService } from './../../services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
})
export class BillsComponent implements OnInit {
  columns = this.config.billTableColumns;

  list$ = this.billService.getAll();

  constructor(
    private config: ConfigService,
    private billService: BillService,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit(): void {}

  delete(bill: Bill) {
    this.billService.delete(bill._id).subscribe({
      next: () => {
        this.list$ = this.billService.getAll();
        this.flashMessage.show('Bill removed', {
          cssClass: 'alert-success',
          timeout: 2000,
        });
      },
      error: (err) => console.error(err),
    });
  }
}
