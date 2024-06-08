import { Component, inject } from '@angular/core';
import { ServicesService } from '@@services';

@Component({
  selector: 'app-hosted',
  templateUrl: './hosted.component.html',
  styleUrl: './hosted.component.scss'
})
export class HostedComponent {
  service = inject(ServicesService)
  count = this.service.generateCount()

  
}
