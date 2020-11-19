import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  /**
   * Se encarga de obtener la Geolocalizacion
   * @returns {Promise<any>} latitud y longitud
   */
  public getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (resp) => {
          resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
