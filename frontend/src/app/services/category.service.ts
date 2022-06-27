import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}category`);
  }

  getOne(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}category/${id}`);
  }

  update(entity: Category): Observable<Category> {
    const id = entity._id;
    const payload = { ...entity } as any;
    delete payload._id;
    return this.http.patch<Category>(`${this.apiUrl}category/${id}`, entity);
  }

  delete(id: string): Observable<Category> {
    return this.http.delete<Category>(`${this.apiUrl}category/${id}`);
  }

  create(entity: Category): Observable<Category> {
    return this.http.post<Category>(`${this.apiUrl}category`, entity);
  }
}
