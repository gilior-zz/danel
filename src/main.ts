import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { AppModule } from "./app/modules/app.module";



platformBrowserDynamic().bootstrapModule(AppModule);
