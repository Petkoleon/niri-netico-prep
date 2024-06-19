import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugesSectionComponent } from './gauges-section.component';

describe('GaugesSectionComponent', () => {
  let component: GaugesSectionComponent;
  let fixture: ComponentFixture<GaugesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaugesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaugesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
