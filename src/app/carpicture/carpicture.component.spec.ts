import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpictureComponent } from './carpicture.component';

describe('CarpictureComponent', () => {
  let component: CarpictureComponent;
  let fixture: ComponentFixture<CarpictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarpictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
