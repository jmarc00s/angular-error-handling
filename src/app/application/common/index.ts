import {
  EnvironmentProviders,
  ErrorHandler,
  Provider,
  makeEnvironmentProviders,
} from '@angular/core';
import { CustomErrorHandler } from './error.handler';

export { CustomErrorHandler };

export const provideCommons = (): EnvironmentProviders => {
  const providers: Provider[] = [{ provide: ErrorHandler, useClass: CustomErrorHandler }];

  return makeEnvironmentProviders(providers);
};
