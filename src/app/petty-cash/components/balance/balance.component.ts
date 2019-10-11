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

  TransactionLog = [
    {date: '12/08/2019', amountType: 'Amount received', amountGet: 3500, withdrawal: null},
    {date: '12/08/2019', amountType: 'Withdrawn', amountGet: null, withdrawal: 3500},
    {date: '12/08/2019', amountType: 'Amount transferred', amountGet: 3500, withdrawal: null},
    {date: '12/08/2019', amountType: 'Withdrawn', amountGet: null, withdrawal: 3500},
    {date: '12/08/2019', amountType: 'Amount transferred', amountGet: 3500, withdrawal: null},
  ];

  constructor() { }

  ngOnInit() {
  }

}
