import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User }         from '../user';
import { UserService }  from '../user.service';
import { Post } from '../post';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  posts : Post[];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.getPosts();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  getPosts(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getPosts(id)
      .subscribe(posts => this.posts = posts);
  }

  goBack(): void {
    this.location.back();
  }

}
