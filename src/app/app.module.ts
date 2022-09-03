import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CarformComponent } from './carform/carform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarpictureComponent } from './carpicture/carpicture.component';

@NgModule({
  declarations: [
    AppComponent,
    CarformComponent,
    CarpictureComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
