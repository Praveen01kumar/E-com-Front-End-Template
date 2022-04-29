import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from '../app/Models/blog/blog.module';
import { HomeModule } from '../app/Models/home/home.module';
import { PagesModule } from '../app/Models/pages/pages.module';
import { ShopModule } from '../app/Models/shop/shop.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    HomeModule,
    PagesModule,
    ShopModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
