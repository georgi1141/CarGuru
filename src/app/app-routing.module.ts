import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllViheclesComponent } from './vihecle/all-vihecles/all-vihecles.component';
import { SellVihecleComponent } from './vihecle/sell-vihecle/sell-vihecle.component';
import { MyVehiclesComponent } from './vihecle/my-vihecles/my-vehicles.component';
import { VihecleDetailsComponent } from './vihecle/vihecle-details/vihecle-details.component';
import { EditVihecleComponent } from './vihecle/edit-vihecle/edit-vihecle.component';



const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/home',
},
{
  path: 'home',
  component: HomeComponent,
},{
  path:'shop',
  children:[
    {path:'',
    pathMatch: 'full',
    component:AllViheclesComponent},{
      path:':carId',
      component: VihecleDetailsComponent
    }
  ]
},{
  path:'sell-my-car',
  component:SellVihecleComponent
},{
  path:'my-vihecles',
 
  component:MyVehiclesComponent
},{
  path:'edit',
  children:[
    {path:'',
    pathMatch: 'full',
    component:EditVihecleComponent},{
      path:':carId',
      component: EditVihecleComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
