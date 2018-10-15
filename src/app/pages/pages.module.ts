import { NgModule } from "@angular/core";
import { ProgressComponent } from "./progress/progress.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Grafico1Component } from "./grafico1/grafico1.component";
import { PagesComponent } from "./pages.component";
import { SharedModule } from "../shared/shared.module";
import { MaterialComponent } from "../material";
import { FullcomponentComponent } from "../shared/fullcomponent.component";
import { PAGES_ROUTES } from "./pages.routes";
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from "../components/incrementador/incrementador.component";
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from "../components/grafico-dona/grafico-dona.component";
import { AccountSettingsComponent } from './account-settings/account-settings.component';



@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Grafico1Component,
        PagesComponent,
        FullcomponentComponent,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Grafico1Component,
        PagesComponent,
        FullcomponentComponent
    ],
    imports: [
        SharedModule,
        MaterialComponent,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModule {}