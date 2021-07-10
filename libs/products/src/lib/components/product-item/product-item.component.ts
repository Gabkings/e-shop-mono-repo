import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../models/productModel";
import {products} from "../../products";

@Component({
  selector: 'product-item-component',
  templateUrl: 'product-item-component.html'
})

export class ProductItemComponent implements OnInit {

  @Input() product: any;

  constructor() {}

  ngOnInit(): void {}


}
