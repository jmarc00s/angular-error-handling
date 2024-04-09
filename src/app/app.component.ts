import { NavbarComponent } from '@/components';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
