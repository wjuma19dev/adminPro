import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { Page404Component } from '../page404/page404.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'grafica1',
        component: Grafica1Component
      }
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
