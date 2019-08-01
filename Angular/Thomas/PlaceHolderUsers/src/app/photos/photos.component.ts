import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { Location } from '@angular/common'
import { Photo } from '../photo';
import { UserService } from '../user.service'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
photos: Photo[]
title: string
  constructor( 
    private location: Location,
    private route: ActivatedRoute,
    private userService: UserService
    ) {
   

   }

  getPhotos(): void  {
    const id = +this.route.snapshot.paramMap.get('albumId')
    this.userService.getPhotos(id)
    .subscribe(photos => this.photos = photos)
  }

  ngOnInit() {
    console.log(history.state.title)
    this.getPhotos()
    this.title = history.state.title
  }
  goBack(): void {
    this.location.back()
  }

}
