import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './view/login/login.component';
import { HomeComponent } from './view/home/home/home.component';
import { DetailsComponent } from './view/details/details/details.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'details', component: DetailsComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
