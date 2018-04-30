/* --- Angular Imports --- */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

/* --- Services --- */
import { CustomerService } from '../../../../services/customer/customer.service';

/* --- Interfaces --- */
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'app-customer-detail',
  styleUrls: ['./customer-detail.component.scss'],
  templateUrl: './customer-detail.component.html'
})
export class CustomerDetailComponent implements OnInit {

  public componentMode: 'add' | 'edit';
  public customer: Customer;
  public customerForm: FormGroup;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) { }

  public ngOnInit(): void {

    this.componentMode = 'add';

    this.customer = {
      birthday: null,
      customerID: null,
      customerLifetimeValue: 0,
      lastContact: null,
      gender: 'm',
      name: {
        first: null,
        last: null
      }
    };

    this.setCustomerForm();

    this.activatedRoute.data.subscribe(

      (data) => {

        this.componentMode = data.componentMode;

        if (this.componentMode === 'edit') {

          this.activatedRoute.params.subscribe(

            (params) => {

              this.customerService.getCustomer(Number(params.id)).then(

                (response) => {

                  this.customer = {
                    birthday: response.birthday,
                    customerID: response.customerID,
                    customerLifetimeValue: response.customerLifetimeValue,
                    lastContact: response.lastContact,
                    gender: response.gender,
                    name: {
                      first: response.name.first,
                      last: response.name.last
                    }
                  };

                  this.setCustomerForm();

                },

                () => {

                  this.router.navigate(['/']);

                }

              );

            }

          );

        }

      },

      () => { },

      () => { }

    );

  }

  /**
   * Deletes customer.
   */
  public deleteCustomer(customerId: number): void {

    if (confirm('Are you sure?')) {

      this.customerService.deleteCustomer(customerId).then(

        () => {

          this.router.navigate(['/']);

        }

      );

    }

  }

  public setCustomerForm(): void {

    this.customerForm = new FormGroup({
      birthday: new FormControl(this.customer.birthday, Validators.required),
      customerID: new FormControl(this.customer.customerID),
      customerLifetimeValue: new FormControl(this.customer.customerLifetimeValue, Validators.required),
      lastContact: new FormControl(this.customer.lastContact, Validators.required),
      gender: new FormControl(this.customer.gender, Validators.required),
      name: new FormGroup({
        first: new FormControl(this.customer.name.first, Validators.required),
        last: new FormControl(this.customer.name.last, Validators.required),
      })
    });

  }

  /**
   * Submit.
   */
  public submit(): void {

    if (this.componentMode === 'edit') {

      this.customerService.updateCustomer(this.customerForm.value).then(

        () => {

          this.router.navigate(['/']);

        }

      );

    } else {

      this.customerService.addCustomer(this.customerForm.value).then(

        () => {

          this.router.navigate(['/']);

        }

      );

    }

  }

}
