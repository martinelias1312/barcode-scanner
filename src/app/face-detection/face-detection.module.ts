import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaceDetectionPageRoutingModule } from './face-detection-routing.module';

import { FaceDetectionPage } from './face-detection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaceDetectionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FaceDetectionPage]
})
export class FaceDetectionPageModule {}
