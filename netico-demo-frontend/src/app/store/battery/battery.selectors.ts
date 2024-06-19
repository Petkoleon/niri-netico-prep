import {AppState} from "../app.reducer";

export const selectBatteries = (state: AppState) => state.battery;
export const selectBatterySelected = (state: AppState) => state.battery.selectedBattery;
export const selectBattery = (state: AppState) => {
  return state.battery.batteries[state.battery.selectedBattery - 1];
};
