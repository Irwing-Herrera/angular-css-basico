import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { HttpHeaders } from "@angular/common/http";
import { catchError, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class InterceptorLoginService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    const peticionClonada = req.clone({
      headers,
    });

    return next.handle(peticionClonada).pipe(
      switchMap((response) => of<any>(response)),
      catchError(this.handleError.bind(this))
    );
  }

  /**
   * Gestiona los errores.
   *
   * @param {HttpErrorResponse} error Objeto de error por la petición
   */
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error);
  }
}
