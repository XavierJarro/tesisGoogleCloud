import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalidadComponent } from './finalidad.component';

describe('FinalidadComponent', () => {
  let component: FinalidadComponent;
  let fixture: ComponentFixture<FinalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
