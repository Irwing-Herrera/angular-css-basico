import { Component, OnInit } from "@angular/core";
import { ThemeService } from "../theme/theme.service";
import { ActivationEnd, Router } from "@angular/router";
import { filter, map } from "rxjs/operators";


@Component({
  selector: "app-dashboard-view",
  templateUrl: "./dashboard-view.component.html",
  styleUrls: ["./dashboard-view.component.scss"],
})
export class DashboardViewComponent implements OnInit {
  /**
   *
   * @param _themeService tema utilizado
   * @param _route nombre de pagina
   */
  constructor(private _themeService: ThemeService, private _router: Router) {
    this.getDataRoute().subscribe((data: any) => {
      this.titlePage = data.data.pagina;
    });
  }

  /**
   * Nombre de pagina activa
   */
  public titlePage: string = "Inicio";
  /**
   * Nombre de pagina activa
   */
  public activeTheme: string;
  /**
   * Visibilidad de Modal de Notificaciones
   */
  public visibilityModal: boolean = false;

  private getDataRoute() {
    return this._router.events
      .pipe(filter((eve) => eve instanceof ActivationEnd))
      .pipe(filter((eve: ActivationEnd) => eve.snapshot.firstChild === null))
      .pipe(map((eve: ActivationEnd) => eve.snapshot));
  }

  public temaLight() {
    this._themeService.setLightTheme();
    this.activeTheme = this._themeService.getActiveTheme().name;
  }

  public temaDark() {
    this._themeService.setDarkTheme();
    this.activeTheme = this._themeService.getActiveTheme().name;
  }

  public mostrarModal() {
    this.visibilityModal = !this.visibilityModal;
  }

  ngOnInit() {
    this.activeTheme = this._themeService.getActiveTheme().name;
  }
}
