import { User } from '../../models/user';
import { FlashMessagesService } from 'flash-messages-angular';
import { AuthService } from './../../services/auth.service';
import { ConfigService } from './../../services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  navLinks = this.configService.navLinks;

  loggedIn = false;

  user: User | null = null;

  constructor(
    private configService: ConfigService,
    private auth: AuthService,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe({
      next: (user) => {
        if (user) {
          this.loggedIn = true;
          this.user = user;
        } else {
          this.loggedIn = false;
        }
      },
    });
  }

  logout() {
    this.flashMessage.show('You are now logged out', {
      cssClass: 'alert-info text-center',
      timeout: 10000,
    });
    this.auth.logout();
  }
}
