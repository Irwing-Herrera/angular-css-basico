import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    private _router: Router
  ) { }

  public itemsMenu: MenuItem[] = [
    {
      icono: 'house',
      ruta: '/home'
    },
    {
      icono: 'collection',
      ruta: '/servicio'
    },
    {
      icono: 'list-task',
      ruta: '/seguimiento'
    },
    {
      icono: 'person',
      ruta: '/configuracion'
    }
  ];

  public salir() {
    this._router.navigate(['/login']);
  }
}
