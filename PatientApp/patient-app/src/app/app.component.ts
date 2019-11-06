import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userName = '';

  constructor(public userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.userName = localStorage.getItem('username');
  }

  logOut() {
    this.userService.logOut();
    this.router.navigate(['/login']);
    this.userName = '';
  }

}
