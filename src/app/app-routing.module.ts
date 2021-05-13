import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailtComponent } from './product/productdetailt/productdetailt.component';
import { ProductlistComponent } from './product/productlist/productlist.component';

const routes: Routes = [
  {path:'', component :ProductlistComponent},
  {path:'detail', component :ProductdetailtComponent}
  // {path:' detail', component: ProductlistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
