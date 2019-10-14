import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PettyCashComponent } from './petty-cash.component';
import { FilterComponent } from './components/filter/filter.component';
import { BalanceComponent } from './components/balance/balance.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ExpanseCategoriesComponent } from './components/expanse-categories/expanse-categories.component';
import { SwitchCompanyComponent } from './components/switch-company/switch-company.component';
import { WithdrawalDepositComponent } from './components/withdrawal-deposit/withdrawal-deposit.component';
import { SalesIncomeComponent } from './components/sales-income/sales-income.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: '', component: LoginComponent, pathMatch: 'full' },
        { path: 'pages', component: PettyCashComponent, pathMatch: 'full' },
        { path: 'withdrawal-deposit', component: WithdrawalDepositComponent, pathMatch: 'full' },
        { path: 'filter', component: FilterComponent, pathMatch: 'full' },
        { path: 'balance', component: BalanceComponent, pathMatch: 'full' },
        { path: 'settings', component: SettingsComponent, pathMatch: 'full' },
        { path: 'expanse-categories', component: ExpanseCategoriesComponent, pathMatch: 'full' },
        { path: 'switch-company', component: SwitchCompanyComponent, pathMatch: 'full' },
        { path: 'sales-income', component: SalesIncomeComponent, pathMatch: 'full' },
    ])
  ],
  exports: [RouterModule]
})
export class pettyCashRoutingModule {
}
