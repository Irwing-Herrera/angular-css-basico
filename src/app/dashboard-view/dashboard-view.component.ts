import { Component, OnInit } from "@angular/core";
import { ThemeService } from "../theme/theme.service";

@Component({
  selector: "app-dashboard-view",
  templateUrl: "./dashboard-view.component.html",
  styleUrls: ["./dashboard-view.component.scss"],
})
export class DashboardViewComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  public temaLight() {
    this.themeService.setLightTheme();
  }

  public temaDark() {
    this.themeService.setDarkTheme();
  }

  ngOnInit() {}
}
