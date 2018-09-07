import { NgModule } from "@angular/core";
import { ProgressComponent } from "./progress/progress.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Grafico1Component } from "./grafico1/grafico1.component";
import { PagesComponent } from "./pages.component";
import { SharedModule } from "../shared/shared.module";
import { MaterialComponent } from "../material";
import { FullcomponentComponent } from "../shared/fullcomponent.component";
import { PAGES_ROUTES } from "./pages.routes";



@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Grafico1Component,
        PagesComponent,
        FullcomponentComponent
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
        PAGES_ROUTES
    ]
})
export class PagesModule {}