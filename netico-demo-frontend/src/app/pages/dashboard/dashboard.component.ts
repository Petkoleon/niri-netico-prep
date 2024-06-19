import {Component} from '@angular/core';
import {LogoComponent} from "@components/logo/logo.component";
import {BatteryComponent} from "@components/battery/battery.component";
import {TitleSectionComponent} from "@components/sections/title-section/title-section.component";
import {BatteriesSectionComponent} from "@components/sections/batteries-section/batteries-section.component";
import {GaugesSectionComponent} from "@components/sections/gauges-section/gauges-section.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  standalone: true,
  imports: [
    LogoComponent,
    BatteryComponent,
    TitleSectionComponent,
    BatteriesSectionComponent,
    GaugesSectionComponent
  ]
})
export class DashboardComponent {
}
