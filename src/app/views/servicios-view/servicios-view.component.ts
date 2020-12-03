import { Component, OnInit } from "@angular/core";
import { LocationService } from "src/app/services/location.service";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { SolicitudClienteService } from "../../services/solicitud-cliente.service";
import { ServicioSolicitud } from "../../models/servicio-solicitud";
import { Router } from '@angular/router';

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
   * @param {SolicitudClienteService} _solicitudClienteService servicio Solitud de servicios
   */
  constructor(
    private _locationService: LocationService,
    private _solicitudClienteService: SolicitudClienteService,
    private _router: Router
  ) {}

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
      ]),
    });
  }

  public validarFormulario() {
    if (this.formulario.valid) {
      const solicitud: ServicioSolicitud = {
        fecha: Date.now(),
        activo: "en espera",
        lugar_origen: this.formulario.controls['origen'].value,
        lugar_destino: this.formulario.controls['destino'].value,
        auto: {
          modelo: this.formulario.controls['modelo'].value,
          ano: this.formulario.controls['ano'].value,
          comentarios: {
            lateral_izquierdo: this.formulario.controls['izquierda'].value,
            lateral_derecho: this.formulario.controls['derecha'].value,
            frontal: this.formulario.controls['frontal'].value,
            trasero: this.formulario.controls['trasera'].value,
          },
        },
      };

      this._solicitudClienteService
        .crearServicio(solicitud)
        .subscribe((algo: any) => {
          console.log("Servicio creado id: ", algo);
          // TODO: Norificar creacion de servicio
          this._router.navigate(['/seguimiento']);
        });
    }
  }

  ngOnInit() {
    this._locationService.getPosition().then((pos) => {
      console.log(`Positon: ${pos.lng} ${pos.lat}`);
    });

    this._inicializarFormulario();
  }
}
