import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared-module';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Homepage } from './homepage/homepage';
import { About } from './about/about';
import { AboutPage } from './pages/about-page/about-page';
import { ServicesPage } from './pages/services-page/services-page';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { ContactPage } from './pages/contact-page/contact-page';

@NgModule({
  declarations: [
    App,
    Homepage,
    About,
    AboutPage,
    ServicesPage,
    ProjectsPage,
    ContactPage
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
