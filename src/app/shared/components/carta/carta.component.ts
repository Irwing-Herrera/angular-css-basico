import { Component, Input, OnInit } from '@angular/core';
import { Carta } from '../../../models/carta.model';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit {

  constructor() { }

  @Input() datosDeCarta: Carta;

  ngOnInit() {
  }

}
