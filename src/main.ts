// File: main.ts
// Author: Lehoczki Patrícia
// Copyright: 2022, Lehoczki Patrícia
// Group: Szoft II/N
// Date: 2022.01.13
// Github: https://github.com/lehoczkipatricia
// Licenc: GNU GPL

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
