import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkButtonComponent } from './tk-button.component';

describe('TkButtonComponent', () => {
  let component: TkButtonComponent;
  let fixture: ComponentFixture<TkButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
