import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvailablityComponent } from '.';


const routes: Routes = [
 {
  	path:'',
  	redirectTo:'availablity',
  	pathMatch:'full'
  },
  {
    path: 'availablity',
    component: AvailablityComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvailablityRoutingModule { }
