import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaPictureRoutingModule } from './nasa-picture-routing.module';
import { DailyPictureComponent } from './daily-picture/daily-picture.component';


@NgModule({
  declarations: [
    DailyPictureComponent
  ],
  imports: [
    CommonModule,
    NasaPictureRoutingModule
  ]
})
export class NasaPictureModule { }
