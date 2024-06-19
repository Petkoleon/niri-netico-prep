import {Routes} from '@angular/router';
import {DashboardComponent} from "@pages/dashboard/dashboard.component";
import {BatterySettingsComponent} from "@pages/battery-settings/battery-settings.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    title: '[Demo] - Dashboard',
    component: DashboardComponent,
  },
  {path: 'battery/:id', component: BatterySettingsComponent, title: '[DEMO] - Battery Settings'},
];
