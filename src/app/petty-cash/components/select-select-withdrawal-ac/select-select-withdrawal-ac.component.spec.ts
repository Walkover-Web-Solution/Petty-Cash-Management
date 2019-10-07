import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSelectWithdrawalAcComponent } from './select-select-withdrawal-ac.component';

describe('SelectSelectWithdrawalAcComponent', () => {
  let component: SelectSelectWithdrawalAcComponent;
  let fixture: ComponentFixture<SelectSelectWithdrawalAcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSelectWithdrawalAcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSelectWithdrawalAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
