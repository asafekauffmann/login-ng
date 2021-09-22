
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { HomeComponent } from './view/home/home/home.component';
import { DetailsComponent } from './view/details/details/details.component';
import { LoginComponent } from './view/login/login.component';
import { AuthService } from './view/login/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
