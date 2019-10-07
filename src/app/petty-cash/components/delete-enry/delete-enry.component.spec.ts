import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEnryComponent } from './delete-enry.component';

describe('DeleteEnryComponent', () => {
  let component: DeleteEnryComponent;
  let fixture: ComponentFixture<DeleteEnryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEnryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEnryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
