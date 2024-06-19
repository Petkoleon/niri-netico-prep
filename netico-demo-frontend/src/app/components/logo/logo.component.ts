import { Component } from '@angular/core';
import {LOGO_PATH} from "@constants/contstants";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'poc-logo',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  readonly LOGO_PATH: string = LOGO_PATH;
}
