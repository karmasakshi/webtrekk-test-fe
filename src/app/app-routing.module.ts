/* --- Angular Imports --- */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* --- Routes --- */
const ROUTES: Routes = [
  { path: '**', pathMatch: 'full', redirectTo: 'customers' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(ROUTES)]
})
export class AppRoutingModule { }
