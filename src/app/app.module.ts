import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ProductService } from './shoppingKart-services/product-service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { RegComponent } from './reg/reg.component';
import { MyHomeComponent } from './my-home/my-home.component'


//import { NgModule } from '@angular/core'
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ViewProductsComponent,
    LoginComponent,
    RegisterComponent,
    RegComponent,
    MyHomeComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
