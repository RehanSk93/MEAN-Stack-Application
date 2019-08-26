import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/model/login.model';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errResponse = false;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {

    // Initially we have to call this function,
    // Otherwise it will give you undefined error
    this.resetForm()


  }

  // initially we have to reset form field 
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    // initialize empty value for ignoring undefined error
    this.userService.loginUserDetails = {
      email: '',
      password: ''
    }
  }



  onSubmit(form: NgForm) {

    // check email is available or not.
    if (form.value.email) {
      this.userService.userLogin(form.value).subscribe(
        result => {
          
          // simple log the role in console
          // console.log(result["userInfo"].role);

          // store the token inside local storage

          localStorage.setItem('token', result['token']);
          localStorage.setItem('username', result['userInfo']['name']);

          // storing data into service property for sharing any component
          this.userService.selectedUser = result as User;

          // comparing roll as doctor or not
          if(result['userInfo'].role == 'doctor'){
            this.router.navigate(['/doctor'])
          }
          
          // comparing roll as patient or not
          if(result['userInfo'].role == 'patient'){
            this.router.navigate(['/patient'])
          }
        },
        errorResponse => {
          console.log('Login Error: '+ JSON.stringify(errorResponse));
          this.errResponse = true;
        }
      )
    }
  }



}
