import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {

  constructor(
    private _router: Router
  ) {}

  public opcionLogin: boolean = true;
  public miFormularioLogin: FormGroup;
  public miFormularioRegistro: FormGroup;

  public cambiarOpcion() {
    this.opcionLogin = !this.opcionLogin;
  }

  public iniciarSesion() {
    this._router.navigate(['/inicio']);
  }

  public registrar() {
    console.log("registrar");
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
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
    });
  }
}
