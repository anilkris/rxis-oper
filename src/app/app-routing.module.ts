import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OperatorsComponent } from './operators/operators.component';
import { MaterialComponent } from './material/material.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'operators',
    component: OperatorsComponent
  },
  {
    path: 'material',
    component: MaterialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent, OperatorsComponent, MaterialComponent
];