import {Component, Input, OnInit} from '@angular/core';
import { CallService} from '../call.service';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users: User[];
  @Input() utente: string;
  constructor(private callService: CallService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.callService.getUsers()
      .subscribe((response) => {
        this.users = response;
      });
  }


}
