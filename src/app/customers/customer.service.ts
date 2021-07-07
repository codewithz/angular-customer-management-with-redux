import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

   url:string="https://ng-http-cwz-default-rtdb.firebaseio.com/customers.json";

  constructor(private http:HttpClient) {

   }

   storeCustomer(customer:Customer){
    return this.http.post(this.url,customer);
   }

   getCustomers(){
   
    return  this.http.get<{[key:string]:Customer}>(this.url).
     pipe(
       map((responseData)=>{
         const customerArray:Customer[]=[];
         for(const key in responseData){
          customerArray.push({...responseData[key]})
         }
         return customerArray;
       })
     );
   }
}
