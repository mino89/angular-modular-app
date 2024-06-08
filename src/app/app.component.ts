import { Component, inject } from '@angular/core';
import { ServicesService } from '@@services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-modular-prj';
  messageCount= 0;

  service = inject(ServicesService)
  count = this.service.generateCount()

  sendMessage() {
    this.messageCount++
    this.service.sendMessage(`${this.messageCount} hello from service`);
  }
}
