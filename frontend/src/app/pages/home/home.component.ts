import { ConfigService } from './../../services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  navLinks = this.configService.navLinks;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {}
}
