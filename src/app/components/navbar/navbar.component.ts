import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../providers/auth.service';
import { Router }  from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  
  user: Observable<firebase.User>;
  registerCredentials = { email: '', password: '' };
  private logado:boolean;


  constructor( public flashMessage:FlashMessagesService, private auth:AuthService, private router: Router) {    
    this.logado = false;        
  }
    ngOnInit() {
  }

  public modal(){
    $('#myModal').modal('show');    
  }

  private logout(){
    
    this.auth.signOut().then(
      _ =>{
        console.log("Logout efetuado com sucesso!");
        this.router.navigateByUrl('/login');
      },
      erro =>{

      }
    )
  }

}
