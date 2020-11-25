import { Component, Input, OnInit } from '@angular/core';
import { CartaEstadistica } from 'src/app/models';

@Component({
  selector: 'app-carta-estadistica',
  templateUrl: './carta-estadistica.component.html',
  styleUrls: ['./carta-estadistica.component.scss']
})
export class CartaEstadisticaComponent implements OnInit {

  constructor() { }

  @Input() datosCarta: CartaEstadistica;

  ngOnInit() {
  }

}
