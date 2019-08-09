import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

import { UserService } from 'src/app/shared/user.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

    // initially we have to reset form field 
    resetForm(form?: NgForm) {
      if (form) {
        form.reset();
      }
      // initialize empty value for ignoring undefined error
      this.userService.selectedUser = {
        _id: null,
        name: '',
        age: null,
        phone: null,
        email: '',
        password: ''
      }
    }

  onSubmit(form: NgForm){
    if(form.value._id == null){
      this.userService.userRegister(form.value).subscribe(
        (result) => {
          console.log(result);
          
          // Reset the form
          this.resetForm();

          // redirect to login page
          this.router.navigate(['/login']);
        },
        (error) => { console.log(error) },
      )
    }
  }


}
