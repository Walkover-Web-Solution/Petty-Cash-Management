import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PettyCashComponent } from './petty-cash.component';
import { AccountTypeComponent } from './components/account-type/account-type.component';
import { FilterComponent } from './components/filter/filter.component';
import { BalanceComponent } from './components/balance/balance.component';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: '', component: PettyCashComponent, pathMatch: 'full' },
        { path: 'users', component: AccountTypeComponent, pathMatch: 'full' },
        { path: 'filter', component: FilterComponent, pathMatch: 'full' },
        { path: 'balance', component: BalanceComponent, pathMatch: 'full' },
    ])
  ],
  exports: [RouterModule]
})
export class pettyCashRoutingModule {
}
