import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {

  constructor(
    private _router: Router
  ) { }

  public navegarConfiguracion() {
    this._router.navigate(['/configuracion']);
  }
}
