import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import {
  setLicensePlate,
  setSelectedVehicleSubtype,
  setSelectedVehicleType,
  submitForm,
  updateSelectedImage
} from '../store/vehicle.actions';
import {
  selectSelectedImage,
  selectSelectedVehicleSubtype,
  selectSelectedVehicleType
} from '../store/vehicle.selectors';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  vehicleForm!: FormGroup;
  selectedImage$ = this.store.select(selectSelectedImage);
  selectedVehicleType$ = this.store.select(selectSelectedVehicleType);
  selectedVehicleSubtype$ = this.store.select(selectSelectedVehicleSubtype);
  submitted = false;

  constructor(private formBuilder: FormBuilder, private store: Store, private vehicleService: VehicleService) {}

  ngOnInit() {
    this.store.dispatch(setSelectedVehicleType({ selectedVehicleType: 'auto' }));

    this.initForm();
  }

  private initForm() {
    this.vehicleForm = this.formBuilder.group({
      selectedVehicleType: new FormControl('auto'),
      selectedVehicleSubtype: new FormControl('Hatchback'),
      licensePlate: new FormControl('')
    });

    this.vehicleForm.valueChanges.subscribe(formValues => {
      this.store.dispatch(setSelectedVehicleType({ selectedVehicleType: formValues.selectedVehicleType }));
      this.store.dispatch(updateSelectedImage({ selectedVehicleType: formValues.selectedVehicleType }));
      this.store.dispatch(setSelectedVehicleSubtype({ selectedVehicleSubtype: this.vehicleService.getAvailableSubtypes(formValues.selectedVehicleType)[0] }));
      if (this.vehicleForm.get('licensePlate')) {
        this.store.dispatch(setLicensePlate({ licensePlate: formValues.licensePlate }));
      }
    });
  }

  submitForm() {
    this.submitted = false;
    if(!this.vehicleForm.valid) {
      this.submitted = true;
    } else {
      this.store.dispatch(submitForm())
    }
  }

  getSelectedVehicleTypeControl(): FormControl {
    return this.vehicleForm.get('selectedVehicleType') as FormControl;
  }

  getSelectedVehicleSubtypeControl(): FormControl {
    return this.vehicleForm.get('selectedVehicleSubtype') as FormControl;
  }

  getLicensePlateControl(): FormControl {
    return this.vehicleForm.get('licensePlate') as FormControl;
  }
}
