import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean;

  constructor(
    private authService:AuthService,
  ) { 
    if(this.authService.getAuth()){
      this.loggedIn = true;
    }
    else {
      this.loggedIn = false
    }
  }
  onLogoutClick(){
    this.authService.loggingOut();
  }

  ngOnInit() {
  }

}
