import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialComponent } from './material';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafico1Component } from './pages/grafico1/grafico1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MenuItems } from './shared/menu-items/menu-items';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { FullcomponentComponent } from './shared/fullcomponent.component';
import { AppRoutes } from './app.routing';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    ProgressComponent,
    Grafico1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    FullcomponentComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponent,
    RouterModule.forRoot(AppRoutes, {useHash: true}),
    HttpClientModule,
    FormsModule 
  ],
  providers: [MenuItems],
  bootstrap: [AppComponent]
})
export class AppModule { }
