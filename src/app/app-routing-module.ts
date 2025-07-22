import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { AboutPage } from './pages/about-page/about-page';
import { ServicesPage } from './pages/services-page/services-page';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { ContactPage } from './pages/contact-page/contact-page';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: Homepage
  },
  {
    path: "about",
    component: AboutPage
  },
  {
    path: "services",
    component: ServicesPage
  },
  {
    path: "projects",
    component: ProjectsPage
  },
  {
    path: "contact",
    component: ContactPage
  },
  {
    path: "**",
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
