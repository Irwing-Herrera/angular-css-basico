import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { FadeAnimation } from "../shared/animations/fade.animation";
import { LoginService } from "../services/login.service";
import {
  RespuestaCrearUsuario,
  RespuestaIniciarUsuario,
  Usuario,
} from "../models";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  animations: [FadeAnimation],
})
export class LoginComponent implements OnInit {
  constructor(private _router: Router, private _loginService: LoginService) {}

  public opcionLogin: boolean = true;
  public miFormularioLogin: FormGroup;
  public miFormularioRegistro: FormGroup;

  public cambiarOpcion(): void {
    this.opcionLogin = !this.opcionLogin;
  }

  public iniciarSesion(): void {
    if (this.miFormularioLogin.invalid) return;

    const usuario: Usuario = {
      correo: this.miFormularioLogin.controls["email"].value,
      password: this.miFormularioLogin.controls["password"].value,
    };

    this._loginService
      .inciarSesion(usuario)
      .subscribe((respuesta: RespuestaIniciarUsuario) => {
        localStorage.setItem("idToken", JSON.stringify(respuesta));
        this._router.navigate(["/"]);
      });
  }

  public registrar(): void {
    if (this.miFormularioRegistro.invalid) return;

    const nuevoUsuario: Usuario = {
      nombre: this.miFormularioRegistro.controls["nombre"].value,
      correo: this.miFormularioRegistro.controls["email"].value,
      password: this.miFormularioRegistro.controls["password"].value,
    };

    this._loginService
      .crearUsuario(nuevoUsuario)
      .subscribe((respuesta: RespuestaCrearUsuario) => {
        this.opcionLogin = !this.opcionLogin;
      });
  }

  ngOnInit() {
    this.miFormularioLogin = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
    });
    this.miFormularioRegistro = new FormGroup({
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ]),
      telefono: new FormControl("", [
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
    });
  }
}
