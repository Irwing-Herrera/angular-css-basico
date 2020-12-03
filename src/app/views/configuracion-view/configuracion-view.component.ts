import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SolicitudActualizarPerfil } from "src/app/models";
import { CuentaService } from "src/app/services/cuenta.service";
import { RespuestaActualizarPerfil } from "../../models/usuario.model";

@Component({
  selector: "app-configuracion-view",
  templateUrl: "./configuracion-view.component.html",
  styleUrls: ["./configuracion-view.component.scss"],
})
export class ConfiguracionViewComponent implements OnInit {
  constructor(private _cuentaService: CuentaService) {}

  public miFormularioUpdate: FormGroup;

  public actualizarInformacion(): void {
    if (this.miFormularioUpdate.invalid) return;

    const data: SolicitudActualizarPerfil = {
      idToken: JSON.parse(localStorage.getItem("idToken")).idToken,
      displayName: this.miFormularioUpdate.controls["name"].value,
      photoUrl: this.miFormularioUpdate.controls["urlPhoto"].value,
      deleteAttribute: null,
      returnSecureToken: false,
    };

    this._cuentaService
      .actualizarPerfil(data)
      .subscribe((respuesta: RespuestaActualizarPerfil) => {
        console.log("Actualizar datos: ", respuesta);
      });
  }

  ngOnInit() {
    this.miFormularioUpdate = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      urlPhoto: new FormControl("", [
        Validators.minLength(10)
      ]),
    });
  }
}
