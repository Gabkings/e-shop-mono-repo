import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import {Route, RouterModule, Routes} from "@angular/router";
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import {UiModule} from "../../../../libs/ui/src/lib/ui.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NavComponent} from "./shared/nav/nav.component";
import {
  CategoriesBannerComponent,
  FeaturedProductComponent,
  ProductItemComponent,
  ProductsModule,
  SearchComponent
} from "@frontend/products";
import {ButtonModule} from "primeng/button";



const route = [
  {path: "", component: HomePageComponent},
  {path: "products", component: ProductsListComponent}
  ];

@NgModule({
  declarations: [AppComponent, HomePageComponent,
    ProductsListComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent, SearchComponent, CategoriesBannerComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(route), UiModule, ProductsModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
