import {Battery} from "@interfaces/states/battery-state.interface";

export class BatteryModel {
  id?: number;
  timestamp?: string;
  voltage?: number;
  chargingCurrent?: number;
  stateOfCharge?: number;
  temperature?: number;
  status?: string;
  capacity?: number;

  constructor(battery: Battery) {
    this.id = battery.id;
    this.timestamp = battery.timestamp;
    this.voltage = battery.voltage;
    this.chargingCurrent = battery.chargingCurrent;
    this.stateOfCharge = battery.stateOfCharge;
    this.temperature = battery.temperature;
    this.status = battery.status;
    this.capacity = battery.capacity;
  }
}
