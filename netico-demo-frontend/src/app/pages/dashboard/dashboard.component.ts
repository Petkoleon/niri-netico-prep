import {Component} from '@angular/core';
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
    BatteryComponent,
    TitleSectionComponent,
    BatteriesSectionComponent,
    GaugesSectionComponent
  ]
})
export class DashboardComponent {
}
