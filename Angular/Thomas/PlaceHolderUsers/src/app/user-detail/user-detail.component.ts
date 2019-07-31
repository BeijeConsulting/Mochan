import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { user } from '../user'


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
user: user
  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private location: Location) { }

  ngOnInit(): void {
    this.getUser();
    console.log(this.user)
  }

  getUser():void {
    const id = +this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.userService.getUser(id)
    .subscribe(user => this.user = user)

  }

  goBack(): void {
    this.location.back()
  }
}
