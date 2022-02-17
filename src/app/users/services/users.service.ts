import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`api/v1/users`).pipe(
      map((data: any) => data.user),
    );
  }

  public createUser(user: User): Observable<User> {
    //  Quote: "Create wont work, but feel free to mock the response data"
    //  I think post to this EP throws 404 always, so this dirty pipe is to mock it
    return this.httpClient.post<any>(`api/v1/users`, user).pipe(
      map(() => {
        user.created_at = new Date();
        return user;
      }),
      catchError(error => {
        user.created_at = new Date();
        return of(user);
      })
    );
  }
}
