import {BatteryState} from "@interfaces/states/battery-state.interface";
import {ActionReducerMap} from "@ngrx/store";
import {batteryReducer} from "./battery/battery.reducer";

export interface AppState {
  battery: BatteryState;
}

export const appReducer: ActionReducerMap<AppState> = {
  battery: batteryReducer,
};
