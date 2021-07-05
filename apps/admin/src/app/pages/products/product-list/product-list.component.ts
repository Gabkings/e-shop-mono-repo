import { Component, OnInit } from '@angular/core';
import {ProductModel, ProductService} from "@frontend/products";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'frontend-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  products: ProductModel[] =[]

  constructor(private productSvs: ProductService,
              private router: Router,
              private messageService: MessageService,

  ) { }

  ngOnInit(): void {
    this._getProducts()
  }

  private _getProducts(){
    this.productSvs.getProducts().subscribe(products => {
      this.products = products
    })
  }

  deleteProduct(productId: string) {

  }

  updateProduct(productid: string) {
    this.router.navigateByUrl(`products/form/${productid}`);
  }
}
