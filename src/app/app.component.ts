import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavbarComponent } from '@/components';
import { MessageMediator } from './application/mediators/message.mediator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  throwError(): void {
    throw new Error('This is an Error');
  }
}
