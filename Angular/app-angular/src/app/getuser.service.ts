import { Injectable } from '@angular/core';
import { User } from './type-user';
import {Album} from './album';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetuserService {

  constructor( private http: HttpClient ) {}


  private alluserurl = 'https://jsonplaceholder.typicode.com/users'
  private albumurl = 'https://jsonplaceholder.typicode.com/albums'



 getalluser(): Observable<User[]>{
   return this.http.get<User[]>(this.alluserurl)

 }

 getuser(id: number): Observable<User> {
  const url = `${this.alluserurl}/${id}`;  // ----->> per dirgi che url prendere
  return this.http.get<User>(url)

}


  getalbums(id: number): Observable<Album[]>{
  const url = `${this.albumurl}?userId=${id}`;
  console.log(url)
  return this.http.get<Album[]>(url)

  }

}
