import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlluserComponent } from './alluser/alluser.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { GetalbumComponent } from './getalbum/getalbum.component';




const routes: Routes = [
  { path: "", component:  AlluserComponent},
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'album/:userId', component: GetalbumComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
