import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesIncomeComponent } from './sales-income.component';

describe('SalesIncomeComponent', () => {
  let component: SalesIncomeComponent;
  let fixture: ComponentFixture<SalesIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
