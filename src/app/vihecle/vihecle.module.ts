import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellVihecleComponent } from './sell-vihecle/sell-vihecle.component';
import { AllViheclesComponent } from './all-vihecles/all-vihecles.component';
import { MyVehiclesComponent } from './my-vihecles/my-vehicles.component';



@NgModule({
  declarations: [
    SellVihecleComponent,
    AllViheclesComponent,
    MyVehiclesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VihecleModule { }
