import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCreditorsComponent } from './select-creditors.component';

describe('SelectCreditorsComponent', () => {
  let component: SelectCreditorsComponent;
  let fixture: ComponentFixture<SelectCreditorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCreditorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCreditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
