import {Injectable} from '@angular/core';
import {HttpClientWrapper} from '@api/client/http-client-wrapper';
import {map, Observable} from 'rxjs';
import {BatteryModel} from "@models/battery.model";
import {Battery} from "@interfaces/states/battery-state.interface";

@Injectable({providedIn: 'root'})
export class BatteryService {
  readonly SERVICE_ROOT: string = 'battery';

  constructor(private httpClientWrapper: HttpClientWrapper) {
  }

  getBatteries(): Observable<Battery[]> {
    return this.httpClientWrapper.executeGET<Battery[]>(`/battery`)
      .pipe(
        map((batteryData: Battery[]) => {
          return batteryData.map(battery => new BatteryModel(battery))
        })
      )
  }

  getBattery(batteryId: number): Observable<Battery> {
    return this.httpClientWrapper.executeGET<Battery>(`/${this.SERVICE_ROOT}/${batteryId}`)
      .pipe(
        map((batteryData: Battery) => {
          return new BatteryModel(batteryData)
        })
      )
  }

  updateBattery(batteryId: number, battery: Battery): Observable<Battery> {
    return this.httpClientWrapper.executePUT<{ message: string, battery: Battery }>(`/${this.SERVICE_ROOT}/${batteryId}`, battery)
      .pipe(
        map((batteryData: { message: string, battery: Battery }) => {
          return new BatteryModel(batteryData.battery);
        })
      )
  }
}
