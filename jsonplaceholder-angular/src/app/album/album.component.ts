import { Component, OnInit } from '@angular/core';
import {Album} from '../interfaces/album';
import {CallService} from '../call.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  public albums: Album[];
  user: User;

  constructor(
    public callService: CallService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.getAlbums();
    this.getInformations();
    console.log(history.state);
  }
  getAlbums(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('userId'));
    this.callService.getAlbums(id)
      .subscribe( (response: Album[]) => {
        this.albums = response;
      });

  }
  getInformations(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('userId'));
    this.callService.getInformations(id)
      .subscribe((response) => {
        this.user = response;
      });
  }
}
