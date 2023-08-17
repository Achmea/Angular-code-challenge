import { createReducer, on } from '@ngrx/store';
import {
  setSelectedVehicleType,
  setSelectedVehicleSubtype,
  setLicensePlate,
  setAvailableSubtypes, updateSelectedImage
} from './vehicle.actions';

export interface VehicleState {
  selectedVehicleType: string;
  selectedVehicleSubtype: string;
  licensePlate: string;
  selectedImage: string;
  availableSubtypes: string[];
}

const initialState: VehicleState = {
  selectedVehicleType: 'auto',
  selectedVehicleSubtype: 'Hatchback',
  licensePlate: '',
  selectedImage: 'assets/auto.jpg',
  availableSubtypes: []
};

export const vehicleReducer = createReducer(
  initialState,
  on(setSelectedVehicleType, (state, { selectedVehicleType }) => {
    return { ...state, selectedVehicleType };
  }),
  on(setSelectedVehicleSubtype, (state, { selectedVehicleSubtype }) => {
    return { ...state, selectedVehicleSubtype };
  }),
  on(setLicensePlate, (state, { licensePlate }) => {
    return { ...state, licensePlate };
  }),
  on(updateSelectedImage, (state, { selectedVehicleType }) => {
    const selectedImage = selectedVehicleType === 'auto' ? 'assets/auto.jpg' :
      selectedVehicleType === 'motor' ? 'assets/motor.jpg' :
        'assets/scooter.jpg';

    return { ...state, selectedImage };
  }),
  on(setAvailableSubtypes, (state, { availableSubtypes }) => {
    return { ...state, availableSubtypes };
  })
);
