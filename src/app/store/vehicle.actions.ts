import { createAction, props } from '@ngrx/store';

export const setSelectedVehicleType = createAction(
  '[Vehicle Form] Set Selected Vehicle Type',
  props<{ selectedVehicleType: string }>()
);

export const setSelectedVehicleSubtype = createAction(
  '[Vehicle Form] Set Selected Vehicle Subtype',
  props<{ selectedVehicleSubtype: string }>()
);

export const setLicensePlate = createAction(
  '[Vehicle Form] Set License Plate',
  props<{ licensePlate: string }>()
);

export const updateSelectedImage = createAction(
  '[Vehicle] Update Selected Image',
  props<{ selectedVehicleType: string }>()
);

export const setAvailableSubtypes = createAction(
  '[Subtype] Set Available Subtypes',
  props<{ availableSubtypes: string[] }>()
);

export const submitForm = createAction('Submit valid form to API');
export const submitFormSuccess = createAction(
  'Submit form success',
  props<{ successMessage: any }>()
);
export const submitFormError = createAction(
  'Submit Form Error',
  props<{ errorMessage: any }>()
);
