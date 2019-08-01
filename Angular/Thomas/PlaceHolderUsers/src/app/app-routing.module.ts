import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAlbumComponent } from './user-album/user-album.component';
import { UsersComponent } from './users/users.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  {path: 'user/:id', component: UserDetailComponent},
  {path: 'album/:userId', component: UserAlbumComponent},
  {path: '', component: UsersComponent},
  {path: 'photos/:albumId', component: PhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
