import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TrasladistaRouterModule } from "./trasladista.router.module";
import { LoginModule } from "./login/ login.module";
import { ThemeService } from "./theme/theme.service";
import { LocationService } from "./services/location.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // Poder usar animaciones en este modulo / login
    BrowserAnimationsModule,
    // Importamos el modulo de login
    LoginModule,
    // Ruteo de login y dashboard
    TrasladistaRouterModule
  ],
  providers: [ThemeService, LocationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
