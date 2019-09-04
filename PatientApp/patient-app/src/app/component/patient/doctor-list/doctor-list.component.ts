import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  allEmployees: any = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.fetchDetails();
  }

  private fetchDetails() {
    this.userService.fetchUserDetails()
    .subscribe(result => {

      this.allEmployees = result;
      console.log(this.allEmployees);
    }, err => {
      console.log(err);
    });
  }

  onBooking(doctorID: string) {
    console.log(doctorID);
    this.userService.doctorBookingRequest(doctorID).subscribe(resData => {
      console.log(resData);
    });
  }

}
