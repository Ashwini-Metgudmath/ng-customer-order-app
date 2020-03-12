import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmoresComponent } from './custmores.component';

describe('CustmoresComponent', () => {
  let component: CustmoresComponent;
  let fixture: ComponentFixture<CustmoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustmoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustmoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
