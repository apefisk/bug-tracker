import { Component } from '@angular/core';
import {AngularFire, FirebaseAuthState, firebaseAuthConfig, AuthProviders, AuthMethods} from "angularfire2";
import { Router } from "@angular/router";
import { User } from "../model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private model: User;
  private errCond;
  public authState: FirebaseAuthState;

  constructor(private af: AngularFire, private router: Router) {
    this.af.auth.subscribe((auth) => {
      if (auth) {
        this.router.navigateByUrl('/bugs');
      }
    });
  }

  submit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      },
        {
          provider: AuthProviders.Password,
          method: AuthMethods.Password
        }).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/bugs']);
          this.errCond = false;
        }).catch(
        (err) => {
          console.log(err);
          this.errCond = false;
        })
    }
  }

  directToSignUp() {
    this.router.navigate(['/register']);
  }

  //this.router.navigate(['/bugs']);

  logOut() {
    this.af.auth.logout();
    
    firebase.auth().signOut().then(function() {
      console.log("Sign-out successful.");
    }).catch(function(error) {
      // An error happened.
    });

  }
}
