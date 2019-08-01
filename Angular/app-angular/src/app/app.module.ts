import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AlluserComponent } from './alluser/alluser.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule }    from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { GetalbumComponent } from './getalbum/getalbum.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AlluserComponent,
    UserComponent,
    UserDetailsComponent,
    GetalbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
