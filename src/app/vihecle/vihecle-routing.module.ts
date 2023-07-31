import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllViheclesComponent } from './all-vihecles/all-vihecles.component';




const routes: Routes = [
  {path: 'shop', component: AllViheclesComponent}
 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { } 
 