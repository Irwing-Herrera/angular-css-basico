import { Injectable } from "@angular/core";

import { Theme } from "./interfaces";
import { light } from "./light.theme";
import { dark } from "./dark.theme";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private active: Theme = light;
  private availableThemes: Theme[] = [light, dark];

  /**
   * Obtener temas disponibles
   */
  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  /**
   * Obtener tema activo
   */
  getActiveTheme(): Theme {
    return this.active;
  }

  /**
   * Saber si el tema activo es dark
   */
  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }

  /**
   * Establecer tema dark como activo
   */
  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  /**
   * Establecer tema light como activo
   */
  setLightTheme(): void {
    this.setActiveTheme(light);
  }

  /**
   * Establecer tema activo mediante parametro
   */
  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
