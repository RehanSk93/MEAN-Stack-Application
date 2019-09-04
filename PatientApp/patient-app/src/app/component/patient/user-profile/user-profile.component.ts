import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userID: any;
  userDetails: any;

  constructor(private userService: UserService) {
    this.userID = localStorage.getItem('userID');
  }

  ngOnInit() {
    this.fetchDetails();
  }

  fetchDetails() {
    this.userService.getUser(this.userID).subscribe((resData) => {
      this.userDetails = resData;
    });
  }

}
