import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ScrollDirective } from './navbar/directives/scroll.directive';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent,
    ScrollDirective
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [NavbarComponent]
})
export class CoreModule { }
