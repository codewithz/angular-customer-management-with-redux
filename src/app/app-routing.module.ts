import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import { CustomerDisplayComponent } from './customers/customer-display/customer-display.component';

const routes: Routes = [
  {path:'add',component:CustomerAddComponent},
  {path:'display',component:CustomerDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
