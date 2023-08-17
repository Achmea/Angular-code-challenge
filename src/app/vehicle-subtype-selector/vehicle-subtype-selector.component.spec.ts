import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSubtypeSelectorComponent } from './vehicle-subtype-selector.component';

describe('VehicleSubtypeSelectorComponent', () => {
  let component: VehicleSubtypeSelectorComponent;
  let fixture: ComponentFixture<VehicleSubtypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleSubtypeSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleSubtypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
