import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  userDetails: User;
  userName : any;

  constructor(private userService: UserService) {
    this.userName = localStorage.getItem('username');
  }

  ngOnInit() {


  // this.userDetails = this.userService.selectedUser;
  //  console.log( 'This is fetching data' + JSON.stringify(this.userDetails));

  //  if(this.userDetails && this.userDetails['userInfo'] && this.userDetails['userInfo']['name']){

  //   this.userName = this.userDetails['userInfo']['name'];

  //   console.log(this.userDetails['userInfo']['name'])
  //  }

  }

}
