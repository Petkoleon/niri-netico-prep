import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteriesSectionComponent } from './batteries-section.component';

describe('BatteriesSectionComponent', () => {
  let component: BatteriesSectionComponent;
  let fixture: ComponentFixture<BatteriesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatteriesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatteriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
