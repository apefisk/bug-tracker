import { Component } from '@angular/core';
import {FirebaseConfigService} from "./core/service/firebase-config.service";

@Component({
  selector: 'app-root',
  template: `
    <navbar></navbar>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bug Tracker ruuuuules';

  constructor(private service: FirebaseConfigService) {

  }
}


