/* --- Angular Imports --- */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/* --- Routing Module --- */
import { CustomerRoutingModule } from './customer-routing.module';

/* --- Components --- */
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';

@NgModule({
  imports: [

    /* --- Angular Imports --- */
    CommonModule,

    /* --- Routing Module --- */
    CustomerRoutingModule

  ],
  declarations: [

    /* --- Components --- */
    CustomerListComponent,
    CustomerDetailComponent

  ]
})
export class CustomerModule { }
