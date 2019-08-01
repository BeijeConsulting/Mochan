import { Component, OnInit } from '@angular/core';
import { User } from '../type-user';
import {GetuserService} from '../getuser.service';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent implements OnInit {

  alluser: User[];

  constructor(private getuserService: GetuserService) { }

  ngOnInit() {
    this.getalluser();
  }


  getalluser(): void {
    this.getuserService.getalluser()
        .subscribe(alluser => {this.alluser = alluser});
  }

}
