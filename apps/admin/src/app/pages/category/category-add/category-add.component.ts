import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryModel, CategoryService} from "@frontend/products";
import {MessageService} from "primeng/api";
import {Location} from "@angular/common";
import {timer} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'frontend-category-add',
  templateUrl: './category-add.component.html',
})
export class CategoryAddComponent implements OnInit {


  isSubmitted: boolean = false
  isEditMode: boolean = false
  formTitle: string = "Add New"
  formButton: string = "Create"
  formIcon: string ="pi-plus"
  categoryId: string = ""

  constructor(private categorySvs: CategoryService,
              private formBuilder:  FormBuilder,
              private messageService: MessageService,
              private route: ActivatedRoute,
              private location: Location) { }

  form: FormGroup = this.formBuilder.group({
    name:['', Validators.required],
    icon: ['', Validators.required],
    color:['#FFF']
  })

  ngOnInit(): void {
    this._checkEditMode()
  }

  categoryData: CategoryModel = {
    name: "",
    icon: "",
    color: ""
  }

  /*
  @comment: Success message toast
   */
  addSingle(typeMsg: string, summaryText: string, detail: string) {
    this.messageService.add({severity:typeMsg, summary:summaryText, detail: detail});
  }

  submitForm(){
    this.isSubmitted = true
    if(this.form?.invalid){
      return
    }

    const payload : CategoryModel = {
      name : this.categoryForm.name.value,
      icon : this.categoryForm.icon.value,
      color: "#FFF"
    }
    this.createCategory(payload)
  }



  createCategory(payload: CategoryModel){
    if(this.isEditMode){
      this.categorySvs.updateById(this.categoryId,payload).subscribe(data =>{
          this.addSingle("success", "Updated successfully", "Redirecting to categories table" )
          timer(2000).toPromise().then(done => {
            this.location.back()
          })
        }, error => this.addSingle("danger", "An error occurred while updating category", "Please try again later" )
      )
    }else {
      this.categorySvs.createCategory(payload).subscribe(data =>{
          this.addSingle("success", "Created successfully", "Redirecting back to categories table" )
          timer(2000).toPromise().then(done => {
            this.location.back()
          })
        }, error => this.addSingle("danger", "An error occurred while creating category", "Please try again later" )
      )
    }
  }

  get categoryForm(){
    return this.form.controls
  }

  categoryById(id: string){
    this.categorySvs.getById(id).subscribe(category =>{
      console.log(category)
      this.categoryForm.name.setValue(category.name)
      this.categoryForm.icon.setValue(category.icon)
      this.categoryForm.color.setValue(category.color)
    }, error => {console.log(error.message)})
  }

  private _checkEditMode(){
    this.route.params.subscribe(params => {
      if(params.id){
        this.categoryId = params.id
        this.categoryById(params.id)
        this.isEditMode = true
        this.formTitle = "Edit"
        this.formButton = "Edit"
        this.formIcon ="pi-pencil"
      }
    })
  }



}
