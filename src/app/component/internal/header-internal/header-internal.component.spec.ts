import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInternalComponent } from './header-internal.component';

describe('HeaderComponent', () => {
  let component: HeaderInternalComponent;
  let fixture: ComponentFixture<HeaderInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderInternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
