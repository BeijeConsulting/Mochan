import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../interfaces/photo';
import { CallService } from '../call.service';
import { Album} from '../interfaces/album';
import { AlbumComponent} from '../album/album.component';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  public photos: Photo[];
  public albums: Album[];

  constructor(
    public route: ActivatedRoute,
    public callService: CallService
  ) { }

  ngOnInit() {
    this.getPhotos();
    this.getAlbums();
  }
  getPhotos(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('albumId'));
    console.log(id);
    this.callService.getPhotos(id)
      .subscribe((response) => {
        this.photos = response;
      });
  }
  getAlbums(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('userId'));
    this.callService.getAlbums(id)
      .subscribe( (response: Album[]) => {
        this.albums = response;
      });
  }

}
