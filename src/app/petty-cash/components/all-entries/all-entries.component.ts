import { Component, OnInit, Inject } from '@angular/core';
import { watch } from 'fs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SelectActionComponent } from '../select-action/select-action.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-all-entries',
  templateUrl: './all-entries.component.html',
  styleUrls: ['./all-entries.component.scss']
})

export class AllEntriesComponent implements OnInit {

  allEntries = [
    {activeProduct: 'test', watchIcon: 'icon-watch', checkIcon: '', iconClose: '', productType: 'Groceries', boxPrice: 340.00, cardCash: '', paymentCard:'', colorheading: 'text-primary', discription: 'Lorem Ipsum dummy text dummy Lorem ipsum Lorem Ipsum dummy text dummy Lorem ipsum.', ProductImg: 'assets/images/01.png' },
    {activeProduct: 'test', watchIcon: 'icon-watch', checkIcon: '', iconClose: '', productType: 'Entertainment', boxPrice: 1000.00, cardCash: 'icon-cash', paymentCard:'', colorheading: 'text-warning', discription: '', ProductImg: '' },
    {activeProduct: '', watchIcon: '', checkIcon: 'icon-check', iconClose: '', productType: 'Food & Drink', boxPrice: 340.00, cardCash: '', paymentCard:'icon-card', colorheading: 'text-warning', discription: 'Lorem Ipsum dummy text dummy Lorem ipsum Lorem Ipsum dummy text dummy Lorem ipsum.', ProductImg: 'assets/images/01.png' },
    {activeProduct: '', watchIcon: 'icon-download', checkIcon: '', iconClose: '', productType: 'ICICI Bank a/c', boxPrice: 1000.00, cardCash: 'icon-cash', paymentCard:'', colorheading: 'text-success', discription: '', ProductImg: '' },
    {activeProduct: '', watchIcon: '', checkIcon: '', iconClose: 'icon-close', productType: 'Groceries', boxPrice: 340.00, cardCash: 'icon-cash', paymentCard:'', colorheading: 'text-warning', discription: 'Lorem Ipsum dummy text dummy Lorem ipsum Lorem Ipsum dummy text dummy Lorem ipsum.', ProductImg: 'assets/images/01.png' },
  ];

  constructor(public dialog: MatDialog) { }
  openDialog(): void {

    this.dialog.open(SelectActionComponent, { disableClose: true });

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
