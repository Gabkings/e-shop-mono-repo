import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    SliderComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SliderComponent,
    BannerComponent
  ]
})
export class UiModule { }
