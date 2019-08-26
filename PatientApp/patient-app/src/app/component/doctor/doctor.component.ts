import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  userDetails: User;
  userName: any;

  constructor(private userService: UserService ) { 
    this.userName = localStorage.getItem('username');
  }

  ngOnInit() {
    this.userDetails = this.userService.selectedUser;
    if(this.userDetails && this.userDetails['userInfo'] && this.userDetails['userInfo']['name'] ){
      this.userName = this.userDetails['userInfo']['name'];
    }
  }

}
