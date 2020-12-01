import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";

import { ENV_CONFIG } from "src/app/enviroment-config";
import {
  RespuestaCrearUsuario,
  RespuestaIniciarUsuario,
  SolicitudCrearUsuario,
  Usuario,
} from "../models";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(
    private _http: HttpClient,
    @Inject(ENV_CONFIG) private environment: any
  ) {}

  /**
   * Obtiene la URL del API para la seccion de Autentificacion / Registro
   */
  get API_URL_AUTENTIFICACION() {
    return this.environment.URL_AUTENTIFICACION;
  }

  /**
   * Obtiene el API KEY para la seccion de Autentificacion / Registro
   */
  get API_KEY() {
    return this.environment.API_KEY;
  }

  public cerrarSesion() {}

  /**
   * Iniciar Sesion.
   * Mas informacion: https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
   * @param { Usuario } usuario
   */
  public inciarSesion(usuario: Usuario): Observable<RespuestaIniciarUsuario> {
    const informacion: SolicitudCrearUsuario = {
      email: usuario.correo,
      password: usuario.password,
      returnSecureToken: true,
    };

    return this._http.post<RespuestaIniciarUsuario>(
      `${this.API_URL_AUTENTIFICACION}signInWithPassword?key=${this.API_KEY}`,
      JSON.stringify(informacion)
    );
  }

  /**
   * Registrar usuario.
   * Mas informacion: https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
   * @param { Usuario } usuario
   */
  public crearUsuario(usuario: Usuario): Observable<RespuestaCrearUsuario> {
    const informacion: SolicitudCrearUsuario = {
      email: usuario.correo,
      password: usuario.password,
      returnSecureToken: true,
    };

    return this._http.post<RespuestaCrearUsuario>(
      `${this.API_URL_AUTENTIFICACION}signUp?key=${this.API_KEY}`,
      JSON.stringify(informacion)
    );
  }
}
