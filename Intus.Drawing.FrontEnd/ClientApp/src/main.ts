import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import './app/shared/utils/log';
// import './app/shared/utils/api-log';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'hammerjs';

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}

const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: Array<any>() },
];

if (environment.production) {
    enableProdMode();
}

// tslint:disable:no-console
platformBrowserDynamic(providers).bootstrapModule(AppModule)
    .catch(err => console.log(err));
