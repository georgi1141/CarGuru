import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellVihecleComponent } from './sell-vihecle/sell-vihecle.component';
import { AllViheclesComponent } from './all-vihecles/all-vihecles.component';
import { MyVehiclesComponent } from './my-vihecles/my-vehicles.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SellVihecleComponent,
    AllViheclesComponent,
    MyVehiclesComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    CommonModule
  ]
})
export class VihecleModule { }
