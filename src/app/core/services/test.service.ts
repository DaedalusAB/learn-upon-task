import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) {
  }

  public getUsers(): any {
    const url = `api/v1/users`;
    this.httpClient.get(url).subscribe(res => {
      console.log(res);
    });
  }
}
