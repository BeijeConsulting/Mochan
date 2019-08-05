import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedadatiComponent } from './schedadati.component';

describe('SchedadatiComponent', () => {
  let component: SchedadatiComponent;
  let fixture: ComponentFixture<SchedadatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedadatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedadatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
