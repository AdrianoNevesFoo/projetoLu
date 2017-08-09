import { Component, OnInit, TemplateRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() {}
 

  ngOnInit() {
  }
  
  modal(){
    //  $('#myModal').modal('show');    
  }
}
