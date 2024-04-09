import { ApplicationConfig, ErrorHandler } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { ToastrService, provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { CustomErrorHandler } from '@/common';
import { MessageMediator } from '@/mediators';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideToastr(),
    MessageMediator,
    { provide: ErrorHandler, useClass: CustomErrorHandler },
  ],
};
