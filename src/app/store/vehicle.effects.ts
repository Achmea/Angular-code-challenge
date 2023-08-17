import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { catchError, from, of, switchMap, withLatestFrom } from 'rxjs';
import {
  setSelectedVehicleType,
  setAvailableSubtypes, submitForm, submitFormSuccess, submitFormError
} from './vehicle.actions';
import { VehicleService } from '../vehicle.service';
import { VehicleState } from './vehicle.reducer';
import { selectVehicleState } from './vehicle.selectors';

@Injectable()
export class VehicleEffects {

  updateAvailableSubtypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setSelectedVehicleType),
      map(action => {
        const selectedType = action.selectedVehicleType;
        const availableSubtypes = this.vehicleService.getAvailableSubtypes(selectedType);

        return setAvailableSubtypes({ availableSubtypes });
      })
    )
  );

  submitForm$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(submitForm),
        withLatestFrom(this.store.select(selectVehicleState)),
        switchMap(([action, formState]) => from(this.vehicleService.submitForm(formState))),
        map(statusMessage => submitFormSuccess(statusMessage)),
        catchError(error => of(submitFormError(error)))
      )
  )
  constructor(private actions$: Actions, private vehicleService: VehicleService, private store: Store<VehicleState>) {}
}
