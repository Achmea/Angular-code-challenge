import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarpictureService } from '../services/carpicture.service';
import {KentekenCheck} from 'rdw-kenteken-check';

@Component({
  selector: 'app-carform',
  templateUrl: './carform.component.html',
  styleUrls: ['./carform.component.css']
})

export class CarformComponent {
  vehiclePlate?: string = '';
  subTypes: any;
  vehiclePlateValid: boolean = true;

  carSubTypes = [
    'Hatchback',
    'Sedan',
    'Station',
    'Cabriolet',
    'Coupé',
    'Multi Purpose Vehicle (MVP)',
    'Terreinauto'
  ];

  motorSubTypes = [
    'All-road',
    'Naked',
    'Enduro',
    'Race',
    'Toermotor',
    'Chopper',
    'Zijspan',
  ];

  scooterSubTypes = [
    'geen subtype aanwezig'
  ];

  constructor(
    private readonly carPicture: CarpictureService,
  ) { }

  carForm = new FormGroup({
    vehicleKind: new FormControl('', Validators.required),
    vehicleType: new FormControl('', Validators.required),
    vehiclePlate: new FormControl('', Validators.required)
  });

  populateSubtype() {
   if(this.carForm.controls.vehicleKind.value === 'Auto') {
    this.subTypes = this.carSubTypes
    this.carPicture.changePicture('auto');
  };

   if(this.carForm.controls.vehicleKind.value === 'Motor') {
    this.subTypes = this.motorSubTypes
    this.carPicture.changePicture('motor');};

   if(this.carForm.controls.vehicleKind.value === 'Scooter') {
     this.subTypes = this.scooterSubTypes;
     this.carPicture.changePicture('scooter');
    //  this.carForm.controls.vehicleType.disable();
   };
  }

  formatVehiclePlate() {
    const vehiclePlate = (this.carForm.controls.vehiclePlate.value)?.toString();
    if(!(vehiclePlate)?.includes('-')) {
      const vehiclePlateFormated = (vehiclePlate)?.match(/(..?)/g)?.join('-').toUpperCase();

      this.carForm.patchValue({
          vehiclePlate: vehiclePlateFormated
        })

        this.vehiclePlate = vehiclePlateFormated;
    }
    this.checkVehiclePlate();
  }

  checkVehiclePlate() {
    if(this.carForm.controls.vehiclePlate.value) {
      const checkPlate = new KentekenCheck(this.carForm.controls.vehiclePlate.value?.toString());
      // !checkPlate.valid ? this.vehiclePlateValid = false : '';s
    }
  }

  onSubmit() {
    this.carForm.patchValue({
      vehiclePlate: this.vehiclePlate
    })
  }
}
