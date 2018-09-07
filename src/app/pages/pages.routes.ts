import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Grafico1Component } from "./grafico1/grafico1.component";


const pagesRoutes: Routes = [
    {
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
    
    }    
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes);