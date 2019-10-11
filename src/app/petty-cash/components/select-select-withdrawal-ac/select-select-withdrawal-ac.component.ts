import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-select-withdrawal-ac',
  templateUrl: './select-select-withdrawal-ac.component.html',
  styleUrls: ['./select-select-withdrawal-ac.component.scss']
})
export class SelectSelectWithdrawalAcComponent implements OnInit {

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
