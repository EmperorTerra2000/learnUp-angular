import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimeService } from './time.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: TimeService,
      useClass: TimeService,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
