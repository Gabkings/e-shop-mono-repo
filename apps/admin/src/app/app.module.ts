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
import {CategoryService, ProductService} from "@frontend/products";
import {HttpClientModule} from "@angular/common/http";
import { CategoryAddComponent } from './pages/category/category-add/category-add.component';
import {InputTextModule} from 'primeng/inputtext';
import {ColorPickerModule} from 'primeng/colorpicker';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from 'primeng/toast';
import {ConfirmationService, MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import {UsersService} from "../../../../libs/users/src/lib/services/users.service";
import {TagModule} from "primeng/tag";
import {InputSwitchModule} from "primeng/inputswitch";
import {InputMaskModule} from "primeng/inputmask";
import {DropdownModule} from "primeng/dropdown";
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';
import {InputNumberModule} from "primeng/inputnumber";
import {EditorModule} from "primeng/editor";
import {OrderListComponent} from "./pages/orders/order-list/order-list.component";
import {OrderDetailComponent} from "./pages/orders/order-detail/order-detail.component";
import {OrdersService} from "@frontend/orders";
import {FieldsetModule} from "primeng/fieldset";



const routes: Routes = [
  {path: "", component: ShellComponent,
    children: [
      {path: "dashboard", component: DashboardComponent},
      {path: "category", component: CategoryListComponent},
      {path: "products", component: ProductListComponent},
      {path: "orders", component: OrderListComponent},
      {path: "orders/:id", component: OrderDetailComponent},
      {path: "products/form", component: ProductFormComponent},
      {path: "products/form/:id", component: ProductFormComponent},
      {path: "category/form", component: CategoryAddComponent},
      {path: "category/form/:id", component: CategoryAddComponent},
      {path: "users", component: UsersListComponent},
      {path: "users/form", component: UserFormComponent},
      {path: "users/form/:id", component: UserFormComponent},
    ]
  }
];

@NgModule({
  declarations: [AppComponent,
    ShellComponent,
    SidebarComponent,
    DashboardComponent,
    CategoryListComponent,
    CategoryAddComponent,
    UsersListComponent,
    UserFormComponent,
    ProductListComponent,
    ProductFormComponent,
    OrderListComponent,
    OrderDetailComponent],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule, ConfirmDialogModule,
    RouterModule.forRoot(routes, {initialNavigation: 'enabled'}),
    CardModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    TableModule,
    InputTextModule,
    ColorPickerModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    TagModule,
    InputSwitchModule,
    InputMaskModule,
    DropdownModule,
    InputNumberModule,
    EditorModule, FieldsetModule
  ],
  providers: [CategoryService, MessageService, ConfirmationService, UsersService, ProductService, OrdersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
