import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PettyCashModule } from './petty-cash/petty-cash.module';
import { MatSidenavModule } from '@angular/material';
//import { MaterialModule } from './petty-cash/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PettyCashModule,
    MatSidenavModule
    //MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
