import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';


import { HomeComponent } from './home/home.component';
import { UserRoutingModule } from './user/user-routing.module';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { VihecleModule } from './vihecle/vihecle.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    UserRoutingModule,
    FormsModule,
    CoreModule,
    VihecleModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
