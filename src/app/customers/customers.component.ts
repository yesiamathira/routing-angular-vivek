import { Component, OnInit } from '@angular/core';
import { customer } from '../customer';
import { CUSTOMERS } from '../mock-customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers = CUSTOMERS;
  customer:customer = {id:0 , name:"" ,email:""};
  selectedcustomer: customer;
  
  addCustomer(){

    if(this.customer.name.length>0 && this.customer.email.length>0){
     this.customer.id=this.customers.length+1;
     this.customers.push(this.customer);
    }
    else{
      alert("added");
    }
  }
 removeCustomer(num)
 {
var customerList:customer[]=[];
for(var i=0;i<this.customers.length;i++)
     {
      if(this.customers[i].id!=num)
     {
       customerList.push(this.customers[i]);
     }
     }
this.customers=customerList;
}
cancelButton(this)
{
  this.customers.splice(this.customer,1);
}
constructor() { }
  ngOnInit() {
  }
  onSelect(customer: customer): void {
    this.selectedcustomer = customer;
}
}