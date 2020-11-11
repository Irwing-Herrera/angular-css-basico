import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Componentes
import { LoginComponent } from "./login/login.component";

const trasladistaRoutes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "",
    // Realizamos la carga de el modulo de views
    loadChildren: "./views/views.module#ViewsModule",
  },
  { path: "**", redirectTo: "login" },
];

@NgModule({
  imports: [
    // Decir que rutas son los disponibles
    RouterModule.forRoot(trasladistaRoutes)
  ],
  exports: [
    //Poder usar ruteo en views
    RouterModule,
  ],
})
export class TrasladistaRouterModule {}
