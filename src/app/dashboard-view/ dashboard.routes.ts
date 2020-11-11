import { Routes } from "@angular/router";
import { HomeViewComponent } from "../views/hom-view/home-view.component";
import { ServiciosViewComponent } from "../views/servicios-view/servicios-view.component";

export const dashboardRoutes: Routes = [
  { path: "home", component: HomeViewComponent },
  { path: "servicio", component: ServiciosViewComponent },
  {
    path: "**",
    redirectTo: "home",
  },
];
