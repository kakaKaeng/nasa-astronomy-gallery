import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyPictureComponent } from './daily-picture/daily-picture.component';

const routes: Routes = [
  {
    path: '',
    component: DailyPictureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NasaPictureRoutingModule { }
