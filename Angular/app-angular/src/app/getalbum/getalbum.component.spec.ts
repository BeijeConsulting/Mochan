import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalbumComponent } from './getalbum.component';

describe('GetalbumComponent', () => {
  let component: GetalbumComponent;
  let fixture: ComponentFixture<GetalbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetalbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetalbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
