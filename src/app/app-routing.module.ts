import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutusComponent} from './aboutus/aboutus.component';
import {LoginComponent}from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MenuComponent} from './menu/menu.component';
import {SampleComponent} from './sample/sample.component';
import {HeroesComponent} from './heroes/heroes.component';
import {CustomersComponent} from './customers/customers.component';
const routes: Routes = [
  { 
    path: "login",
    component: LoginComponent
    },
   {
    path: "aboutus",
    component: AboutusComponent
   },
   {
    path: "dashboard",
    component: DashboardComponent
   },
   
   {
    path: "heroes",
    component: HeroesComponent
   },
   {
    path: "sample",
    component: SampleComponent
   },
   {
    path: "customers",
    component: CustomersComponent
   },
   {
    path : "",
    redirectTo: "/login",
    pathMatch: "full"
  }, 
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
