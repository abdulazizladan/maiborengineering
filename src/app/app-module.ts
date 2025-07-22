import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared-module';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Homepage } from './homepage/homepage';

@NgModule({
  declarations: [
    App,
    Homepage
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
