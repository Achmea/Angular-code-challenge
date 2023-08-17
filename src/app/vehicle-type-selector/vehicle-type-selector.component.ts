import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vehicle-type-selector',
  templateUrl: './vehicle-type-selector.component.html',
  styleUrls: ['./vehicle-type-selector.component.css']
})
export class VehicleTypeSelectorComponent {
  @Input() vehicleTypeControl!: FormControl;
  @Input() selectedVehicleType!: any;
  vehicleTypes: string[] = ['auto', 'motor', 'scooter'];
}
