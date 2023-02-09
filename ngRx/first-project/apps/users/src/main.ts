import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { UsersModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(UsersModule)
  .catch((err) => console.error(err));
