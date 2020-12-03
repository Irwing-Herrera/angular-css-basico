import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartaNavegacion } from '../../../models/carta-navegacion.model';

@Component({
  selector: 'app-carta-navegacion',
  templateUrl: './carta-navegacion.component.html',
  styleUrls: ['./carta-navegacion.component.scss']
})
export class CartaNavegacionComponent {

  @Input() datosCarta: CartaNavegacion;
	@Output() changeStatusMenu = new EventEmitter<boolean>();

  public navegar() {
    this.changeStatusMenu.emit();
  }
}
