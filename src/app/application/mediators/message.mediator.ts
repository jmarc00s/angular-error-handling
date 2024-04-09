import { Injectable, inject } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

type MessageParameters = {
  message: string;
  title?: string;
  config?: Partial<IndividualConfig>;
};

@Injectable()
export class MessageMediator {
  private toasterService = inject(ToastrService);

  success({ message, title, config }: MessageParameters): void {
    this.toasterService.success(message, title, config);
  }

  warn({ message, title, config }: MessageParameters): void {
    this.toasterService.warning(message, title, config);
  }

  error({ message, title, config }: MessageParameters): void {
    this.toasterService.error(message, title, config);
  }
}
