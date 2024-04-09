import { ErrorHandler, Injectable, Injector, inject } from '@angular/core';
import { MessageMediator } from '@/mediators';

@Injectable()
export class CustomErrorHandler extends ErrorHandler {
  private injector = inject(Injector);

  override handleError(error: Error): void {
    const messageHandler = this.injector.get(MessageMediator);
    messageHandler.error({
      message: error.message,
      title: 'An Error ocurred',
      config: { closeButton: true, progressBar: true },
    });
  }
}
