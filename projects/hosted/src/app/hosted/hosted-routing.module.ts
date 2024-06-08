import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostedComponent } from './hosted.component';

const routes: Routes = [{ path: '', component: HostedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostedRoutingModule {}