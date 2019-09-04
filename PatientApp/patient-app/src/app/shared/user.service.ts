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
  readonly bookingRequest = 'http://localhost:3000/user/booking';

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


  // Fetch single employee data from database
  getUser(empID): Observable<User> {
    return this.http.get<User>(this.baseURL + `/${empID}`);
  }



  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logOut() {
    // Clear all data at a time
    // but if you want to remove single item then use removeItem() method
    return localStorage.clear();
  }

  doctorBookingRequest(doctorId: string) {
    const bookingDetails = {
      doctorRequestID: doctorId,
      patientRequestID: localStorage.getItem('userID')
    };
    return this.http.post(this.bookingRequest, bookingDetails);
  }


}
