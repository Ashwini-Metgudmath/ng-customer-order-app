import { Component, OnInit, Input } from "@angular/core";

import { ICustomer } from "src/app/shared/interfaces";
import { SorterService } from 'src/app/core/sorter.service'

@Component({
  selector: "app-custmores-list",
  templateUrl: "./custmores-list.component.html",
  styleUrls: ["./custmores-list.component.css"]
})
export class CustmoresListComponent implements OnInit {
  filteredCustomers: any[] = [];
  orderTotal: number;
  currencyCode: string = "USD";
  private _customers : ICustomer[];

  constructor(private sorterService : SorterService) {}


  @Input() get customers() : ICustomer[]{
    return this._customers;
  }

  set customers(value:ICustomer[]){
    if(value){
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
    
  }

  calculateOrders() {
    this.orderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.orderTotal = this.orderTotal + cust.orderTotal;
    });
  }

  sort(prop:string){
    this.sorterService.sort(this.filteredCustomers, prop);
  }

  filter(data:string){
    if(data){
      this.filteredCustomers = this.customers.filter((cust: ICustomer) =>{
          return cust.name.toLocaleLowerCase().indexOf(data.toLocaleLowerCase())>-1 ||
          cust.city.toLocaleLowerCase().indexOf(data.toLocaleLowerCase())>-1 ||
          cust.orderTotal.toString().indexOf(data.toString())>-1;
      });
      this.calculateOrders();
    }else{
      this.filteredCustomers = this.customers;
    }
  }

  
  ngOnInit() {}
  
}
