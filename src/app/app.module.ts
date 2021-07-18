import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Modulos
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
