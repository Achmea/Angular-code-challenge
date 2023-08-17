import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { VehicleTypeSelectorComponent } from './vehicle-type-selector/vehicle-type-selector.component';
import { VehicleSubtypeSelectorComponent } from './vehicle-subtype-selector/vehicle-subtype-selector.component';
import { LicensePlateInputComponent } from './license-plate-input/license-plate-input.component';
import { PictureComponent } from './picture/picture.component';
import { vehicleReducer } from './store/vehicle.reducer';
import { VehicleEffects } from './store/vehicle.effects';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    VehicleTypeSelectorComponent,
    VehicleSubtypeSelectorComponent,
    LicensePlateInputComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({vehicle: vehicleReducer}),
    EffectsModule.forRoot([VehicleEffects]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
