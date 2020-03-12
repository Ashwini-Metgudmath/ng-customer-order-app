import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustmoresComponent } from './custmores.component';


const routes: Routes = [
    {path:'', component: CustmoresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
