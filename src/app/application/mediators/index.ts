import { EnvironmentProviders, Provider, makeEnvironmentProviders } from '@angular/core';
import { MessageMediator } from './message.mediator';

export { MessageMediator };

export const provideMediators = (): EnvironmentProviders => {
  const providers: Provider[] = [MessageMediator];

  return makeEnvironmentProviders(providers);
};
