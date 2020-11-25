import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login.component";
@NgModule({
  declarations: [LoginComponent],
  imports: [
    //Poder ocupar ngif, ngfor, ngstyle, ngclass, etc...
    CommonModule,
    // Poder ocupar formularios
    FormsModule,
    ReactiveFormsModule,
    //Poder usar ruteo en views
    RouterModule
  ],
})
export class LoginModule {}
