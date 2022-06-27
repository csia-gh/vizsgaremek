import { Order } from './../models/order';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}order`);
  }

  getOne(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}order/${id}`);
  }

  update(entity: Order): Observable<Order> {
    const id = entity._id;
    const payload = { ...entity } as any;
    delete payload._id;
    return this.http.patch<Order>(`${this.apiUrl}order/${id}`, entity);
  }

  delete(id: string): Observable<Order> {
    return this.http.delete<Order>(`${this.apiUrl}order/${id}`);
  }

  create(entity: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}order`, entity);
  }
}
