import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoryListComponent } from './pages/category/category-list/category-list.component';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";
import {TableModule} from 'primeng/table';
import {CategoryService} from "@frontend/products";
import {HttpClientModule} from "@angular/common/http";
import { CategoryAddComponent } from './pages/category/category-add/category-add.component';
import {InputTextModule} from 'primeng/inputtext';
import {ColorPickerModule} from 'primeng/colorpicker';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from 'primeng/toast';
import {ConfirmationService, MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ConfirmDialogModule} from 'primeng/confirmdialog';



const routes: Routes = [
  {path: "", component: ShellComponent,
    children: [
      {path: "dashboard", component: DashboardComponent},
      {path: "category", component: CategoryListComponent},
      {path: "category/form", component: CategoryAddComponent},
      {path: "category/form/:id", component: CategoryAddComponent},
    ]
  }
];

@NgModule({
  declarations: [AppComponent, ShellComponent, SidebarComponent, DashboardComponent, CategoryListComponent, CategoryAddComponent],
  imports: [
    BrowserModule, HttpClientModule,BrowserAnimationsModule,ConfirmDialogModule,
    RouterModule.forRoot(routes, {initialNavigation: 'enabled'}),
    CardModule, ToolbarModule, ButtonModule, SplitButtonModule, TableModule, InputTextModule, ColorPickerModule, FormsModule, ReactiveFormsModule, ToastModule
  ],
  providers: [CategoryService, MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
