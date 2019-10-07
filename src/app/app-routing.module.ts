import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PettyCashComponent } from './petty-cash/petty-cash.component';

const routes: Routes = [];

export const ROUTES: Routes = [
  //{path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '', loadChildren: './petty-cash/petty-cash.module#PettyCashModule'},
  //{path: '404', component: NotFoundComponent},
  // {
  //   path: 'pages', component: PageComponent, canActivate: [NeedsAuthentication],
  //   children: [
  //     {path: 'home', loadChildren: './home/home.module#HomeModule', canActivate: [NeedsAuthorization]},
  //     {path: '**', redirectTo: 'home', pathMatch: 'full'}

  //   ]
  // },
  //{path: '**', pathMatch: 'full', component: PublicPageHandlerComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
