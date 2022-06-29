import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Customer } from './../models/customer';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends BaseService<Customer> {
  constructor(http: HttpClient) {
    super(http, 'customer');
  }
}
