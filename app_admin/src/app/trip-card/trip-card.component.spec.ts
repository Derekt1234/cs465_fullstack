import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripCardComponent } from './trip-card.component';

describe('TripCardComponent', () => {
  let component: TripCardComponent;
  let fixture: ComponentFixture<TripCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TripCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should map legacy reef.jpg assets to a real image in the project', () => {
    component.trip = { image: 'reef.jpg' };

    expect(component.getTripImage()).toBe('assets/images/reef1.jpg');
  });
});
