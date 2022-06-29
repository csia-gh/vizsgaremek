import { INgxTableColumn } from './../data-table/ngx-data-table/ngx-data-table.component';
import { Injectable } from '@angular/core';

export interface INavLink {
  link: string;
  title: string;
  icon: string;
  color?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  navLinks: INavLink[] = [
    { link: '/', title: 'Home', icon: 'home', color: 'bg-primary' },
    {
      link: '/products',
      title: 'Products',
      icon: 'square',
      color: 'bg-warning',
    },
    { link: '/orders', title: 'Orders', icon: 'gift', color: 'bg-secondary' },
    { link: '/bills', title: 'Bills', icon: 'hard-drive', color: 'bg-danger' },
    {
      link: '/categories',
      title: 'Categories',
      icon: 'columns',
      color: 'bg-dark',
    },
    {
      link: '/customers',
      title: 'Customers',
      icon: 'credit-card',
      color: 'bg-info',
    },
  ];

  productTableColumns: INgxTableColumn[] = [
    { key: '_id', title: '#' },
    { key: 'name', title: 'Name' },
    { key: 'description', title: 'Description' },
    { key: 'category', title: 'Category' },
    { key: 'price', title: 'Price' },
    { key: 'manufacturer', title: 'Manufacturer' },
    { key: 'active', title: 'Active' },
  ];
  orderTableColumns: INgxTableColumn[] = [
    { key: '_id', title: '#' },
    { key: 'customerID', title: 'CustomerID' },
    { key: 'status', title: 'Status' },
  ];
  billTableColumns: INgxTableColumn[] = [
    { key: '_id', title: '#' },
    { key: 'orderID', title: 'OrderID' },
    { key: 'amount', title: 'Amount' },
    { key: 'status', title: 'Status' },
  ];
  categoryTableColumns: INgxTableColumn[] = [
    { key: '_id', title: '#' },
    { key: 'name', title: 'Name' },
  ];
  customerTableColumns: INgxTableColumn[] = [
    { key: '_id', title: '#' },
    { key: 'firstName', title: 'First name' },
    { key: 'lastName', title: 'Last name' },
    { key: 'email', title: 'Email' },
    { key: 'addressID', title: 'addressID' },
  ];

  constructor() {}
}
