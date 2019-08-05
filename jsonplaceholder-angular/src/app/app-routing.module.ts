import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SchedadatiComponent} from './schedadati/schedadati.component';
import { UsersComponent} from './users/users.component';
import {AlbumComponent} from './album/album.component';
import {PhotosComponent} from './photos/photos.component';

const routes: Routes = [
  { path: '', component: UsersComponent},
  { path: 'informations/:id', component: SchedadatiComponent},
  { path: 'album/:userId', component: AlbumComponent},
  { path: 'photos/:albumId', component: PhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
