import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../model/employee.model';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();

    // we have to fetch all employee details initially
    this.refreshEmployeeList();
  }

  // initially we have to reset form field 
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    // initialize empty value for ignoring undefined error
    this.empService.selectedEmployee = {
      _id: null,
      name: '',
      salary: null,
      office: '',
      position: ''
    }
  }


  
  // Always Refresh the page after update and insert operation has done
  refreshEmployeeList() {
    this.empService.getEmployeeList().subscribe((result) => {
      // assigning object into an array => as Employee[]  
      this.empService.employees = result as Employee[]
    })
  }



  // Create a function for submitting the form data 
  onSubmit(form: NgForm) {
    // if _id value is empty then new employee is created
    if (form.value._id == null) {
      this.empService.postEmployee(form.value).subscribe((res) => {
        // after inserting value we have to call reset function
        // we can show here insert successfully message
        //alert('data Inserted successful');
        this.resetForm(form);
        this.refreshEmployeeList();
      }
      )
    }
    else{
       // if _id value is not empty then we will update the value
       this.empService.putEmployee(form.value).subscribe((result) => {
         this.resetForm(form);
         this.refreshEmployeeList();
         //alert('data Updated successful');
       })
     }
  }



  // Edit employee 
  onEdit(emp: Employee) {
    this.empService.selectedEmployee = emp;
  }


  // Delete operation empId for delete and form for reset after deleting
  onDelete(_id: any, form: NgForm){
    if(confirm('are you sure') == true){
      this.empService.deleteEmployee(_id).subscribe(
        (result) => { this.refreshEmployeeList(); },
        (error) => { console.log(error); }
      )
    }
  }
}
