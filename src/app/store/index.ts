import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { vehicleReducer, VehicleState } from './vehicle.reducer';
import { VehicleEffects } from './vehicle.effects';

export interface AppState {
  vehicle: VehicleState;
}

export const reducers: ActionReducerMap<AppState> = {
  vehicle: vehicleReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

// Additional setup for the store if needed
export const effects: any[] = [VehicleEffects];
