import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterInternalComponent } from './footer-internal.component';

describe('FooterInternalComponent', () => {
  let component: FooterInternalComponent;
  let fixture: ComponentFixture<FooterInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterInternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
