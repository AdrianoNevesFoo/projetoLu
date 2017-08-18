  import { Component, OnInit } from '@angular/core';
  import { Observable } from 'rxjs/Observable';
  import {Router} from '@angular/router';

  import * as firebase from 'firebase/app';

  import { AuthService } from '../../providers/auth.service';
  



  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent implements OnInit {

    user: Observable<firebase.User>;
    registerCredentials = { email: '', password: '' };
    private logado:boolean;


    constructor( private fireAuth: AuthService, private router: Router ) { }

    ngOnInit() {
    }


    public rhLogged:string = "#";


    public login() {
      console.log(this.registerCredentials.email+"     "+this.registerCredentials.password);   
      this.fireAuth.loginUser(this.  registerCredentials)
      .then(
        authData => 
            {       
              this.logado = true;  
              this.router.navigate(['/home']);
            },
        erro => 
            {
              //  this.showError(erro.message);
            }
      );
    }

      public loginFuncionario() {
      console.log(this.registerCredentials.email+"     "+this.registerCredentials.password);   
      this.fireAuth.loginUser(this.  registerCredentials)
      .then(
        authData => 
            {       
              this.logado = true;  
              this.router.navigate(['/homeFuncionario']);
            },
        erro => 
            {
              //  this.showError(erro.message);
            }
      );
    }

  }
