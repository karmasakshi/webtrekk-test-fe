/* --- Angular Imports --- */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* --- Interfaces --- */
import { Customer } from '../../modules/customer/interfaces/customer';

/* --- Constants --- */
const DATA_URL: string = 'assets/customers-sample.json';

@Injectable()
export class CustomerService {

  private isStorageInitialized: boolean;

  public constructor(
    private httpClient: HttpClient
  ) {

    this.isStorageInitialized = false;

    this.initializeStorage();

  }

  /**
   * Initialize storage.
   */
  private async initializeStorage(): Promise<any> {

    return new Promise(

      (resolve) => {

        if (this.isStorageInitialized) {

          resolve();

        } else {

          if (!localStorage.getItem('data')) {

            this.httpClient.get(DATA_URL).subscribe(

              (response) => {

                localStorage.setItem('data', JSON.stringify(response));

                this.isStorageInitialized = true;

                resolve();

              }

            );

          } else {

            this.isStorageInitialized = true;

            resolve();

          }

        }

      });

  }

  public async addCustomer(newCustomer: Customer): Promise<any> {

    this.initializeStorage().then(

      () => {

        return new Promise(

          (resolve) => {

            let customers: Customer[] = JSON.parse(localStorage.getItem('data'));

            let newCustomerId: number = customers[customers.length - 1].customerID + 1;

            newCustomer.customerID = newCustomerId;

            customers.push(newCustomer);

            localStorage.setItem('data', JSON.stringify(customers));

            resolve();

          });

      }

    );

  }

  /**
   * Delete customer.
   * @param customerId Customer ID.
   */
  public async deleteCustomer(customerId: number): Promise<any> {

    this.initializeStorage().then(

      () => {

        return new Promise(

          (resolve) => {

            let data: any[] = JSON.parse(localStorage.getItem('data'));
            let deleteIndex: number = -1;

            data.forEach(

              (customer, index) => {

                if (customer.customerID === customerId) {

                  deleteIndex = index;

                }

              });

            data.splice(deleteIndex, 1);

            localStorage.setItem('data', JSON.stringify(data));

            resolve();

          });

      }

    );

  }

  /**
   * Get customer.
   * @param customerId Customer ID.
   */
  public async getCustomer(customerId: number): Promise<any> {

    return new Promise(

      (resolve, reject) => {

        this.initializeStorage().then(

          () => {

            let customers: Customer[] = JSON.parse(localStorage.getItem('data'));

            customers.forEach(

              customer => {

                if (customer.customerID === customerId) {

                  resolve(customer);

                }

              }

            );

            reject();

          },

          () => { }

        );

      });

  }

  /**
   * Gets customers.
   */
  public async getCustomers(): Promise<any> {

    return new Promise(

      (resolve) => {

        this.initializeStorage().then(

          () => {

            resolve(JSON.parse(localStorage.getItem('data')));

          },

          () => { }

        );

      });

  }

  /**
   * Resets storage.
   */
  public async resetStorage(): Promise<any> {

    return new Promise(

      (resolve) => {

        localStorage.removeItem('data');

        this.initializeStorage().then(

          () => {

            resolve();

          }

        );

      });

  }

  /**
   * Updates customer.
   * @param updatedCustomer: Updated customer.
   */
  public async updateCustomer(updatedCustomer: Customer): Promise<any> {

    return new Promise(

      (resolve) => {

        this.initializeStorage().then(

          () => {

            let customers: Customer[] = JSON.parse(localStorage.getItem('data'));

            let customerIndex: number = -1;

            customers.forEach(

              (customer, index) => {

                if (customer.customerID === updatedCustomer.customerID) {

                  customerIndex = index;

                }

              }

            );

            customers[customerIndex] = updatedCustomer;

            localStorage.setItem('data', JSON.stringify(customers));

            resolve();

          }

        );

      });

  }

}
