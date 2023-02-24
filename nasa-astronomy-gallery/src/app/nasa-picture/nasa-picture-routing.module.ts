import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyPictureComponent } from './daily-picture/daily-picture.component';
import { PictureListComponent } from './picture-list/picture-list.component';

const routes: Routes = [
  {
    path: '',
    component: DailyPictureComponent
  },
  {
    path: 'search',
    component: PictureListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NasaPictureRoutingModule { }
