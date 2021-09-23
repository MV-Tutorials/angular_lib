import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageFuelConsumptionComponent } from './average-fuel-consumption.component';

describe('AverageFuelConsumptionComponent', () => {
  let component: AverageFuelConsumptionComponent;
  let fixture: ComponentFixture<AverageFuelConsumptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageFuelConsumptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageFuelConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
