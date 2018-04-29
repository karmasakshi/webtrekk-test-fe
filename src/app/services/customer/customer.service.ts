/* --- Angular Imports --- */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* --- Other Vendor Imports --- */
import { Observable } from 'rxjs/Observable';

/* --- Constants --- */
const DATA_URL: string = 'assets/customers-sample.json';

@Injectable()
export class CustomerService {

  public constructor(
    private httpClient: HttpClient
  ) { }

  public getCustomers(): Observable<any> {

    return this.httpClient.get(DATA_URL);

  }

}
