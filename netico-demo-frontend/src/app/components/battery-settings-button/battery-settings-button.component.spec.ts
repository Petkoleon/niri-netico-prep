import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatterySettingsButtonComponent } from './battery-settings-button.component';

describe('BatterySettingsButtonComponent', () => {
  let component: BatterySettingsButtonComponent;
  let fixture: ComponentFixture<BatterySettingsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatterySettingsButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatterySettingsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
