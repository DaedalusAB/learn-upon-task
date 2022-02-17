import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
}
