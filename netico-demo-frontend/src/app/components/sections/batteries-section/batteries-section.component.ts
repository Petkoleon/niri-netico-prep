import {Component, inject, Input, OnInit} from '@angular/core';
import {BatteryComponent} from "@components/battery/battery.component";
import {Battery} from "@interfaces/states/battery-state.interface";
import {setBatteries, setSelectedBattery} from "../../../store/battery/battery.actions";
import {selectBatteries, selectBatterySelected} from "../../../store/battery/battery.selectors";
import {BaseComponent} from "@core/directives/base-component.directive";
import {BatteryService} from "@api/services/battery.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducer";

@Component({
  selector: 'app-batteries-section',
  standalone: true,
  imports: [
    BatteryComponent
  ],
  templateUrl: './batteries-section.component.html',
  styleUrl: './batteries-section.component.scss'
})
export class BatteriesSectionComponent extends BaseComponent implements OnInit {
  @Input() slice: [number, number] = [0, 0];
  #batteryService = inject(BatteryService);
  #store = inject(Store<AppState>);
  batteries: Battery[] = [];
  batterySelected: number | undefined = undefined;

  constructor() {
    super();
  }

  ngOnInit() {
    this.watch(
      this.#batteryService.getBatteries()
        .subscribe((batteryData: Battery[]) => {
          this.#store.dispatch(setBatteries({batteries: batteryData}));
        }),
    );

    this.watch(
      this.#store.select(selectBatteries)
        .subscribe((batteryState): void => {
          this.batteries = batteryState.batteries.slice(...this.slice);
        }))

    this.watch(
      this.#store.select(selectBatterySelected).subscribe((selectedBattery: number) => {
        this.batterySelected = selectedBattery;
      })
    )
  }

  batterySelectionHandler(batteryId: number): void {
    this.#store.dispatch(setSelectedBattery({selectedBattery: batteryId}));
  }
}
