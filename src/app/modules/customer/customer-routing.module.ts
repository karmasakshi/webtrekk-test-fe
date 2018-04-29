/* --- Angular Imports --- */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* --- Components --- */
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';

/* --- Routes --- */
const ROUTES: Routes = [
  {
    path: 'customers', children: [
      { path: '', component: CustomerListComponent },
      { path: ':id', component: CustomerDetailComponent },
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(ROUTES)]
})
export class CustomerRoutingModule { }
