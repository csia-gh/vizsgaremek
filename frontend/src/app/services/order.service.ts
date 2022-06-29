import { BaseService } from './base.service';
import { Order } from './../models/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService extends BaseService<Order> {
  constructor(http: HttpClient) {
    super(http, 'order');
  }
}
