import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService<Product> {
  constructor(http: HttpClient) {
    super('http://localhost:3000/products', http);
  }
}
