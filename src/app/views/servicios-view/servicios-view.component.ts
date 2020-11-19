import { Component, OnInit } from "@angular/core";
import { LocationService } from "src/app/services/location.service";
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: "app-servicios-view",
  templateUrl: "./servicios-view.component.html",
  styleUrls: ["./servicios-view.component.scss"],
})
export class ServiciosViewComponent implements OnInit {
  /**
   * Importamos servicios o otras cosas al componente.
   *
   * @param {LocationService} _locationService servicio de obtencion de geolocalizacion
   */
  constructor(private _locationService: LocationService) {}

  public formulario: FormGroup;

  /**
   * Se crean input a validar en formulario
   */
  private _inicializarFormulario() {
    this.formulario = new FormGroup({
      origen: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(40),
      ]),
      destino: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(40),
      ]),
      modelo: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      ano: new FormControl(1990, [
        Validators.required,
        Validators.minLength(1990),
        Validators.maxLength(2020),
      ]),
      izquierda: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(40),
      ]),
      derecha: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(40),
      ]),
      frontal: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(40),
      ]),
      trasera: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(40),
      ])
    });
  }

  public validarFormulario() {
    if (this.formulario.valid) {
      console.log("Form valido");
    }
  }

  ngOnInit() {
    this._locationService.getPosition().then((pos) => {
      console.log(`Positon: ${pos.lng} ${pos.lat}`);
    });

    this._inicializarFormulario();
  }
}
