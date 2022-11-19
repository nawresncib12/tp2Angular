import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorDirective } from './color.directive';
import { Ex2Component } from './ex2/ex2.component';
import { Ex1Component } from './ex1/ex1.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    Ex2Component,
    Ex1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
