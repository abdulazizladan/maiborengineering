import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nav } from './components/nav/nav';
import { Footer } from './components/footer/footer';



@NgModule({
  declarations: [
    Nav,
    Footer
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Nav,
    Footer
  ]
})
export class SharedModule { }
