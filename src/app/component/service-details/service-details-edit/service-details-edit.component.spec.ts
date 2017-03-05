import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailsEditComponent } from './service-details-edit.component';

describe('ServiceDetailsEditComponent', () => {
  let component: ServiceDetailsEditComponent;
  let fixture: ComponentFixture<ServiceDetailsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDetailsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
