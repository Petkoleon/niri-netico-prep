import {Component, inject, OnInit} from '@angular/core';
import {NgxGaugeModule} from "ngx-gauge";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducer";
import {BaseComponent} from "@core/directives/base-component.directive";
import {selectBattery} from "../../../store/battery/battery.selectors";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faGear} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute, Router} from "@angular/router";
import {BatterySettingsButtonComponent} from "@components/battery-settings-button/battery-settings-button.component";
import {Battery} from "@interfaces/states/battery-state.interface";
import {BatteryInfoComponent} from "@components/battery-info/battery-info.component";

@Component({
  selector: 'app-gauges-section',
  standalone: true,
  imports: [
    NgxGaugeModule,
    FontAwesomeModule,
    BatterySettingsButtonComponent,
    BatteryInfoComponent
  ],
  templateUrl: './gauges-section.component.html',
  styleUrl: './gauges-section.component.scss'
})
export class GaugesSectionComponent extends BaseComponent implements OnInit {
  selectedBattery: Battery | undefined = undefined;
  gaugeType: 'full' | 'arch' | 'semi' = "arch";
  #store = inject(Store<AppState>);
  #router = inject(Router);
  #route = inject(ActivatedRoute);
  faSettings = faGear

  voltageMarkerConfig = {
    "0": {color: '#555', size: 4, label: '0', type: 'line'},
    "1": {color: '#555', size: 4, label: '1', type: 'line'},
    "2": {color: '#555', size: 4, label: '2', type: 'line'},
    "3": {color: '#555', size: 4, label: '3', type: 'line'},
    "4": {color: '#555', size: 4, label: '4', type: 'line'},
    "5": {color: '#555', size: 4, label: '5', type: 'line'},
    "6": {color: '#555', size: 4, label: '6', type: 'line'},
    "7": {color: '#555', size: 4, label: '7', type: 'line'},
    "8": {color: '#555', size: 4, label: '8', type: 'line'},
    "9": {color: '#555', size: 4, label: '9', type: 'line'},
    "10": {color: '#555', size: 4, label: '10', type: 'line'},
  }

  currentMarkerConfig = {
    "0": {color: '#555', size: 4, label: '0', type: 'line'},
    "1": {color: '#555', size: 4, label: '1', type: 'line'},
    "2": {color: '#555', size: 4, label: '2', type: 'line'},
    "3": {color: '#555', size: 4, label: '3', type: 'line'},
    "4": {color: '#555', size: 4, label: '4', type: 'line'},
    "5": {color: '#555', size: 4, label: '5', type: 'line'},
  }

  ngOnInit() {
    this.watch(
      this.#store.select(selectBattery).subscribe(battery => {
        this.selectedBattery = battery;
      })
    )
  }

  batterySetting() {
    this.#router.navigate([`battery/${this.selectedBattery?.id}`]);
  }
}
