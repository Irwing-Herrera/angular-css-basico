import { HomeViewComponent } from "./hom-view/home-view.component";
import { ServiciosViewComponent } from "./servicios-view/servicios-view.component";
import { DashboardViewComponent } from "../dashboard-view/dashboard-view.component";
import { SeguimientoViewComponent } from './seguimiento-view/seguimiento-view.component';
import { ConfiguracionViewComponent } from './configuracion-view/configuracion-view.component';
import { AdminComponent } from './admin/admin.component';
import { OperadoresComponent } from './operadores/operadores.component';

export const TrasladistaViews = [
  DashboardViewComponent,
  HomeViewComponent,
  ServiciosViewComponent,
  SeguimientoViewComponent,
  ConfiguracionViewComponent,
  OperadoresComponent,
  AdminComponent
];
