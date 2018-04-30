/* --- Angular Imports --- */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

    return new Promise((resolve, reject) => {

      if (this.isStorageInitialized) {

        resolve();

      } else {

        if (!localStorage.getItem('data')) {

          this.httpClient.get(DATA_URL).subscribe(

            (response) => {

              localStorage.setItem('data', JSON.stringify(response));

              this.isStorageInitialized = true;

              resolve();

            },

            () => { },

            () => { }

          );

        } else {

          this.isStorageInitialized = true;

          resolve();

        }

      }

    });

  }

  /**
   * Delete customer.
   * @param customerId Customer ID.
   */
  public deleteCustomer(customerId: number): Promise<any> {

    return new Promise((resolve, reject) => {

      let data: any[] = JSON.parse(localStorage.getItem('data'));
      let deleteIndex: number = -1;

      data.forEach((customer, index) => {

        if (customer.customerID === customerId) {

          deleteIndex = index;

        }

      });

      data.splice(deleteIndex, 1);

      localStorage.setItem('data', JSON.stringify(data));

      resolve();

    });

  }

  /**
   * Get customer.
   * @param customerId Customer ID.
   */
  public getCustomer(customerId: number): void { }

  /**
   * Gets customers.
   */
  public async getCustomers(): Promise<any> {

    return new Promise((resolve, reject) => {

      this.initializeStorage().then(

        () => {

          resolve(JSON.parse(localStorage.getItem('data')));

        },

        () => { }

      );

    });

  }

  /**
   * Updates customer.
   * @param customerId Customer ID.
   * @param customer Customer object.
   */
  public updateCustomer(customerId: number, customer: any): void { }

  /**
   * Resets storage.
   */
  public async resetStorage(): Promise<any> {

    return new Promise((resolve, reject) => {

      this.httpClient.get(DATA_URL).subscribe(

        (response) => {

          localStorage.setItem('data', JSON.stringify(response));

          resolve();

        },

        () => { },

        () => { }

      );

    });

  }

}
