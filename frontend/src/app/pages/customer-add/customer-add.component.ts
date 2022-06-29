import { AddressService } from './../../services/address.service';
import { Address } from './../../models/address';
import { CustomerService } from './../../services/customer.service';
import { Customer } from './../../models/customer';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss'],
})
export class CustomerAddComponent implements OnInit {
  customer: Customer = new Customer();
  address = new Address();
  @ViewChild('form') form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private customerService: CustomerService,
    private addressService: AddressService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit({ value, valid }: { value: Customer; valid: boolean | null }) {
    const addressPayload = { ...this.address } as { _id?: string };
    delete addressPayload._id;

    if (!valid) {
      // Show error
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger',
        timeout: 4000,
      });
    } else {
      this.addressService
        .create(addressPayload as Address)
        .subscribe((address) => {
          const customerPayload = { ...this.customer } as {
            _id?: string;
            addressID?: string;
          };
          delete customerPayload._id;
          customerPayload.addressID = address._id;

          this.customerService.create(customerPayload as Customer).subscribe({
            next: () => {
              // Show message
              this.flashMessage.show('New customer added', {
                cssClass: 'alert-success',
                timeout: 4000,
              });

              // Redirect to dash
              this.router.navigate(['/customers']);
            },
            error: (err) => console.error(err),
          });
        });
    }
  }
}
