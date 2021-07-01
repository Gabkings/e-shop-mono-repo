import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../../../../../libs/products/src/lib/services/category.service";
import {CategoryModel} from "../../../../../../../libs/products/src/lib/models/categoryModel";
import {MessageService} from "primeng/api";
import {ConfirmationService} from 'primeng/api';
import {Router} from "@angular/router";

@Component({
  selector: 'frontend-category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {

  categories: CategoryModel[] = []
  constructor(private categorySvs: CategoryService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private router: Router) { }



  ngOnInit(): void {
    this.showCategories()
  }

  showCategories(){
    this.categorySvs.getCategories().subscribe(data => {
      this.categories = data
    })
  }

  deleteCategory(categoryId: string){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
        this.categorySvs.deleteCategory(categoryId).subscribe(response => {
          this.showCategories()
          this.messageService.add({severity:"success", summary:"Deletion successful", detail: ""})
        }, error => {
          this.messageService.add({severity:"success", summary:"Deletion successful", detail: error.message})
        })
      }
    });
  }

  editategory(categoryId: string){
    this.router.navigateByUrl(`category/form/${categoryId}`)
  }


}
