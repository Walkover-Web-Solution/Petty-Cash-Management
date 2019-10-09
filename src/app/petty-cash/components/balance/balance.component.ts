import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  SelectWithdrawalAC = [
    {selectItem: 'Cash A/c', itemPrice:15500},
    {selectItem: 'Cash USD A/c', itemPrice:1500},
    {selectItem: 'ICICI A/c', itemPrice:1500},
    {selectItem: 'Bank of America A/c', itemPrice:1500},
  ];

  constructor() { }

  ngOnInit() {
  }

}
