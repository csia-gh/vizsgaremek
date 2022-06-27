import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import {
  Home,
  Edit,
  Edit2,
  Archive,
  User,
  UserX,
  LogOut,
  Square,
  Gift,
  HardDrive,
  Columns,
  CreditCard,
  Trash2,
  LogIn,
} from 'angular-feather/icons';

const icons = {
  Home,
  Edit,
  Edit2,
  Archive,
  User,
  UserX,
  LogOut,
  Square,
  Gift,
  HardDrive,
  Columns,
  CreditCard,
  Trash2,
  LogIn,
};

@NgModule({
  declarations: [],
  imports: [CommonModule, FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconModule {}
