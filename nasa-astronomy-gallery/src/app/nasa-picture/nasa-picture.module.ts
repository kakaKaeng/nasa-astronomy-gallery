import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaPictureRoutingModule } from './nasa-picture-routing.module';
import { DailyPictureComponent } from './daily-picture/daily-picture.component';
import { SharedModule } from '../shared/shared.module';
import { LAZYLOAD_IMAGE_HOOKS, LazyLoadImageModule, ScrollHooks } from 'ng-lazyload-image';
import { PictureListComponent } from './picture-list/picture-list.component';
import { FormsModule } from '@angular/forms';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    DailyPictureComponent,
    PictureListComponent
  ],
  imports: [
    CommonModule,
    NasaPictureRoutingModule,
    SharedModule,
    LazyLoadImageModule,
    FormsModule,
    NgbPagination
  ],
  providers: [{provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks}],

})
export class NasaPictureModule {
}
