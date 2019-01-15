import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTutorStatusComponent } from './admin-tutor-status.component';

describe('AdminTutorStatusComponent', () => {
  let component: AdminTutorStatusComponent;
  let fixture: ComponentFixture<AdminTutorStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTutorStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTutorStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
