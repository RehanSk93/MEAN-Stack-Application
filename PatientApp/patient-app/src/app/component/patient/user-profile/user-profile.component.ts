import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userID: any;
  userDetails: any;
  editForm = false;

  constructor(private userService: UserService,
              private route: Router) {
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

  onEditForm() {
    this.editForm = !this.editForm;
  }
}
