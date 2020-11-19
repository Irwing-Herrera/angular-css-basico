import { Component, OnInit } from "@angular/core";
import { TimeEvent } from "src/app/models";

@Component({
  selector: "app-seguimiento-view",
  templateUrl: "./seguimiento-view.component.html",
  styleUrls: ["./seguimiento-view.component.scss"],
})
export class SeguimientoViewComponent implements OnInit {
  constructor() {}

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
    }
  ];

  ngOnInit() {}
}
