import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogoutComponent } from './logout/logout.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AngularFireModule} from "@angular/fire";
import {AngularFirestore,AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import { CheckoutComponent } from './components/checkout/checkout.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ThanksComponent } from './components/thanks/thanks.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    LogoutComponent,
    CartComponent,
    AccountComponent,
    OrdersComponent,
    ProductsComponent,
    NavbarComponent,
    NotFoundComponent,
    CheckoutComponent,
    ThanksComponent,
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule,NgbModule,AngularFirestoreModule,AngularFireAuthModule,FormsModule,AngularFireModule.initializeApp({
      apiKey: "AIzaSyB_TAvvH91ZeHZBfLIAlRFvYMWu959fXZQ",
    authDomain: "ecommerce-61fdc.firebaseapp.com",
    databaseURL: "https://ecommerce-61fdc.firebaseio.com",
    projectId: "ecommerce-61fdc",
    storageBucket: "ecommerce-61fdc.appspot.com",
    messagingSenderId: "30364171779",
    appId: "1:30364171779:web:b06a1917c7a4a3f6409836",
    measurementId: "G-VT5ZT3DQSR"
    })
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
