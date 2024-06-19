import {Component, Input} from '@angular/core';
import {Battery} from "@interfaces/states/battery-state.interface";
import {DatePipe, DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-battery-info',
  standalone: true,
  imports: [
    DecimalPipe,
    DatePipe
  ],
  templateUrl: './battery-info.component.html',
  styleUrl: './battery-info.component.scss'
})
export class BatteryInfoComponent {
  @Input() battery: Battery | undefined;

}
