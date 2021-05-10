import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailtComponent } from './productdetailt/productdetailt.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {path:'', component :ProductlistComponent},
  {path:'', component :ProductdetailtComponent}
  // {path:' detail', component: ProductlistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
