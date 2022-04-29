import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { HomeComponent } from './Home/home/home.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    HomeComponent
  ]
})
export class HomeModule { }
