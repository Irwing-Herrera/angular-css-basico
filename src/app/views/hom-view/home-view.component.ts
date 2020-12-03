import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Carta, CartaEstadistica } from "src/app/models";
import { CartaNavegacion } from '../../models/carta-navegacion.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: "app-home-view",
  templateUrl: "./home-view.component.html",
  styleUrls: ["./home-view.component.scss"],
})
export class HomeViewComponent implements OnInit {
  constructor(
    private _router: Router,
    private _loginService: LoginService
  ) {
    this._loginService.rol.subscribe((value: string) => this.rolUsuario = value);
  }

  public rolUsuario: string;

  public cartas: Carta[] = [
    {
      imagen: "./assets/imagenes/conductor.webp",
      titulo: "Conductores a la Medida",
      descripcion:
        "Traslado de todo tipo de vehículos, entre agencias automotrices, incluyendo autos, camionetas y SUV’s, revolvedoras de cemento, pipas, ambulancias, camiones y tractores.",
    },
    {
      imagen: "./assets/imagenes/conductar.webp",
      titulo: "Experiencia Compartida",
      descripcion:
        "Ampliamos el conocimiento y la experiencia de nuestro personal, tanto operadores como coordinadores de logística, para posteriormente compartirlo mediante entrenamientos y mejorar así las opciones de servicio.",
    },
    {
      imagen: "./assets/imagenes/presion.webp",
      titulo: "Cobertura Nacional",
      descripcion:
        "Contamos con el personal experto para sus encargos a lo largo y ancho de la República Mexicana, revisando y seleccionando las mejores rutas y la mejor opción de seguridad y velocidad en cada proyecto.",
    },
  ];

  public cartasEstadiscticas: CartaEstadistica[] = [
    {
      icono: 'calendar-check',
      color: '--color_orange',
      titulo: 'Años de Experiencia',
      cifra: '11'
    },
    {
      icono: 'truck',
      color: '--color_purple',
      titulo: 'Traslados Exitosos',
      cifra: '22 Mil'
    },
    {
      icono: 'clipboard-data',
      color: '--color_third',
      titulo: 'Kilómetros Recorridos',
      cifra: '3.3 Millones'
    }
  ];

  public cartaConNavegacion: CartaNavegacion[] = [
    {
      icono: './assets/iconos/carro-deportivo.svg',
      texto: 'Solicita tu servicio de manera rápida',
      ruta: 'servicio',
      textoBoton: 'Solicitar'
    }
  ];

  public navegarServicios() {
    this._router.navigate(['/' + this.cartaConNavegacion[0].ruta]);
  }

  ngOnInit() {}
}
