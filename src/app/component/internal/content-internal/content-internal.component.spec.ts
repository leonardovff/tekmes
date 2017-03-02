import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInternalComponent } from './content-internal.component';

describe('ContentInternalComponent', () => {
  let component: ContentInternalComponent;
  let fixture: ComponentFixture<ContentInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentInternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
