import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { CartComponent } from './component/pages/cart/cart.component';
import { SaleComponent } from './component/pages/sale/sale.component';

const routes: Routes = [
  {
    path:'products',
    component: HomeComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'sale',
    component:SaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
