import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';


@NgModule({
  declarations: [OrdersComponent],
  imports: [CommonModule, SharedModule, FormsModule, OrdersRoutingModule],
  exports: [ OrdersComponent ]
})
export class OrdersModule {}
