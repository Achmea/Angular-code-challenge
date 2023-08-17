import { createFeatureSelector, createSelector } from '@ngrx/store';

import { VehicleState } from './vehicle.reducer';

export const selectVehicleState = createFeatureSelector<VehicleState>('vehicle');

export const selectSelectedVehicleType = createSelector(
  selectVehicleState,
  (state: VehicleState) => state.selectedVehicleType
);

export const selectSelectedVehicleSubtype = createSelector(
  selectVehicleState,
  (state: VehicleState) => state.selectedVehicleSubtype
);

export const selectSelectedImage = createSelector(
  selectSelectedVehicleType , selectedVehicleType => {
    return selectedVehicleType === 'auto' ? 'assets/auto.jpg' :
      selectedVehicleType === 'motor' ? 'assets/motor.jpg' :
        'assets/scooter.jpg';
  }
);

export const selectAvailableSubtypes = createSelector(
  selectVehicleState,
  (state: VehicleState) => {
    return state.availableSubtypes
  }
);
