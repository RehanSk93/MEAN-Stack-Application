import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // Inside this employee array we have to save all employee details
  employees: Employee[];

  // Inside this property we have to work with update and insert operation
  selectedEmployee: Employee;

  // our server side api, we have to fetch data from that api
  readonly baseURL = 'http://localhost:3000/employee';


  constructor(private http: HttpClient) { }

  // post data to server through http post request
  postEmployee(emp: Employee):Observable<Employee> {
    return this.http.post<Employee>(this.baseURL, emp);
  }

  // Fetch all data from server
  getEmployeeList():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseURL);
  }

  // Update employee data from database
  putEmployee(emp: Employee):Observable<Employee> {
    return this.http.put<Employee>(this.baseURL + `/${emp._id}`, emp);
  }

  // Delete employee data from database
  deleteEmployee(empID: any):Observable<Employee> {
    return this.http.delete<Employee>(this.baseURL + `/${empID}`);
  }

}
