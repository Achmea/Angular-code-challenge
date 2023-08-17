import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import { VehicleState } from './store/vehicle.reducer';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  getAvailableSubtypes(selectedType: string): string[] {
    switch (selectedType) {
      case 'auto':
        return ['Hatchback', 'Sedan', 'Station', 'Cabriolet', 'Coupé', 'Multi Purpose Vehicle (MVP)', 'Terreinauto'];
      case 'motor':
        return ['All-road', 'Naked', 'Enduro', 'Race', 'Toermotor', 'Chopper', 'Zijspan'];
      case 'scooter':
      default:
        return [];
    }
  }

  submitForm(formState: VehicleState) {
    let successMessage: any = {
      status: 200
    }

    console.log(formState);

    return of(successMessage);
  }
}
