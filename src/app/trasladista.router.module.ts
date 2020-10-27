import { NgModule } from "@angular/core";
import { RouterLink, RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./views/login/login.component";
import { InicioComponent } from './views/inicio/inicio.component';

const trasladistaRoutes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "inicio",
    component: InicioComponent,
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(trasladistaRoutes)],
  providers: [RouterLink],
  exports: [RouterModule],
})
export class TrasladistaRouterModule {}
