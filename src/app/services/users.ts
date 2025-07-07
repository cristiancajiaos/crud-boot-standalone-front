import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = "http://localhost:8090";

  constructor(
    private http: HttpClient
  ) { }

  public createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, user, {
      headers: {
        'Content-Type':'application/json'
      }
    });

  }
}
