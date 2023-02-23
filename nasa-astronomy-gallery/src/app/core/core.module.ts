import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ScrollDirective } from './navbar/directives/scroll.directive';



@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent,
    ScrollDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent]
})
export class CoreModule { }
