import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseAuthState, firebaseAuthConfig, AuthProviders, AuthMethods} from "angularfire2";
import { Router } from "@angular/router";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn: boolean;
  public authState: FirebaseAuthState;
  name: any;
  username: string;

  constructor(private af: AngularFire,private router: Router) {
    this.af.auth.subscribe((auth) => {
      if (auth) {
        this.name = auth;
        console.log(auth.auth.email);
        this.username = auth.auth.email;
        this.isLoggedIn = true;
        //When login is successful, user is navigated to front page
        this.router.navigateByUrl('/bugs');
      }
    });
  }

  logOut() {
    this.af.auth.logout();
    //User is logged out and directed to login and unauthenticated phase
    console.log("User successfully logged out")
    this.isLoggedIn = false;
    this.router.navigateByUrl('/login');
  }
}

