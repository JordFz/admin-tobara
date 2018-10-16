import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Grafico1Component } from "./grafico1/grafico1.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";


const pagesRoutes: Routes = [
    {
        path: '',
          component: PagesComponent,
          children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: { titulo: 'DashBoard', descripcion: 'Pagina de pruebas y desarrollo' }
            },
            {
                path: 'progress',
                component: ProgressComponent,
                data: { titulo: 'Barra de progreso', descripcion: 'Pagina con las barras de progreso' }
            },
            {
                path: 'graficas1',
                component: Grafico1Component,
                data: { titulo: 'Graficas test', descripcion: 'Graficos en desarrollo y muestra' }
            },
            {
                path: 'promesas',
                component: PromesasComponent,
                data: { titulo: 'RxJs lib promesas', descripcion: 'Librerias para trabajar datos y eventos en tiempo real' }
            },
            {
                path: 'rxjs',
                component: RxjsComponent,
                data: { titulo: 'RxJs lib observables', descripcion: 'Librerias que esperan datos de alguna Api' }
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