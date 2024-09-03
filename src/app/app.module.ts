import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmailPreferenceComponent } from './email-preference/email-preference.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailPreferenceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
