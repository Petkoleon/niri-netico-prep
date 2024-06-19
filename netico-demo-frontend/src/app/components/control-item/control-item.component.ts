import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DecimalPipe} from "@angular/common";
import {BatteryState} from "@interfaces/states/battery-state.interface";

@Component({
  selector: 'app-control-item',
  standalone: true,
  imports: [
    FormsModule,
    DecimalPipe
  ],
  templateUrl: './control-item.component.html',
  styleUrl: './control-item.component.scss'
})
export class ControlItemComponent {
  @Input() item: BatteryState | undefined = undefined;
}
