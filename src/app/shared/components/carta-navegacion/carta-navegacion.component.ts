import { Component, OnInit, Input } from '@angular/core';
import { CartaNavegacion } from '../../../models/carta-navegacion.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carta-navegacion',
  templateUrl: './carta-navegacion.component.html',
  styleUrls: ['./carta-navegacion.component.scss']
})
export class CartaNavegacionComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  @Input() datosCarta: CartaNavegacion;

  public navegar() {
    this._router.navigate(['/' + this.datosCarta.ruta]);
  }

  ngOnInit() {
  }

}
