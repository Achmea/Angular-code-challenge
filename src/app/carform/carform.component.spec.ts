import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarformComponent } from './carform.component';

describe('CarformComponent', () => {
  let component: CarformComponent;
  let fixture: ComponentFixture<CarformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
