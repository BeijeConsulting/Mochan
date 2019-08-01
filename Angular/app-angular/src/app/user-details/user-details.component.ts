import { Component, OnInit, Input } from '@angular/core';
import { User } from '../type-user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GetuserService }  from '../getuser.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
@Input() user: User;

  constructor(
               private route: ActivatedRoute,
               private getuserService: GetuserService,
               private location: Location
  ) { }

  ngOnInit(): void {
  this.getuser();
  }

  getuser(): void {
const id = +this.route.snapshot.paramMap.get('id');
this.getuserService.getuser(id)
  .subscribe(user => this.user = user);
}

}
