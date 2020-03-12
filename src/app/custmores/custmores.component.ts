import { Component, OnInit } from "@angular/core";

import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/data.service';

@Component({
  selector: "app-custmores",
  templateUrl: './custmores.component.html',
  styleUrls: ["./custmores.component.css"]
})
export class CustmoresComponent implements OnInit {
  title: string;
  people: ICustomer[];
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.title = "Customers";
    this.dataService.getCustomers()
    .subscribe((customers:ICustomer[]) => this.people = customers);
  }
}
