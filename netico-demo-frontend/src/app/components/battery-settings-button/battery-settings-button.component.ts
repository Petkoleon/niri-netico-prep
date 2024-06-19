import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faGear} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {Battery} from "@interfaces/states/battery-state.interface";

@Component({
  selector: 'app-battery-settings-button',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './battery-settings-button.component.html',
  styleUrl: './battery-settings-button.component.scss'
})
export class BatterySettingsButtonComponent {
  @Input() selectedBatteryId!: number | undefined;
  @Output() onBatterySettings = new EventEmitter<boolean>();

  protected readonly faSettings = faGear;

  batterySettingsHandler() {
    this.onBatterySettings.emit(true);
  }
}
