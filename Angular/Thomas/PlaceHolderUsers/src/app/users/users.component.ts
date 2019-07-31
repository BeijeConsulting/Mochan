import { Component, OnInit } from '@angular/core';
import { user } from '../user'
import { UserService } from '../user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users : user[]
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers()
    
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users)
  }
}
