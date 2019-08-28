import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userDetails: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
     this.userDetails = this.userService.selectedUser;
    // console.log( 'User details '+ JSON.stringify(this.userDetails));
    console.log(this.userDetails['userInfo']);
  }

}
