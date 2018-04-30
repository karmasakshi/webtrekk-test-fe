/* --- Angular Imports --- */
import { Component, OnInit } from '@angular/core';

/* --- Services --- */
import { CustomerService } from '../../services/customer/customer.service';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public constructor(
    private customerService: CustomerService
  ) { }

  public ngOnInit(): void { }

  public resetStorage(): void {

    this.customerService.resetStorage().then(

      () => {

        location.reload();

      },

      () => { }

    );

  }

}
