import { Component, OnInit, Inject } from '@angular/core';
import { watch } from 'fs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SelectActionComponent } from '../select-action/select-action.component';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-withdrawal-deposit',
  templateUrl: './withdrawal-deposit.component.html',
  styleUrls: ['./withdrawal-deposit.component.scss']
})
export class WithdrawalDepositComponent implements OnInit {
  public WithDrawalDeposit = 100;
  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(SelectActionComponent, {
      width: '330px',
      //data: {name: this.name, animal: this.animal}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
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
