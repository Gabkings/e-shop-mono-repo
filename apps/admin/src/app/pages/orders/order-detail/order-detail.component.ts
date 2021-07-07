import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../../../../../libs/products/src/lib/services/category.service";
import {CategoryModel} from "../../../../../../../libs/products/src/lib/models/categoryModel";
import {MessageService} from "primeng/api";
import {ConfirmationService} from 'primeng/api';
import {ActivatedRoute, Router} from "@angular/router";
import {OrdersService} from "@frontend/orders";
import {ORDER_STATUS} from "../order.constants";
import {timer} from "rxjs";
import {Location} from "@angular/common";

@Component({
  selector: 'frontend-category-list',
  templateUrl: './order-detail.component.html'
})
export class OrderDetailComponent implements OnInit {

  categories: CategoryModel[] = []
  order: any;
  orderStatuses:{ name: string; id: string }[] = [];
  selectedStatus: any;
  constructor(
    private orderService: OrdersService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private location: Location
  ) { }



  ngOnInit(): void {
    this._mapOrderStatus()
    this._getOrder()
  }

  private _getOrder() {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.orderService.getOrder(params.id).subscribe((order) => {
          this.order = order;
          this.selectedStatus = order.status;
        });
      }
    });
  }

  private _mapOrderStatus() {
    this.orderStatuses = Object.keys(ORDER_STATUS).map((key) => {
      return {
        id: key,
        name: ORDER_STATUS[key].label
      };
    });
    console.log(this.orderStatuses[3])
  }

  onStatusChange(event: any) {
    this.orderService.updateOrder({status: this.selectedStatus}, this.order.id).subscribe(data => {
      this.messageService.add({severity:"success", summary:"Update successful", detail: ""})
      timer(2000).toPromise().then(done => {
        this.location.back()
      })
    }, error => {
      this.messageService.add({severity:"warning", summary:"Update not successful", detail: error.message})
    })
  }


}
