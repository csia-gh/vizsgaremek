import { Injectable } from '@angular/core';
import { INgxTableColumn } from './../data-table/ngx-data-table/ngx-data-table.component';

export interface IMenuItem {
  link: string;
  title: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  sidebarMenu: IMenuItem[] = [
    { link: '/', title: 'Dashboard', icon: 'fa fa-home' },
    { link: '/product', title: 'Products', icon: 'fa fa-tasks' },
    { link: '/order', title: 'Orders', icon: 'fa fa-pencil-square-o' },
  ];

  productTableColumns: INgxTableColumn[] = [
    { key: 'name', title: 'Name' },
    { key: 'price', title: 'Price' },
    { key: 'brand', title: 'Brand' },
    { key: 'category', title: 'Cat.' },
    { key: 'countInStock', title: 'CountInStock' },
    { key: 'active', title: 'Active' },
  ];

  constructor() {}
}
