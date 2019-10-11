import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExportExcelComponent } from './modal-export-excel.component';

describe('ModalExportExcelComponent', () => {
  let component: ModalExportExcelComponent;
  let fixture: ComponentFixture<ModalExportExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExportExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExportExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
