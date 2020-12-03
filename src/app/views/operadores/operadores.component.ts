import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  Operador,
  RespuestaActualizarPerfil,
  RespuestaCrearUsuario,
  SolicitudActualizarPerfil,
} from "src/app/models";
import { LoginService } from "src/app/services/login.service";
import { CuentaService } from "src/app/services/cuenta.service";
import { UsuariosService } from "src/app/services/usuarios.service";

@Component({
  selector: "app-operadores",
  templateUrl: "./operadores.component.html",
  styleUrls: ["./operadores.component.scss"],
})
export class OperadoresComponent implements OnInit {
  constructor(
    private _loginService: LoginService,
    private _cuentaService: CuentaService,
    private _usuariosService: UsuariosService
  ) {}

  public operadores: Operador[] = [];
  public mostrarTabla: boolean = true;
  public mostrarFormularioCrear: boolean = false;
  public mostrarFormularioActualizar: boolean = false;

  public formularioCrear: FormGroup;

  public mostrarFormulario() {
    this.mostrarTabla = false;
    this.mostrarFormularioCrear = true;
    this.mostrarFormularioActualizar = false;
  }

  public mostrarTablaOperadores() {
    this.operadores = [];
    this._obtenerOperadores();

    this.mostrarTabla = true;
    this.mostrarFormularioCrear = false;
    this.mostrarFormularioActualizar = false;
  }

  public crearOperador() {
    const dataOperador: Operador = {
      foto:
        "https://conexionlegalac.com.co/wp-content/uploads/765-default-avatar.png",
      nombre: this.formularioCrear.controls["nombre"].value,
      correo:
        this.formularioCrear.controls["correo"].value + "@trasladista.com",
      telefono: this.formularioCrear.controls["telefono"].value,
      estado: this.formularioCrear.controls["estado"].value,
      municipio: this.formularioCrear.controls["municipio"].value,
      colonia: this.formularioCrear.controls["colonia"].value,
    };

    this._loginService
      .crearUsuarioOperador(dataOperador)
      .subscribe((respuesta: RespuestaCrearUsuario) => {
        const dataActualizarOperador: SolicitudActualizarPerfil = {
          idToken: respuesta.idToken,
          displayName: dataOperador.nombre,
          photoUrl: dataOperador.foto,
          deleteAttribute: null,
          returnSecureToken: false,
        };

        this._cuentaService
          .actualizarPerfil(dataActualizarOperador)
          .subscribe((respuesta: RespuestaActualizarPerfil) => {
            this._usuariosService
              .agregarOperador(dataOperador)
              .subscribe(() => {
                this.mostrarTablaOperadores();
              });
          });
      });
  }

  public eliminarOperador(uid: string) {
    this._usuariosService
      .eliminarOperador(uid)
      .subscribe(() => {
        this.mostrarTablaOperadores();
      });
  }

  private _obtenerOperadores() {
    this._usuariosService
      .obtenerOperadores()
      .subscribe((operadores: Operador[]) => {
        if (operadores) {
          Object.values(operadores).forEach((operador: Operador) => {
            this.operadores.push(operador);
          });
          Object.keys(operadores).forEach((key: string, index: number) => {
            this.operadores[index].id = key;
          });
          console.log(this.operadores);
        }
      });
  }

  ngOnInit() {
    this._obtenerOperadores();

    this.formularioCrear = new FormGroup({
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
      ]),
      correo: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      telefono: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      estado: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      municipio: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      colonia: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
    });
  }
}
