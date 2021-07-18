import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Grafica1Component
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
