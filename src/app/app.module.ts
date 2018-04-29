/* --- Angular Imports --- */
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* --- Other Modules --- */
import { CustomerModule } from './modules/customer/customer.module';

/* --- Routing Module --- */
import { AppRoutingModule } from './app-routing.module';

/* --- Services --- */
import { CustomerService } from './services/customer/customer.service';

/* --- Components --- */
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  bootstrap: [MainComponent],
  declarations: [

    /* --- Components --- */
    HeaderComponent,
    MainComponent

  ],
  imports: [

    /* --- Angular Imports --- */
    HttpClientModule,
    BrowserModule,

    /* --- Other Modules --- */
    CustomerModule,

    /* --- Routing Module --- */
    AppRoutingModule

  ],
  providers: [

    /* --- Services --- */
    CustomerService

  ]
})
export class AppModule { }
