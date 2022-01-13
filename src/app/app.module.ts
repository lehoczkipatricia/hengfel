// File: app.module.ts
// Author: Lehoczki Patrícia
// Copyright: 2022, Lehoczki Patrícia
// Group: Szoft II/N
// Date: 2022.01.13
// Github: https://github.com/lehoczkipatricia
// Licenc: GNU GPL/N

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
