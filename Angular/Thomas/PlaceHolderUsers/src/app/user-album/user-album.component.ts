import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { ActivatedRoute} from '@angular/router'
import { Location } from '@angular/common'
import { album } from '../album'


@Component({
  selector: 'app-user-album',
  templateUrl: './user-album.component.html',
  styleUrls: ['./user-album.component.css']
})
export class UserAlbumComponent implements OnInit {
albums: album[]
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
getAlbums(): void {
  const id = +this.route.snapshot.paramMap.get('userId')
  this.userService.getAlbums(id)
  .subscribe(albums => this.albums = albums);
  
}
goBack(): void {
  this.location.back()
}
  ngOnInit() {
    this.getAlbums()
    
  }

}
