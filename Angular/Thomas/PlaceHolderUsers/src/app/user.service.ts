import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { user } from './user' 
import { catchError, map, tap } from 'rxjs/operators'
import { album } from './album'
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private usersurl = 'https://jsonplaceholder.typicode.com/users'
private albumsurl = 'https://jsonplaceholder.typicode.com/albums'
private photosurl = 'https://jsonplaceholder.typicode.com/photos'
  constructor(
    private http: HttpClient
  ) { }
  getUsers() : Observable <user[]> {
    return this.http.get<user[]>(this.usersurl)
    .pipe(
      catchError(this.handleError<user[]>('getUsers', []))
    )
  }

  getUser(id: number) : Observable<user> {
    const url = `${this.usersurl}/${id}`
    return this.http.get<user>(url) 
    .pipe(
      catchError(this.handleError<user>(`getUser id=${id}`))
    )
    
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T)
    }
  }

  getAlbums(id: number) : Observable<album[]> {
    const url = `${this.albumsurl}?userId=${id}`
    console.log(url)
    return this.http.get<album[]>(url)
    .pipe(
      catchError(this.handleError<album[]>(`getAlbum userId=${id}`))
    )
  }

  getPhotos(id: number) : Observable<Photo[]> {
    const url = `${this.photosurl}?albumId=${id}`
    return this.http.get<Photo[]>(url)
    .pipe(
      catchError(this.handleError<Photo[]>(`getPhoto albumId=${id}`))
    )
  }

}
