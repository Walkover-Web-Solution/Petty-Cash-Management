import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss']
})
export class SelectListComponent implements OnInit {
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
