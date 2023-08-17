import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { selectAvailableSubtypes, selectSelectedVehicleType } from '../store/vehicle.selectors';
import { setSelectedVehicleSubtype } from '../store/vehicle.actions';

@Component({
  selector: 'app-vehicle-subtype-selector',
  templateUrl: './vehicle-subtype-selector.component.html',
  styleUrls: ['./vehicle-subtype-selector.component.css']
})
export class VehicleSubtypeSelectorComponent {
  @Input() vehicleSubtypeControl!: FormControl;
  @Input() selectedVehicleSubtype!: any;
  availableSubtypes$ = this.store.select(selectAvailableSubtypes);
  selectedVehicleType$ = this.store.select(selectSelectedVehicleType);
  constructor(private store: Store) {}

  onSelectedVehicleSubtypeChange(subtype: string) {
    this.store.dispatch(setSelectedVehicleSubtype({ selectedVehicleSubtype: subtype }));
  }
}
