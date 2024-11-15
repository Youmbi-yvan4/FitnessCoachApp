import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoachDetailsPage } from './coach-details.page';

describe('CoachDetailsPage', () => {
  let component: CoachDetailsPage;
  let fixture: ComponentFixture<CoachDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
