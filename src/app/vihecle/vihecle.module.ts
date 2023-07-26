import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellVihecleComponent } from './sell-vihecle/sell-vihecle.component';
import { AllViheclesComponent } from './all-vihecles/all-vihecles.component';
import { MyVehiclesComponent } from './my-vihecles/my-vehicles.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VihecleDetailsComponent } from './vihecle-details/vihecle-details.component';




@NgModule({
  declarations: [
    SellVihecleComponent,
    AllViheclesComponent,
    MyVehiclesComponent,
    VihecleDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule
    
  ]
})
export class VihecleModule { }
