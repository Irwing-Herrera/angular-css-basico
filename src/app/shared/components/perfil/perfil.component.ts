import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RespuestaObtenerUsuario } from "src/app/models";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.component.html",
  styleUrls: ["./perfil.component.scss"],
})
export class PerfilComponent {
  constructor(private _loginService: LoginService, private _router: Router) {
    this._loginService.user.subscribe((respuesta) => (this.user = respuesta));
    this._loginService.rol.subscribe((respuesta) => respuesta ? this.rol = respuesta : '');
  }

  public user: RespuestaObtenerUsuario;
  public rol: string;

  public navegarConfiguracion() {
    this._router.navigate(["/configuracion"]);
  }
}
