import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { NotFoundComponent } from './not-found/not-found.component';

import { ProductsComponent } from './products/products.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'account',component:AccountComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'products',component:ProductsComponent},
  {path:'signup',component:SignUpComponent},
  {path:'**',component:NotFoundComponent},
  {path:"thanks",component:ThanksComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
