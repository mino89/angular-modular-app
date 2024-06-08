import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostedComponent } from './hosted.component';
import { HostedRoutingModule } from './hosted-routing.module';



@NgModule({
  declarations: [
    HostedComponent
  ],
  imports: [
    CommonModule,
    HostedRoutingModule
  ]
})
export class HostedModule { }
