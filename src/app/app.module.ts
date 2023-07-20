import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment.development';
import { HomeComponent } from './home/home.component';
import { UserRoutingModule } from './user/user-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    UserRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
