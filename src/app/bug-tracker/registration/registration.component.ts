import { Component, OnInit } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";
import {Router} from "@angular/router";
import {User} from "../model/user";

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.css']
})
export class RegistrationComponent {

  private model: User;
  private errCond;

  constructor(private af: AngularFire, private router: Router) {  }

  submit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
          console.log(success);
          this.router.navigate(['login'])
        }).catch(
        (err) => {
          console.log(err);
        }
      )
    }
  }

  redirect() {
    this.router.navigate(['/login']);
  }
}
