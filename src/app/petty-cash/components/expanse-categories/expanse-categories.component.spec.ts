import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanseCategoriesComponent } from './expanse-categories.component';

describe('ExpanseCategoriesComponent', () => {
  let component: ExpanseCategoriesComponent;
  let fixture: ComponentFixture<ExpanseCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpanseCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpanseCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
