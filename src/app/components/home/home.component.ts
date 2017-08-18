import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  testeModal(){    
    $('#myModal').modal('show');
  }

  addForm(){
    let list = $('#formList');
    list.append('<li><div class="card"><div class="card-block"><h4 class="card-title">Card title</h4></div></div></li>');
    
  }

  public modal(){
    $('#myModal').modal('show');    
  }
}
