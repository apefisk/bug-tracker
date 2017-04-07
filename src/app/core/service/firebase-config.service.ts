//Quick fix for require error, Cannot find name 'require' when transpiling
declare var require: any

import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import { FIREBASE_CONFIG } from '../constant/constants';
require('firebase/database');

@Injectable()
export class FirebaseConfigService {

  private _database: firebase.database.Database;

  constructor() {
    this.configureApp();
    this.configureDatabase();
  }

  public get database() {
    return this._database;
  }

  configureApp() {
    firebase.initializeApp(FIREBASE_CONFIG);
  }

  configureDatabase() {
    this._database = firebase.database();
  }
}
