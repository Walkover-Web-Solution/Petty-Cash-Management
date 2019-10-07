import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  typesOfShoes: string[] = ['Food & Drink a/c', 'Entertainment a/c', 'Transport a/c', 'Healthcarea/c', 'Celebrations a/c', 'Groceries a/c', 'Other', 'Sales'];


  ModeSelected: string[] = ['Sales/Income', 'ICIC a/c', 'SBI a/c',];

  entries: string[] = ['Sales/Income', '23 Pending Sales', '3 Rejected Sales', '12 Approved Sales'];
  purchased: string[] = ['Sales/Income', '23 Pending Sales', '3 Rejected Sales', '12 Approved Sales'];
  users: string[] = ['Shubhendra', 'Alok', 'Meghna'];

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  constructor() { }

  ngOnInit() {
  }

}
