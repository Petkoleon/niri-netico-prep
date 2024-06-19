import {Component, inject, OnInit} from '@angular/core';
import {TitleSectionComponent} from "@components/sections/title-section/title-section.component";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducer";
import {BaseComponent} from "@core/directives/base-component.directive";
import {BatteryService} from "@api/services/battery.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Battery} from "@interfaces/states/battery-state.interface";
import {DecimalPipe, JsonPipe, KeyValuePipe} from "@angular/common";
import {NumberInputComponent} from "@components/number-input/number-input.component";

@Component({
  selector: 'app-battery-settings',
  standalone: true,
  imports: [
    TitleSectionComponent,
    KeyValuePipe,
    JsonPipe,
    DecimalPipe,
    NumberInputComponent,
    RouterLink
  ],
  templateUrl: './battery-settings.component.html',
  styleUrl: './battery-settings.component.scss'
})
export class BatterySettingsComponent extends BaseComponent implements OnInit {
  #route = inject(ActivatedRoute);
  #store = inject(Store<AppState>);
  #batteryService = inject(BatteryService);
  battery: Battery;
  title: string = "Battery Settings";

  ngOnInit() {
    const batteryId = this.#route.snapshot.paramMap.get('id');
    this.watch(
      this.#batteryService.getBattery(batteryId ? +batteryId : 1).subscribe((battery => {
        this.battery = battery;
        this.title = `Settings for Battery ${batteryId}`;
      }))
    )
  }

  handleValueSubmitted(event: { label: string, numberInput: number }): void {
    const updateBattery = {...this.battery, [event.label.toLowerCase()]: event.numberInput};
    this.watch(
      this.#batteryService.updateBattery(this.battery.id!, updateBattery).subscribe({
        next: (response: Battery) => {
          this.battery = response;
        }
      }));
  }
}
