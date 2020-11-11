import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { TrasladistaViews } from "./trasladista-views";

import { DashboardRoutingModule } from "../dashboard-view/ dashboard-router.module";

import { IconsModule } from "../icons/icons.module";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    //Poder ocupar ngif, ngfor, ngstyle, ngclass, etc...
    CommonModule,
    //Vinculo a modulo de carpeta de shared
    SharedModule,
    //Ruteo de Paginas
    DashboardRoutingModule,
    //Iconos de Bootstrap
    IconsModule,
    //Poder usar ruteo en views
    RouterModule,
  ],
  declarations: [
    //Obtener la declaracion de todas las vistas
    ...TrasladistaViews
  ],
})
export class ViewsModule {}
