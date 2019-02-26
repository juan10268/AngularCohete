import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoheteComponent } from './cohete.component';

describe('CoheteComponent', () => {
  let component: CoheteComponent;
  let fixture: ComponentFixture<CoheteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoheteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoheteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
