import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { dashboardRoutes } from "./ dashboard.routes";
import { DashboardViewComponent } from "./dashboard-view.component";
import { IconsModule } from "../icons/icons.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: "",
    component: DashboardViewComponent,
    children: dashboardRoutes,
  },
];

@NgModule({
  imports: [
    // Decir que rutas son los disponibles
    RouterModule.forChild(routes),
    // Ocupar iconos de Bootstrap
    IconsModule,
  ],
  exports: [
    //Poder usar ruteo en views
    RouterModule,
  ],
})
export class DashboardRoutingModule {}
