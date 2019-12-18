import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RatingBarAngularComponent } from './rating-bar-angular/rating-bar-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingBarAngularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
