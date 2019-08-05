import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User} from './interfaces/user';
import { Album} from './interfaces/album';
import { catchError, map, tap } from 'rxjs/operators';
import {Photo} from './interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class CallService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private albumUrl = 'https://jsonplaceholder.typicode.com/albums';
  private photoUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
  getInformations(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }
  getAlbums(id: number): Observable<Album[]> {
    const urlalbum = `${this.albumUrl}?userId=${id}`;
    return this.http.get<Album[]>(urlalbum);
  }
  getPhotos(id: number): Observable<Photo[]> {
    const urlphoto = `${this.photoUrl}?albumId=${id}`;
    return this.http.get<Photo[]>(urlphoto);
  }
}


