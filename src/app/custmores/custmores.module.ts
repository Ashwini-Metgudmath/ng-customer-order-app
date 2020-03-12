import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustmoresComponent } from "./custmores.component";
import { CustmoresListComponent } from './custmores-list/custmores-list.component';
import { FilterTextboxComponenet } from './custmores-list/filter-textbox.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CustomersRoutingModule } from './customers-routing.module';


@NgModule({
  declarations: [CustmoresComponent, CustmoresListComponent, FilterTextboxComponenet],
  imports: [CommonModule, SharedModule, FormsModule, CustomersRoutingModule],
  exports: [ CustmoresComponent ]
})
export class CustomersModule {}
