import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/pages/home/home.component';
import { CartComponent } from './component/pages/cart/cart.component';
import { SaleComponent } from './component/pages/sale/sale.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AdminComponent } from './component/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    SaleComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
