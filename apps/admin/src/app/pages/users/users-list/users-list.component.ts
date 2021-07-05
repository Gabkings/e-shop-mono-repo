import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {UserModel} from "../../../../../../../libs/users/src/lib/models/userModel";
import {UsersService} from "../../../../../../../libs/users/src/lib/services/users.service";

@Component({
  selector: 'frontend-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: UserModel[] = []
  constructor(private userSvs: UsersService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private router: Router) { }



  ngOnInit(): void {
    this.showUsers()
  }

  showUsers(){
    this.userSvs.getUsers().subscribe(data => {
      this.users = data
    })
  }

  deleteUser(categoryId: string){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
        this.userSvs.deleteUser(categoryId).subscribe(response => {
          this.showUsers()
          this.messageService.add({severity:"success", summary:"Deletion successful", detail: ""})
        }, error => {
          this.messageService.add({severity:"success", summary:"Deletion not successful", detail: error.message})
        })
      }
    });
  }

  updateUser(userId: string) {
    this.router.navigateByUrl(`users/form/${userId}`)
  }
}
