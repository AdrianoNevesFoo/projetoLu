import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router }  from '@angular/router';


@Injectable()
export class AuthService {
  auth:any;
  newUser:firebase.User;
  private currentUser;
  private currentUserEmail;
  private currentUserUID;  


  constructor(router:Router) {
   
  }


  loginUser(credentials): firebase.Promise<any> { 
    this.auth = firebase.auth;    
    return firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  createUser(email:string, password:string): firebase.Promise<firebase.User>{
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.name;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }

  obtemUsuario(){    
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user.email+"     "+user.uid);
    } else {
      console.log("No user is signed in.");
    }
  });
  }


  redefinirSenhaUsuario(newPassword:string): firebase.Promise<any>{
    return firebase.auth().currentUser.updatePassword(newPassword);
  }

  passwordResetEmail(email:string): firebase.Promise<any>{
    var auth = firebase.auth();
    var emailAddress = "user@example.com";
    let emailCurrentUser = firebase.auth().currentUser.email;
    
    return auth.sendPasswordResetEmail(email);    
  }

  equatlTo(password:string){
    
    var ref = firebase.database().ref("usuarios");

  }

  signOut(): firebase.Promise<any>{
    return firebase.auth().signOut();
  }
}
