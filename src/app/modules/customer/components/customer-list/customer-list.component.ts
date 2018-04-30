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

  /**
   * Gets customers.
   */
  private getCustomers(): void {

    this.customerService.getCustomers().then(

      (response) => {

        this.customers = response;

      },

      () => { }

    );

  }

  /**
   * Deletes a customer.
   * @param customerId Customer ID.
   */
  public deleteCustomer(customerId: number): void {

    if (confirm('Are you sure?')) {

      this.customerService.deleteCustomer(customerId).then(

        () => {

          this.getCustomers();

        },

        () => { }

      );

    }

  }

}
