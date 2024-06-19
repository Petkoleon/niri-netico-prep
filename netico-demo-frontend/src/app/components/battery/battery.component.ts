import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlItemComponent} from "@components/control-item/control-item.component";
import {BaseComponent} from "@core/directives/base-component.directive";
import {JsonPipe, KeyValuePipe, NgOptimizedImage} from "@angular/common";
import {ControlButtonComponent} from "@components/control-button/control-button.component";
import {Battery} from "@interfaces/states/battery-state.interface";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-battery',
  standalone: true,
  imports: [
    ControlItemComponent,
    KeyValuePipe,
    ControlButtonComponent,
    FaIconComponent,
    NgOptimizedImage,
    JsonPipe
  ],
  templateUrl: './battery.component.html',
  styleUrl: './battery.component.scss',
})
export class BatteryComponent extends BaseComponent implements OnInit {
  @Input() battery: Battery | undefined;
  @Input() batterySelected: boolean = false;
  @Output() setSelectedBattery = new EventEmitter<number>();

  constructor() {
    super();
  }

  ngOnInit() {
  }

  batterySelectionHandler() {
    this.setSelectedBattery.emit(this.battery?.id);
  }
}
