import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { BugModule } from './bug-tracker/bug.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './bug-tracker/login/login.component';
import { EmailComponent } from './bug-tracker/email/email.component';
import { RegistrationComponent } from './bug-tracker/registration/registration.component';
import { AuthGuard } from "./auth.service";
import { PasswordResetComponent } from './bug-tracker/password-reset/password-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrationComponent,
    LoginComponent,
    EmailComponent,
    RegistrationComponent,
    PasswordResetComponent,
   ],
  imports: [
    BrowserModule,
    HttpModule,
    BugModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule.forRoot(),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
