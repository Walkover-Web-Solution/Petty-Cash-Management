import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-mode',
  templateUrl: './select-mode.component.html',
  styleUrls: ['./select-mode.component.scss']
})
export class SelectModeComponent implements OnInit {

  SelectWithdrawalAC = [
    {selectItem: 'ICICI Bank A/c', itemPrice:12000},
    {selectItem: 'SBI A/c', itemPrice:12000},
    {selectItem: 'Emirates NBD', itemPrice:12000},
    {selectItem: 'Bank of America', itemPrice:12000},
    {selectItem: 'Cash A/c',},
    {selectItem: 'Cash 1 A/c',},
  ];

  constructor() { }

  ngOnInit() {
  }

}
