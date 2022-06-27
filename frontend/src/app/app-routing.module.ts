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
    // canActivate: [AuthGuardService],
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
