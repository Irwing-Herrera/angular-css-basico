import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENV_CONFIG } from 'src/app/enviroment-config';
import { Operador } from 'src/app/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(
    private _http: HttpClient,
    @Inject(ENV_CONFIG) private environment: any
  ) {}

  /**
   * Obtiene la URL para el levantamiento de servicios
   */
  get API_URL_SOLICTUD_SERVICIO() {
    return this.environment.API_URL_SOLICTUD_SERVICIO;
  }

  /**
   * Obtiene el API KEY para la seccion de Autentificacion / Registro
   */
  get API_KEY() {
    return this.environment.API_KEY;
  }

  public agregarOperador(operador: Operador): any {
    return this._http.post<any>(
      `${this.API_URL_SOLICTUD_SERVICIO}/operadores.json`,
      JSON.stringify(operador)
    );
  }

  public obtenerOperadores(): Observable<Operador[]> {
    return this._http.get<Operador[]>(
      `${this.API_URL_SOLICTUD_SERVICIO}/operadores.json`
    );
  }

  public eliminarOperador(uid: string): any {
    return this._http.delete<any>(
      `${this.API_URL_SOLICTUD_SERVICIO}/operadores/${uid}.json`
    );
  }
}
