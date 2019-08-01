import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';
import { Post } from './post';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'https://jsonplaceholder.typicode.com';  // URL to web api
  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/users/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  getPosts(id: number): Observable<Post[]> {
    const url = `${this.usersUrl}/posts?userId=${id}`;
    return this.http.get<Post[]>(url).pipe(
      tap(_ => this.log(`fetched posts for id=${id}`)),
      catchError(this.handleError<Post[]>(`getPosts id=${id}`))
    );
  }

  getUsers (): Observable<User[]> {
    const url = `${this.usersUrl}/users`;
    return this.http.get<User[]>(url)
      .pipe(
        tap(_ => this.log('fetched users')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`UserService: ${message}`);
  }
}
