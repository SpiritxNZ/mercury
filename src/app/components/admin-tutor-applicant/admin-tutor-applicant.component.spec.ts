import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTutorApplicantComponent } from './admin-tutor-applicant.component';

describe('AdminTutorApplicantComponent', () => {
  let component: AdminTutorApplicantComponent;
  let fixture: ComponentFixture<AdminTutorApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTutorApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTutorApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
