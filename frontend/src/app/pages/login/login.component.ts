import { Router } from '@angular/router';

import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.logout();
  }

  onSubmit() {
    this.auth.login({ email: this.email, password: this.password });
  }
}
