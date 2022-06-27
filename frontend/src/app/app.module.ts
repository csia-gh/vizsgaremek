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
