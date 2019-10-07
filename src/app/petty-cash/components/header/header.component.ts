import { Component, OnInit, Inject } from '@angular/core';
import { watch } from 'fs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalExportExcelComponent } from '../modal-export-excel/modal-export-excel.component';
import { TotalAmountComponent } from '../total-amount/total-amount.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  showFiller = false;
  public HeaderToggle = false;

  ToggleClick() {
    this.HeaderToggle = !this.HeaderToggle;
  }

  allEntries = 1238954.00;
  WithDrawalDeposit = 100;

  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalExportExcelComponent, {
      width: '330px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  totalAmount(): void {
    const dialogRef = this.dialog.open(TotalAmountComponent, {
      width: '330px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  ngOnInit() {
  }
}

export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
