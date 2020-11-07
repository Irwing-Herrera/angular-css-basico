import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TrasladistaViews } from "./views/trasladista-views";
import { TrasladistaComponents } from "./components/trasladista-components";
import { TrasladistaRouterModule } from "./trasladista.router.module";
import { IconsModule } from './icons/icons.module';

@NgModule({
  declarations: [AppComponent, ...TrasladistaViews, ...TrasladistaComponents],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TrasladistaRouterModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
