import { FlashMessagesService } from 'flash-messages-angular';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';

export interface IAuthModel {
  success: boolean;
  accessToken: string;
  user: User;
}

export interface ILoginData {
  email?: string;
  password?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = environment.apiUrl;

  loginUrl: string = `${this.apiUrl}login`;

  user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  access_token$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  get currentUserValue(): User | null {
    return this.user$.value;
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {
    this.user$.subscribe({
      next: (user) => {
        if (user) {
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/', 'login']);
          this.access_token$.next('');
          sessionStorage.removeItem('login');
        }
      },
    });

    const userData = localStorage.getItem('user');
    if (userData) {
      const userDataObj = JSON.parse(userData);
      this.access_token$.next(userDataObj.accessToken);
      this.user$.next(userDataObj.user);
    }
  }

  login(loginData: ILoginData): void {
    this.http.post<IAuthModel>(this.loginUrl, loginData).subscribe({
      next: (response: IAuthModel) => {
        this.user$.next(response.user);
        this.access_token$.next(response.accessToken);
        localStorage.setItem('user', JSON.stringify(response));
        this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success',
          timeout: 2000,
        });
      },
      error: (err) => console.error(err),
    });
  }

  logout(): void {
    this.user$.next(null);
  }
}
