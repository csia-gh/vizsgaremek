import { JwtInterceptor } from './services/jwt.interceptor';
import { AuthService } from './services/auth.service';
import { DataTableModule } from './data-table/data-table.module';
import { IconModule } from './icon/icon.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';

import { FlashMessagesModule } from 'flash-messages-angular';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { OrderAddComponent } from './pages/order-add/order-add.component';
import { OrderEditComponent } from './pages/order-edit/order-edit.component';
import { BillsComponent } from './pages/bills/bills.component';
import { BillAddComponent } from './pages/bill-add/bill-add.component';
import { BillEditComponent } from './pages/bill-edit/bill-edit.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryAddComponent } from './pages/category-add/category-add.component';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { CustomerAddComponent } from './pages/customer-add/customer-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    ProductEditComponent,
    ProductAddComponent,
    LoginComponent,
    ProfileComponent,
    OrdersComponent,
    OrderAddComponent,
    OrderEditComponent,
    BillsComponent,
    BillAddComponent,
    BillEditComponent,
    CategoriesComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    CustomersComponent,
    CustomerAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconModule,
    HttpClientModule,
    DataTableModule,
    FlashMessagesModule.forRoot(),
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      deps: [AuthService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
