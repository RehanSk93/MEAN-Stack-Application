import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User;

  readonly baseURL = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  // Post data to server
  userRegister(userDetails: User):Observable<User>{
    return this.http.post<User>(this.baseURL, userDetails);
  }


}
