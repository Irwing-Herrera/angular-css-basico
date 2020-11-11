import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TrasladistaRouterModule } from "./trasladista.router.module";
import { LoginModule } from './login/ login.module';
import { ThemeService } from './theme/theme.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // Importamos el modulo de login
    LoginModule,
    // Ruteo de login y dashboard
    TrasladistaRouterModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
