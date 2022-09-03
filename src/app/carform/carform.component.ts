import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-carform',
  templateUrl: './carform.component.html',
  styleUrls: ['./carform.component.css']
})

export class CarformComponent {
  subTypes: any;

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

  constructor() { }

  carForm = new FormGroup({
    vehicleKind: new FormControl(''),
    vehicleType: new FormControl(''),
  });

  populateSubtype() {
   if(this.carForm.controls.vehicleKind.value === 'Auto') this.subTypes = this.carSubTypes;
   if(this.carForm.controls.vehicleKind.value === 'Motor') this.subTypes = this.motorSubTypes;
   if(this.carForm.controls.vehicleKind.value === 'Scooter') {
     this.subTypes = this.scooterSubTypes;
    //  this.carForm.controls.vehicleType.disable();
   };
  }

  onSubmit() {
    console.log(this.carForm.value);

  }
}
