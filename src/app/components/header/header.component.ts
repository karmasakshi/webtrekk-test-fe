/* --- Angular Imports --- */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* --- Services --- */
import { CustomerService } from '../../services/customer/customer.service';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public constructor(
    private router: Router,
    private customerService: CustomerService
  ) { }

  public ngOnInit(): void { }

  public resetStorage(): void {

    this.customerService.resetStorage().then(

      () => {

        this.router.navigate(['/customers']);

      },

      () => { }

    );

  }

}
