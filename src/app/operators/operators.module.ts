import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorsComponent } from './operators.component';
import { CombinationComponent } from './combination/combination.component';
import { Routes } from '@angular/router';
import { operatorRouterComponents, OperatorsRoutingModule } from './operators-router.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [operatorRouterComponents],
  imports: [
    CommonModule,
    OperatorsRoutingModule,
    SharedModule,
  ]
})
export class OperatorsModule { }
