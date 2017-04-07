import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { BugRoutingModule } from "./bug-tracker.routing.module";
import { ReactiveFormsModule } from '@angular/forms';

import { BugListComponent } from './bug-list/bug-list.component';
import { BugService } from "../core/service/bug.service";
import { FirebaseConfigService } from "../core/service/firebase-config.service";
import { BugDetailComponent } from './bug-detail/bug-detail.component';

import { FIREBASE_CONFIG } from '../core/constant/constants';

import {
  AngularFireModule,
  AuthMethods,
  AuthProviders
} from 'angularfire2';

@NgModule({
  declarations: [
  BugListComponent,
  BugDetailComponent
  ],
  imports: [
    SharedModule,
    BugRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG,
      {
        method: AuthMethods.Password,
        provider: AuthProviders.Password
      }),
  ],
  providers: [
    BugService,
    FirebaseConfigService
  ],
  bootstrap: [],
  exports: []
})
export class BugModule { }
