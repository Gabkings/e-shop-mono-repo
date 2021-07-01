import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategoryModel} from "../models/categoryModel";
import {Observable} from "rxjs";


const apiUrl = "http://localhost:3000/api/v1/categories"


@Injectable({
  providedIn: 'root'
})
export class CategoryService {



  constructor(private httpClient: HttpClient) { }

  getCategories() : Observable<CategoryModel[]>{
   return  this.httpClient.get<CategoryModel[]>(apiUrl);
  }

  createCategory(payload: CategoryModel) :Observable<CategoryModel> {
    return this.httpClient.post<CategoryModel>("http://localhost:3000/api/v1/categories", payload)
  }

  deleteCategory(categoryId: string) : Observable<string>{
    return this.httpClient.delete<string>(`http://localhost:3000/api/v1/categories/${categoryId}`)
  }
  getById(categoryId: string) : Observable<CategoryModel>{
    return this.httpClient.get<CategoryModel>(`http://localhost:3000/api/v1/categories/${categoryId}`)
  }

  updateById(categoryId: string, payload: CategoryModel) : Observable<string>{
    return this.httpClient.put<string>(`http://localhost:3000/api/v1/categories/${categoryId}`, payload)
  }

}
