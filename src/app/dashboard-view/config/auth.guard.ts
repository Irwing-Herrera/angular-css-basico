import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { CuentaService } from "src/app/services/cuenta.service";
import { LoginService } from "../../services/login.service";
import { RespuestaIniciarUsuario } from 'src/app/models';

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private _cuentaService: CuentaService,
    private _loginService: LoginService,
    private _router: Router
  ) {}

  public canActivate(): boolean {
    const token: RespuestaIniciarUsuario = JSON.parse(localStorage.getItem("idToken"));

    if (token) {
      this._cuentaService
        .ObtenerUsuario(token.idToken)
        .subscribe((respuesta: any) => {
          this._loginService.user.next(respuesta.users[0]);
          localStorage.setItem("uid",respuesta.users[0].localId);

          if (respuesta.users[0].email.includes('admin@trasladista.com')) {
            this._loginService.rol.next('admin');
          } else if (respuesta.users[0].email.includes('@trasladista.com')) {
            this._loginService.rol.next('operador');
          } else {
            this._loginService.rol.next('cliente');
          }
        });
        return true;
    } else {
      //no conectado, redirigir a la página de inicio de sesión con la URL de retorno
      this._router.navigate(["/login"], { replaceUrl: true });
      localStorage.removeItem("idToken");
      return false;
    }
  }
}
