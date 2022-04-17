import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimeService } from './time.service';
import { DOCUMENT, SET_INTERVAL } from './tokens';

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
    },
    {
      provide: DOCUMENT,
      useValue: document,
    },
    {
      provide: SET_INTERVAL,
      useValue: setInterval,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
