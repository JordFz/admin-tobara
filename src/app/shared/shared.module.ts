import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { FullcomponentComponent } from "./fullcomponent.component";
import { MaterialComponent } from "../material";
import { MenuItems } from "./menu-items/menu-items";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "../app.routing";
import { PAGES_ROUTES } from "../pages/pages.routes";



@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent
        //FullcomponentComponent
    ],
    exports: [
         HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent
        //FullcomponentComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialComponent,
        HttpClientModule,
        PAGES_ROUTES,
        RouterModule
    ],
    providers: [MenuItems]
})
export class SharedModule{}