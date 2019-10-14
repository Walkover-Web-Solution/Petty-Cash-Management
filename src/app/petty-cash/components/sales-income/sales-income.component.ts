import { Component, OnInit, Inject } from '@angular/core';
import { watch } from 'fs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SelectModeComponent } from '../select-mode/select-mode.component';
import { DeleteEnryComponent } from '../delete-enry/delete-enry.component';
//import { VERSION } from '@angular/platform-browser-dynamic';
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

  imageUploads = [
    {img: 'assets/images/alhamdlulillah.png'},
    {img: 'assets/images/alhamdlulillah.png'},
    {img: 'assets/images/alhamdlulillah.png'},
    {img: 'assets/images/alhamdlulillah.png'},
    {img: 'assets/images/alhamdlulillah.png'},
    {img: 'assets/images/alhamdlulillah.png'},
    {img: 'assets/images/alhamdlulillah.png'},
  ];

  EditimageUploads = [
    {img: 'assets/images/alhamdlulillah.png'},
    {img: 'assets/images/alhamdlulillah.png'},
    {img: 'assets/images/alhamdlulillah.png'},
  ];

  //version = VERSION;
  date = new Date();

  public WithDrawalDeposit = 12400;

  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(SelectModeComponent, {
      width: '330px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  deleteConfirm(): void {
    const dialogRef = this.dialog.open(DeleteEnryComponent, {
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
