import { Component } from "@angular/core";
import { MenuItem } from "src/app/models";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  constructor(private _router: Router, private _loginService: LoginService) {
    this._loginService.rol.subscribe((value: string) => {
      this._rolUsuario = value;

      if (this._rolUsuario == "admin") {
        this.itemsMenu = [
          {
            icono: "house",
            ruta: "/home",
          },
          {
            icono: "archive",
            ruta: "/servicios-en-espera",
          },
          {
            icono: "people",
            ruta: "/operadores"
          },
          {
            icono: "person",
            ruta: "/configuracion",
          },
        ];
      } else if (this._rolUsuario == "operador") {
        this.itemsMenu = [
          {
            icono: "house",
            ruta: "/home",
          },
          {
            icono: "archive",
            ruta: "/servicios-disponibles",
          },
          {
            icono: "person",
            ruta: "/configuracion",
          },
        ];
      } else {
        this.itemsMenu = [
          {
            icono: "house",
            ruta: "/home",
          },
          {
            icono: "collection",
            ruta: "/servicio",
          },
          {
            icono: "list-task",
            ruta: "/seguimiento",
          },
          {
            icono: "person",
            ruta: "/configuracion",
          },
        ];
      }
    });
  }

  private _rolUsuario: string;

  public itemsMenu: MenuItem[];

  public salir() {
    this._router.navigate(["/login"]);
  }
}
