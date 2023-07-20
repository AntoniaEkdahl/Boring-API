import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // import so we can use HttpClient (also under imports down below) in service


import { AppComponent } from './app.component';
import { BooringService } from './booring.service'; // Came when used 'ng g s' in terminal. Write to providers.  
import { RandomActivityComponent } from './random-activity/random-activity.component'; // Came when used 'ng g g' in terminal.

@NgModule({
  declarations: [
    AppComponent,
    RandomActivityComponent // Came when used 'ng g s' in terminal.
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BooringService], // We specify our service that we want to use. 
  bootstrap: [AppComponent]
})
export class AppModule { }
