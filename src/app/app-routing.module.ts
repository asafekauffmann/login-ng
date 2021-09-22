import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './view/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { DetailsComponent } from './view/details/details.component';
import { AuthGuard } from './guards/auth-guard';


const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'details', component: DetailsComponent, canActivate: [AuthGuard]
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
