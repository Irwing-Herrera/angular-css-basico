import { NgModule } from "@angular/core";
import { RouterLink, RouterModule, Routes } from "@angular/router";
import { InicioViewComponent } from './views/inicio-view/inicio-view.component';

import { LoginComponent } from "./views/login/login.component";

const trasladistaRoutes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "inicio",
    component: InicioViewComponent,
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(trasladistaRoutes)],
  providers: [RouterLink],
  exports: [RouterModule],
})
export class TrasladistaRouterModule {}
