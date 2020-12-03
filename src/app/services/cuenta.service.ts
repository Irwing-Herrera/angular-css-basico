import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENV_CONFIG } from 'src/app/enviroment-config';
import { RespuestaActualizarPerfil, RespuestaObtenerUsuario, SolicitudActualizarPerfil } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

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

  /**
   * Actualizar informacion de usuario.
   * @param { Usuario } usuario
   */
  public actualizarPerfil(usuario: SolicitudActualizarPerfil): Observable<RespuestaActualizarPerfil> {
    return this._http.post<RespuestaActualizarPerfil>(
      `${this.API_URL_AUTENTIFICACION}update?key=${this.API_KEY}`,
      JSON.stringify(usuario)
    );
  }

  /**
   * Obtener usuario / sirve para ser invocado cuando se refresca/actualiza la pagina desde el navegador.
   * @param { string } idToken
   */
  public ObtenerUsuario(idToken: string): Observable<any> {
    return this._http.post<any>(
      `${this.API_URL_AUTENTIFICACION}lookup?key=${this.API_KEY}`,
      JSON.stringify({
        idToken: idToken
      })
    );
  }
}
