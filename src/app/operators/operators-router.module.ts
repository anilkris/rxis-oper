import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './operators.component';
import { CombinationComponent } from './combination/combination.component';

const operatorsRoutes: Routes = [
  {
    path: '',
    component: OperatorsComponent,
    children : [
      {path: 'combination',  component: CombinationComponent}
    ]
  }

];
@NgModule({
    imports: [
      RouterModule.forChild(operatorsRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class OperatorsRoutingModule { }

export const operatorRouterComponents =  [OperatorsComponent, CombinationComponent];
