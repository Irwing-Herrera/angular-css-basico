import { Routes } from "@angular/router";
import { HomeViewComponent } from "../views/hom-view/home-view.component";
import { ServiciosViewComponent } from "../views/servicios-view/servicios-view.component";
import { SeguimientoViewComponent } from '../views/seguimiento-view/seguimiento-view.component';
import { ConfiguracionViewComponent } from '../views/configuracion-view/configuracion-view.component';
import { AdminComponent } from '../views/admin/admin.component';
import { OperadoresComponent } from '../views/operadores/operadores.component';

export const dashboardRoutes: Routes = [
  { path: "home", data: { pagina: "Inicio" }, component: HomeViewComponent },
  {
    path: "servicio",
    data: { pagina: "Solicitud de Servicio" },
    component: ServiciosViewComponent,
  },
  {
    path: "seguimiento",
    data: { pagina: "Seguimiento de Servicio" },
    component: SeguimientoViewComponent,
  },
  {
    path: "configuracion",
    data: { pagina: "Configuracion de Cuenta" },
    component: ConfiguracionViewComponent,
  },
  {
    path: "operadores",
    data: { pagina: "Operadores" },
    component: OperadoresComponent,
  },
  {
    path: "admin",
    data: { pagina: "Administrador" },
    component: AdminComponent,
  },
  {
    path: "**",
    redirectTo: "home",
  },
];
