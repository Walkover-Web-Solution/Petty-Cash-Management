import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalDepositComponent } from './withdrawal-deposit.component';

describe('WithdrawalDepositComponent', () => {
  let component: WithdrawalDepositComponent;
  let fixture: ComponentFixture<WithdrawalDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawalDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
