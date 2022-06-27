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

  loginUrl: string = '';

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
    this.loginUrl = `${this.apiUrl}login`;

    this.user$.subscribe({
      next: (user) => {
        if (user) {
          this.flashMessage.show('You are now logged in', {
            cssClass: 'alert-success',
            timeout: 4000,
          });
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/', 'login']);
          this.access_token$.next('');
          sessionStorage.removeItem('login');
        }
      },
    });

    const loginInfo = sessionStorage.getItem('login');
    if (loginInfo) {
      const loginObject = JSON.parse(loginInfo);
      this.access_token$.next(loginObject.accessToken);
      this.user$.next(loginObject.user);
    }
  }

  login(loginData: ILoginData): void {
    this.http.post<IAuthModel>(this.loginUrl, loginData).subscribe({
      next: (response: IAuthModel) => {
        this.user$.next(response.user);
        this.access_token$.next(response.accessToken);
        sessionStorage.setItem('login', JSON.stringify(response));
      },
      error: (err) => console.error(err),
    });
  }

  logout(): void {
    this.user$.next(null);
  }
}
