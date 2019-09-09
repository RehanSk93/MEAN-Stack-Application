import { Component, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/model/user.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers: [UserService]
})
export class EditProfileComponent implements OnInit {

  editDetails: User;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    const userID = localStorage.getItem('userID');
    this.userService.getUser(userID).subscribe( res => {
      if (res) {
        this.editDetails = res;
      }
    });
  }

  onEditProfile(form: NgForm) {
    this.userService.updatePatientDetails(form.value).subscribe(() => {
      this.router.navigate(['patient/profile']);
    });
  }
}
