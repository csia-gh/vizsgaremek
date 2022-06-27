import { CategoryService } from './category.service';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private catService: CategoryService) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}product`);
  }

  getOne(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}product/${id}`);
  }

  update(entity: Product): Observable<Product> {
    const id = entity._id;
    const payload = { ...entity } as any;
    delete payload._id;
    return this.http.patch<Product>(`${this.apiUrl}product/${id}`, entity);
  }

  delete(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}product/${id}`);
  }

  create(entity: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}product`, entity);
  }

  // createCategories(): void {

  // }
}
