import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  allEmployes = [];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.fetchDetails();
  }

  fetchDetails(){
    this.userService.fetchUserDetails().subscribe(result => {
      console.log(result);
      this.allEmployes = result as unknown as User[]

    }, err => {
      console.log(err);
    })
  }

}
