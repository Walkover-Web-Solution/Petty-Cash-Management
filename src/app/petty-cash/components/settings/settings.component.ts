import { Component, OnInit } from '@angular/core';
export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  languages = [
    {languageses: 'Arabic'},
    {languageses: 'English'},
    {languageses: 'Hindi'},
  ];

  constructor() { }

  ngOnInit() {
  }
}
