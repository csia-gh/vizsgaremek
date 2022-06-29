import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Address } from './../models/address';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddressService extends BaseService<Address> {
  constructor(http: HttpClient) {
    super(http, 'address');
  }
}
