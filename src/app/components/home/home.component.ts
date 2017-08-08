import { Component, OnInit } from '@angular/core';

import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public isCollapsed:boolean = true;
  components: FormComponent[];

  constructor() { 
    this.components = [];
    let comp1 = new FormComponent();
    let comp2 = new FormComponent();
    let comp3 = new FormComponent();
    let comp4 = new FormComponent();

    this.components.push(comp1);
    this.components.push(comp2);
    this.components.push(comp3);
    this.components.push(comp4);

    console.log(this.components[0]);

  }

 
  public collapsed(event:any):void {
    console.log(event);
  }
 
  public expanded(event:any):void {
    console.log(event);
  }
  ngOnInit() {
  }


  addForm(){
   
  }
}
