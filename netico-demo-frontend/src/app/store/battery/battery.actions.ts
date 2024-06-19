import {createAction, props} from "@ngrx/store";
import {Battery} from "@interfaces/states/battery-state.interface";

export const setBatteries = createAction(
  '[Battery] Set Batteries',
  props<{batteries: Battery[]}>()
);

export const setSelectedBattery = createAction(
  '[Battery] Set Selected Battery',
  props<{selectedBattery: number}>()
)
