import { Component, OnInit} from '@angular/core';
import {Album} from '../album';
import {GetuserService} from '../getuser.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-getalbum',
  templateUrl: './getalbum.component.html',
  styleUrls: ['./getalbum.component.css']
})
export class GetalbumComponent implements OnInit {

   albums: Album[];

  constructor(
               private route: ActivatedRoute,
               private getuserService: GetuserService,
               private location: Location

) { }

  ngOnInit() {
    this.getalbums();
  }

  getalbums(): void {
    const id = +this.route.snapshot.paramMap.get('userId');
    console.log(id)
    this.getuserService.getalbums(id)
      .subscribe(albums => {this.albums = albums});
      console.log(this.albums)
  }

}
