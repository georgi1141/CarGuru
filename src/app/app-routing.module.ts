import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellVihecleComponent } from './vihecle/sell-vihecle/sell-vihecle.component';
import { AllViheclesComponent } from './vihecle/all-vihecles/all-vihecles.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/home',
},
{
  path: 'home',
  component: HomeComponent,

},
{
  path: 'sell-my-car',
  component: SellVihecleComponent,

},
{
  path: 'shop',
  component: AllViheclesComponent,

},
{
  path: 'my-vihecles',
  component: AllViheclesComponent,

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
