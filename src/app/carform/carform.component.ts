import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-carform',
  templateUrl: './carform.component.html',
  styleUrls: ['./carform.component.css']
})
export class CarformComponent {

  constructor() { }

  carForm = new FormGroup({
    vehicleKind: new FormControl(''),
    vehicleType: new FormControl(''),
  });

  onSubmit() {
    console.log(this.carForm.value);

  }
}
