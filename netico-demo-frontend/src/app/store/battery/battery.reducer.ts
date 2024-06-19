import {BatteryState} from "@interfaces/states/battery-state.interface";
import {createReducer, on} from "@ngrx/store";
import {setBatteries, setSelectedBattery} from "./battery.actions";

const initialState: BatteryState = {batteries: [], selectedBattery: 1};

export const batteryReducer = createReducer(
  initialState,
  on(setBatteries, (state: BatteryState, action) => {
    return {...state, batteries: action.batteries};
  }),
  on(setSelectedBattery, (state: BatteryState, action) => {
    return {...state, selectedBattery: action.selectedBattery};
  })
);
