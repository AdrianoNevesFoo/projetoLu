import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


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


  constructor( public flashMessage:FlashMessagesService) {    
    this.logado = false;        
  }
    ngOnInit() {
  }

  public modal(){
    $('#myModal').modal('show');    
  }



}
