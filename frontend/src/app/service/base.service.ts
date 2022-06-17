import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService<Model extends { id: string }> {
  constructor(@Inject(String) private url: string, private http: HttpClient) {}

  getAll(): Observable<Model[]> {
    return this.http.get<Model[]>(this.url);
  }

  get(id: number): Observable<Model> {
    const url = `${this.url}/${id}`;
    return this.http.get<Model>(url);
  }

  add(item: Model): Observable<Model> {
    return this.http.post<Model>(this.url, item);
  }

  update(item: Model): Observable<Model> {
    const url = `${this.url}/${item.id}`;
    return this.http.put<Model>(url, item);
  }

  delete(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }
}
