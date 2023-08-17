import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTypeSelectorComponent } from './vehicle-type-selector.component';

describe('VehicleTypeSelectorComponent', () => {
  let component: VehicleTypeSelectorComponent;
  let fixture: ComponentFixture<VehicleTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleTypeSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
