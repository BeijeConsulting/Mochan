import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetphotoComponent } from './getphoto.component';

describe('GetphotoComponent', () => {
  let component: GetphotoComponent;
  let fixture: ComponentFixture<GetphotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetphotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
