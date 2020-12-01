import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { ENV_CONFIG } from "src/app/enviroment-config";

import { ServicioSolicitud } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SolicitudClienteService {
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

  /**
   * Crear un servicio en la raiz de los Servicios.
   * @param { ServicioSolicitud } servicio
   */
  // TODO: Revisar pertenencia de servicio
  public crearServicio(servicio: ServicioSolicitud): any {
    return this._http.post<any>(
      `${this.API_URL_SOLICTUD_SERVICIO}/servicio.json`,
      JSON.stringify(servicio)
    );
  }

  /**
   * Actualizar un servicio en la raiz de los Servicios.
   * @param { ServicioSolicitud } servicio
   */
  // TODO: Revisar pertenencia de servicio
  public actualizarServicio(servicio: ServicioSolicitud): any {
    return this._http.put<any>(
      `${this.API_URL_SOLICTUD_SERVICIO}/servicio/${servicio.id}.json`,
      JSON.stringify(servicio)
    );
  }

  /**
   * Obtener un servicio en especifico de la raiz de los Servicios.
   * @param { ServicioSolicitud } servicio
   */
  public obtenerServicio(id: string): any {
    return this._http.get<any>(
      `${this.API_URL_SOLICTUD_SERVICIO}/servicio/${id}.json`
    );
  }

  /**
   * Obtener todos los servicio de la raiz de los Servicios.
   * @param { ServicioSolicitud } servicio
   */
  // TODO: Revisar pertenencia de servicio
  public obtenerServicios(): any {
    return this._http.get<any>(
      `${this.API_URL_SOLICTUD_SERVICIO}/servicio.json`
    );
  }
}
