import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T extends { _id: string }> {
  url;

  constructor(
    private http: HttpClient,
    @Inject(String) private entity: string
  ) {
    this.url = environment.apiUrl + entity;
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }

  getOne(id: string): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`);
  }

  update(entity: T): Observable<T> {
    const id = entity._id;
    const payload = { ...entity } as any;
    delete payload._id;
    return this.http.put<T>(`${this.url}/${id}`, entity);
  }

  delete(id: string): Observable<T> {
    return this.http.delete<T>(`${this.url}/${id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(this.url, entity);
  }
}
