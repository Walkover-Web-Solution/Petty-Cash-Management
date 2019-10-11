import { Component, OnInit, Inject } from '@angular/core';
import { watch } from 'fs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SelectActionComponent } from '../select-action/select-action.component';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-sales-income',
  templateUrl: './sales-income.component.html',
  styleUrls: ['./sales-income.component.scss']
})
export class SalesIncomeComponent implements OnInit {
  public WithDrawalDeposit = 12400;

  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(SelectActionComponent, {
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
