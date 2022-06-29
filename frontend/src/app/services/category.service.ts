import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends BaseService<Category> {
  constructor(http: HttpClient) {
    super(http, 'category');
  }
}
