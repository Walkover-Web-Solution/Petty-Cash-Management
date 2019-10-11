import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PettyCashComponent } from './petty-cash.component';
import { AllEntriesComponent } from './components/all-entries/all-entries.component';
import { pettyCashRoutingModule } from './petty-cash.routing.module';
import { SelectActionComponent } from './components/select-action/select-action.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HeaderComponent } from './components/header/header.component';
import { WithdrawalDepositComponent } from './components/withdrawal-deposit/withdrawal-deposit.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

//import { MaterialModule } from './material.module';


import {
  MatCheckboxModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatStepperModule,
  MatTabsModule,
  MatTreeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatRippleModule,
  MatBottomSheetModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatNativeDateModule,
  MatDatepickerModule
} from '@angular/material';
import { SelectListComponent } from './components/select-list/select-list.component';
import { SelectSelectWithdrawalAcComponent } from './components/select-select-withdrawal-ac/select-select-withdrawal-ac.component';
import { AccountTypeComponent } from './components/account-type/account-type.component';
import { ModalExportExcelComponent } from './components/modal-export-excel/modal-export-excel.component';
import { FilterComponent } from './components/filter/filter.component';
import { TotalAmountComponent } from './components/total-amount/total-amount.component';
import { SelectModeComponent } from './components/select-mode/select-mode.component';
import { SelectCreditorsComponent } from './components/select-creditors/select-creditors.component';
import { DeleteEnryComponent } from './components/delete-enry/delete-enry.component';
import { BalanceComponent } from './components/balance/balance.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ExpanseCategoriesComponent } from './components/expanse-categories/expanse-categories.component';
import { SwitchCompanyComponent } from './components/switch-company/switch-company.component';



@NgModule({
  declarations: [PettyCashComponent, AllEntriesComponent, SelectActionComponent, CalculatorComponent, HeaderComponent, WithdrawalDepositComponent, SelectListComponent, SelectSelectWithdrawalAcComponent, AccountTypeComponent, ModalExportExcelComponent, FilterComponent, TotalAmountComponent, SelectModeComponent, SelectCreditorsComponent, DeleteEnryComponent, BalanceComponent, SettingsComponent, ExpanseCategoriesComponent, SwitchCompanyComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    pettyCashRoutingModule,
    // material modules
    MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatNativeDateModule,
    MatDatepickerModule,
    //MaterialModule end
    NgxMaterialTimepickerModule,

  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    pettyCashRoutingModule,
    // material modules
    MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatNativeDateModule,
    MatDatepickerModule
    //MaterialModule
  ],
  entryComponents: [
    SelectActionComponent,
    ModalExportExcelComponent,
    TotalAmountComponent,
    SelectModeComponent
  ]
})
export class PettyCashModule { }
