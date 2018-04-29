/* --- Angular Imports --- */
import { Component, OnInit } from '@angular/core';

/* --- Services --- */
import { CustomerService } from '../../../../services/customer/customer.service';

@Component({
  selector: 'app-customer-list',
  styleUrls: ['./customer-list.component.scss'],
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {

  public customers: any[];

  public constructor(
    private customerService: CustomerService
  ) {

    this.customers = [];

  }

  public ngOnInit(): void {

    this.getCustomers();

  }

  private getCustomers(): void {

    this.customerService.getCustomers().subscribe(

      (response) => {

        this.customers = response;

      },

      () => { },

      () => { }

    );

  }

}
