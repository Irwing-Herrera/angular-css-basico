import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  public itemsMenu: MenuItem[] = [
    {
      imagen: 'home',
      ruta: '/inicio'
    },
    {
        imagen: 'coche',
      ruta: '/servicio'
    },
    {
      imagen: 'cronograma',
      ruta: '/seguimiento'
    },
    {
      imagen: 'configuracion',
      ruta: '/configuracion'
    }
  ];

  ngOnInit() {
  }

}
