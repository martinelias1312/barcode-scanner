import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaceDetectionPage } from './face-detection.page';

const routes: Routes = [
  {
    path: '',
    component: FaceDetectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaceDetectionPageRoutingModule {}
