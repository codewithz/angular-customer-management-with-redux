import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-display',
  templateUrl: './customer-display.component.html',
  styleUrls: ['./customer-display.component.css']
})
export class CustomerDisplayComponent implements OnInit {

  customers:Customer[]=[];
  showLoader:boolean=true;

  constructor(private customerService:CustomerService) { 

  }


  ngOnInit(): void {

    this.customerService.getCustomers()
    .subscribe(
      (customers:Customer[])=>{
        this.showLoader=false;
        this.customers=customers
        console.log(this.customers)
      }
    )
  }

}
