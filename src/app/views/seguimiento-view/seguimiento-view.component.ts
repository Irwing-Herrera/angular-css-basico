import { Component, OnInit } from "@angular/core";
import { ServicioSolicitud, TimeEvent } from "src/app/models";
import { SolicitudClienteService } from "../../services/solicitud-cliente.service";
import { CartaNavegacion } from "../../models/carta-navegacion.model";

@Component({
  selector: "app-seguimiento-view",
  templateUrl: "./seguimiento-view.component.html",
  styleUrls: ["./seguimiento-view.component.scss"],
})
export class SeguimientoViewComponent implements OnInit {
  constructor(private _solicitudClienteService: SolicitudClienteService) {}

  public TimeEvents: TimeEvent[] = [
    {
      fecha: "18/11/20",
      titulo: "Evento No. 1",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquam doloremque libero enim ab accusantium a porro optio velit, facere recusandae eaque odio tenetur aperiam?",
    },
    {
      fecha: "19/11/20",
      titulo: "Evento No. 2",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquam doloremque libero enim ab accusantium a porro optio velit, facere recusandae eaque odio tenetur aperiam?",
    },
    {
      fecha: "20/11/20",
      titulo: "Evento No. 3",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquam doloremque libero enim ab accusantium a porro optio velit, facere recusandae eaque odio tenetur aperiam?",
    },
  ];
  public cartas: CartaNavegacion[] = [
    {
      icono: "./assets/iconos/en-espera.svg",
      texto: 'Servicios que se encuentran en espera de validación',
      ruta: null,
      textoBoton: null,
    },
    {
      icono: "./assets/iconos/seguimiento.svg",
      texto: 'Servicios que se encuentran activos',
      ruta: null,
      textoBoton: null,
    },
    {
      icono: "./assets/iconos/finalizados.svg",
      texto: 'Servicios que se encuentran finalizados',
      ruta: null,
      textoBoton: null,
    },
  ];
  public cartaVisible: "en espera" | "activo" | "finalizado";
  public mostrarCartas: boolean = true;
  public mostrarTabla: boolean = false;
  public mostrarTimeLine: boolean = false;

  public serviciosEnEspera: ServicioSolicitud[] = [];
  public serviciosActivos: ServicioSolicitud[] = [];
  public serviciosFinalizados: ServicioSolicitud[] = [];

  public verServicios(activo: "en espera" | "activo" | "finalizado") {
    this.cartaVisible = activo;
    this.mostrarTabla = true;
    this.mostrarCartas = false;
    this.mostrarTimeLine = false;
  }

  public mostrarTable() {
    this.mostrarCartas = true;
    this.mostrarTabla = false;
    this.mostrarTimeLine = false;
  }

  ngOnInit() {
    this._solicitudClienteService
      .obtenerServicios()
      .subscribe((respuesta: any) => {
        Object.values(respuesta).forEach((servicio: ServicioSolicitud) => {
          if (servicio.activo === "en espera")
            this.serviciosEnEspera.push(servicio);
          else if (servicio.activo === "activo")
            this.serviciosActivos.push(servicio);
          else this.serviciosFinalizados.push(servicio);
        });

        this.cartas[0].textoBoton = this.serviciosEnEspera.length
          ? "Mostrar Tabla"
          : "Sin registros";
        this.cartas[1].textoBoton = this.serviciosActivos.length
          ? "Mostrar Tabla: "
          : "Sin registros";
        this.cartas[2].textoBoton = this.serviciosFinalizados.length
          ? "Mostrar Tabla: "
          : "Sin registros";
      });
  }
}
