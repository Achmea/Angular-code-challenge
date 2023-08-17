import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensePlateInputComponent } from './license-plate-input.component';

describe('LicensePlateInputComponent', () => {
  let component: LicensePlateInputComponent;
  let fixture: ComponentFixture<LicensePlateInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicensePlateInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicensePlateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
