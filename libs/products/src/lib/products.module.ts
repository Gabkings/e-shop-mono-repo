import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {CategoryService} from "./services/category.service";
import {SearchComponent} from "./components/search/search.component";
import {RouterModule} from "@angular/router";
import {OrdersModule} from "../../../orders/src/lib/orders.module";
import {ButtonModule} from "primeng/button";
import {CategoriesBannerComponent} from "./components/categories-banner/categories-banner.component";
import {ProductItemComponent} from "./components/product-item/product-item.component";
import {FeaturedProductComponent} from "./components/featured-product/featured-product.component";



@NgModule({
  declarations: [FeaturedProductComponent, ProductItemComponent],
  imports: [
    CommonModule,
    OrdersModule, RouterModule, ButtonModule,HttpClientModule
  ],
  exports: [FeaturedProductComponent,ProductItemComponent],

})
export class ProductsModule { }
