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
   * Obtener id de usuario
   */
  private _uid: string = localStorage.getItem("uid");

  /**
   * Crear un servicio.
   * @param { ServicioSolicitud } servicio
   */
  public crearServicio(servicio: ServicioSolicitud): any {
    return this._http.post<any>(
      `${this.API_URL_SOLICTUD_SERVICIO}/servicios/${this._uid}.json`,
      JSON.stringify(servicio)
    );
  }

  /**
   * Actualizar el estado de un servicio.
   * @param { ServicioSolicitud } servicio
   */
  public actualizarServicio(servicio: ServicioSolicitud): any {
    return this._http.put<any>(
      `${this.API_URL_SOLICTUD_SERVICIO}/servicios/${this._uid}/${servicio.id}.json`,
      JSON.stringify(servicio)
    );
  }

  /**
   * Obtener un servicio.
   * @param { ServicioSolicitud } servicio
   */
  public obtenerServicio(id: string): any {
    return this._http.get<any>(
      `${this.API_URL_SOLICTUD_SERVICIO}/servicios/${this._uid}/${id}.json`
    );
  }

  /**
   * Obtener todos los servicios.
   * @param { ServicioSolicitud } servicio
   */
  public obtenerServicios(): any {
    return this._http.get<any>(
      `${this.API_URL_SOLICTUD_SERVICIO}/servicios/${this._uid}.json`
    );
  }
}
