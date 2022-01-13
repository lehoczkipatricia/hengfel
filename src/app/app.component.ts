
// File: app.components.ts
// Author: Lehoczki Patrícia
// Copyright: 2022, Lehoczki Patrícia
// Group: Szoft II/N
// Date: 2022.01.13
// Github: https://github.com/lehoczkipatricia
// Licenc: GNU GPL


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hengfel';
  radius: string;
  length: string;
  surface: number;
  pastCalc: string;
  constructor(){
    this.radius = "";
    this.length = "";
    this.surface = 0;
    this.pastCalc = "";
  }

  calcSurface(): any {
    this.surface = 2*Math.PI*(Number(this.radius)) *(Number(this.radius)+Number(this.length));
    this.pastCalc = "Sugár: " + Number(this.radius) + " Hossz: " + Number(this.length);
    this.radius = "";
    this.length = "";
    

  }
}
