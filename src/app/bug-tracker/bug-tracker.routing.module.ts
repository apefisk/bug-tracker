import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { BugListComponent } from '../bug-tracker/bug-list/bug-list.component';
import { RegistrationComponent } from '../bug-tracker/registration/registration.component';
import { LoginComponent } from '../bug-tracker/login/login.component';
import {AuthGuard} from "../auth.service";


@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild([
      //'' to login after testing
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'bugs', component: BugListComponent, canActivate: [AuthGuard]},
      { path: 'register', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: 'bugs' },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class BugRoutingModule { }
