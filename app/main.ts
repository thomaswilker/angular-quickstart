import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

import './shared/rxjs-operators';

bootstrap(AppComponent, [HTTP_PROVIDERS, appRouterProviders]).catch(err => console.error(err));
