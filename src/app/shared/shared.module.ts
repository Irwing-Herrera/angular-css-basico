import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { TrasladistaComponents } from "./components/trasladista-components";

@NgModule({
  imports: [CommonModule,
    //Poder usar ruteo en views
    RouterModule],
  declarations: [
    //Obtener la declaracion de todoss los compoenentees
    ...TrasladistaComponents,
  ],
  exports: [
    //Exportar la declaracion de todoss los compoenentees
    ...TrasladistaComponents,
  ],
})
export class SharedModule {}
