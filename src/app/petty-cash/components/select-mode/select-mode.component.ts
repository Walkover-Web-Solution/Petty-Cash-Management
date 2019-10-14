import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-mode',
  templateUrl: './select-mode.component.html',
  styleUrls: ['./select-mode.component.scss']
})
export class SelectModeComponent implements OnInit {

  SelectWithdrawalAC = [
    {selectItem: 'Not yet received', itemPrice: null},
    {selectItem: 'Cash A/c', itemPrice: null},
    {selectItem: 'ICICI A/c', itemPrice:12000},
    {selectItem: 'SBI A/c', itemPrice:12000},
  ];

  constructor() { }

  ngOnInit() {
  }

}
