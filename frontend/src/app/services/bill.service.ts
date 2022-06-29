import { HttpClient } from '@angular/common/http';
import { Bill } from './../models/bill';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BillService extends BaseService<Bill> {
  constructor(http: HttpClient) {
    super(http, 'bill');
  }
}
