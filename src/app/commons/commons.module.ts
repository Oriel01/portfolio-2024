import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BackgroundHomeComponent } from './background-home/background-home.component';



@NgModule({
  declarations: [
    BackgroundHomeComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackgroundHomeComponent,
    NavbarComponent
  ]
})
export class CommonsModule { }
