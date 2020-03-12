import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmoresListComponent } from './custmores-list.component';

describe('CustmoresListComponent', () => {
  let component: CustmoresListComponent;
  let fixture: ComponentFixture<CustmoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustmoresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustmoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
