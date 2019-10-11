import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-company',
  templateUrl: './switch-company.component.html',
  styleUrls: ['./switch-company.component.scss']
})
export class SwitchCompanyComponent implements OnInit {

  selectLists = [
    {selectItem: 'Sales A/C'},
    {selectItem: 'Cash Sales A/C'},
    {selectItem: 'Sample A/C'},
    {selectItem: 'Sample A/C'},
    {selectItem: 'Sample A/C'},
    {selectItem: 'Other'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
