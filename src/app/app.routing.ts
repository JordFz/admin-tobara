import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafico1Component } from './pages/grafico1/grafico1.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

export const AppRoutes: Routes = [{
      path: '',
      component: PagesComponent,
      children: [
        {
            path: 'dashboard',
            component: DashboardComponent
        },
        {
            path: 'progress',
            component: ProgressComponent
        },
        {
            path: 'graficas1',
            component: Grafico1Component
        },
        {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
        }
      ]
    },
    
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    
    {
        path: '**',
        component: NopagefoundComponent
    }
];

