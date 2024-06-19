import {Component, Input} from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-title-section',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './title-section.component.html',
  styleUrl: './title-section.component.scss'
})
export class TitleSectionComponent {
  @Input() title: string = '';
  faBatteryThreeQuarters = faBatteryThreeQuarters;
}
