import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  pergunta:string;
  radios:string[];

  constructor() { 
    this.radios = ["1", "2", "3", "4", "5"];
  }

  ngOnInit() {
  }

}
