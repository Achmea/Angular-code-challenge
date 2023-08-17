import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { KentekenCheck } from 'rdw-kenteken-check';

@Component({
  selector: 'app-license-plate-input',
  templateUrl: './license-plate-input.component.html',
  styleUrls: ['./license-plate-input.component.css']
})
export class LicensePlateInputComponent implements OnInit {
  @Input() licensePlateControl!: FormControl;
  submitted: boolean = false;
  private kentekenCheck: KentekenCheck;

  constructor() {
    this.kentekenCheck = new KentekenCheck('');
  }

  ngOnInit(): void {
    this.licensePlateControl.valueChanges.pipe(
      switchMap(value => {
        this.submitted = false;

        const formattedValue = this.formatLicensePlate(value);
        this.licensePlateControl.setValue(formattedValue, { emitEvent: false })

        return of(formattedValue);
      })
    ).subscribe();
  }

  formatLicensePlate(value: string): string {
    return value.replace(/(\d{2})([A-Z]{2})(\d{2})/, '$1-$2-$3');
  }

  validateLicenseOnBlur() {
    const formattedValue = this.licensePlateControl.value;
    this.validateLicensePlate(formattedValue).subscribe();
  }

  validateLicensePlate(value: string): Observable<any> {
    this.kentekenCheck.kenteken = value;
    const isValid = this.kentekenCheck.matchLicense(value) && this.kentekenCheck.checkForbiddenCharacters(value);
    if (!isValid) {
      this.licensePlateControl.setErrors({ invalidLicensePlate: true });
      return of(null);
    }
    return of(true);
  }
}
