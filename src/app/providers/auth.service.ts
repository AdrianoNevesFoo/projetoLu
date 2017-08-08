import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {
  auth:any;
  
  constructor() { }


    loginUser(credentials): firebase.Promise<any> { 
    this.auth = firebase.auth;    
    return firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
  }
}
