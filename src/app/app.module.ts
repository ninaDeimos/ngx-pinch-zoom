import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PinchZoomModule } from 'ngx-pinch-zoom';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PinchZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
