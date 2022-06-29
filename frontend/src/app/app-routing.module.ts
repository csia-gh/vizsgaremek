import { CustomerAddComponent } from './pages/customer-add/customer-add.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { CategoryAddComponent } from './pages/category-add/category-add.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { BillEditComponent } from './pages/bill-edit/bill-edit.component';
import { BillAddComponent } from './pages/bill-add/bill-add.component';
import { BillsComponent } from './pages/bills/bills.component';
import { OrderEditComponent } from './pages/order-edit/order-edit.component';
import { OrderAddComponent } from './pages/order-add/order-add.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './pages/login/login.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'products/add',
    component: ProductAddComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'products/edit/:id',
    component: ProductEditComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'orders/add',
    component: OrderAddComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'orders/edit/:id',
    component: OrderEditComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'bills',
    component: BillsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'bills/add',
    component: BillAddComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'bills/edit/:id',
    component: BillEditComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'categories/add',
    component: CategoryAddComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'customers',
    component: CustomersComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'customers/add',
    component: CustomerAddComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
