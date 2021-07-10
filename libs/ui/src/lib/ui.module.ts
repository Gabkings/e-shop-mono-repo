import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { BannerComponent } from './banner/banner.component';
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    SliderComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    SliderComponent,
    BannerComponent
  ]
})
export class UiModule { }
