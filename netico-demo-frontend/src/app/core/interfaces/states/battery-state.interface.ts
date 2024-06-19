export interface BatteryState {
  batteries: Battery[];
  selectedBattery: number;
}

export interface Battery {
  [key: string]: any;
  id?: number;
  timestamp?: string;
  voltage?: number;
  chargingCurrent?: number;
  stateOfCharge?: number;
  temperature?: number;
  status?: string;
  capacity?: number;
}
