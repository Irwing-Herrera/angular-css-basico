import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TrasladistaRouterModule } from "./trasladista.router.module";
import { LoginModule } from "./login/ login.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { InterceptorLoginService } from "./services/interceptors/interceptor-login.service";
import { environment } from "../environments/environment";
import { ENV_CONFIG } from "./enviroment-config";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // Poder usar animaciones en este modulo / login
    BrowserAnimationsModule,
    // Importamos el modulo de login
    LoginModule,
    // Ruteo de login y dashboard
    TrasladistaRouterModule,
    // Realizar petciciones Http
    HttpClientModule,
  ],
  providers: [
    InterceptorLoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorLoginService,
      multi: true,
    },
    {
      provide: ENV_CONFIG,
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
