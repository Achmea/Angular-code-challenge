import { Component, OnInit } from '@angular/core';
import { CarpictureService } from '../services/carpicture.service';

@Component({
  selector: 'app-carpicture',
  templateUrl: './carpicture.component.html',
  styleUrls: ['./carpicture.component.css']
})
export class CarpictureComponent implements OnInit {
  vehicleType: string = '';


  constructor(
    private readonly carPicture: CarpictureService
  ) { }

  ngOnInit(): void {
    this.carPicture.source.subscribe((type) => this.vehicleType = type);
  }

}
