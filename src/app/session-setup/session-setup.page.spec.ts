import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionSetupPage } from './session-setup.page';

describe('SessionSetupPage', () => {
  let component: SessionSetupPage;
  let fixture: ComponentFixture<SessionSetupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionSetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
