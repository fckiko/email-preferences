import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPreferenceComponent } from './email-preference.component';

describe('EmailPreferenceComponent', () => {
  let component: EmailPreferenceComponent;
  let fixture: ComponentFixture<EmailPreferenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailPreferenceComponent]
    });
    fixture = TestBed.createComponent(EmailPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
