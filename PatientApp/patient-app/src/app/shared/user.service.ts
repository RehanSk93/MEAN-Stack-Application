import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { User } from '../model/user.model';
import { Observable } from 'rxjs';
import { Login } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Message for status alert..
  public userMessage = false;

  // if login successful then fetch userDetails and store
  selectedUser: User;
  loginUserDetails: Login;



  readonly baseURL = 'http://localhost:3000/user';
  readonly allUser = 'http://localhost:3000/user/alluser';
  readonly loginURL = 'http://localhost:3000/user/login';

  constructor(private http: HttpClient) { }

  // Post data to server
  userRegister(userDetails: User): Observable<User> {
    return this.http.post<User>(this.baseURL, userDetails);
  }

  // user login
  userLogin(loginDetails: Login): Observable<Login> {
    return this.http.post<Login>(this.loginURL, loginDetails);
  }


  // fetch all user
  fetchUserDetails(): Observable<User> {
    return this.http.get<User>(this.allUser);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logOut() {
    return localStorage.removeItem('token');
  }


}
