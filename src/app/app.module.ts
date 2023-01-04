import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooringService } from './booring.service';
import { RandomActivityComponent } from './random-activity/random-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomActivityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BooringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
