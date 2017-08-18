import { Component, OnInit, TemplateRef } from '@angular/core';

import { TextAreaQuestionModel } from '../../model/textAreaQuestionModel';
import { RadioQuestionModel } from '../../model/radioQuestionModel';
import { Subscription } from 'rxjs/Subscription';

// import { ModalComponent } from '../modal/modal.component';

// import { DialogService } from "ng2-bootstrap-modal";

 
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public isCollapsed:boolean = true;
 
  questionID;    
  formulario = [];
  newQuestion:string;

  newOptions = [1];  
  newOptionID = 1;
  testeArray:string[] = [""];

  constructor() {    
    this.questionID = 0;    
  
   }

  ngOnInit() {
  }

  adicionaQuestao(questao: string, opcoes: string[], questionType:string){
            
    let q = new RadioQuestionModel();
    q.pergunta = questao;

    if(opcoes != null){ 
      opcoes.forEach(element => {
      q.opcoes.push(element);
    });      
    }
   
    
    q.id = this.questionID; 
    q.questionNumber = this.questionID+1;
    this.formulario.push( {type:questionType, question: q});    
    this.questionID++;      
  }

  renumeraQuestoes(){
    let aux = 0;
    this.formulario.forEach(element => {
      element.question.id = aux;
      aux++;         
    });
    this.questionID = aux;
  }

  removeQuestao(idButton){    

    this.formulario.splice(idButton, 1);
    if(this.formulario.length == 0){      
      this.questionID = 0;
    }
    this.renumeraQuestoes();
  }


  shwoCollapsed(){ 
    this.isCollapsed = false;
    setTimeout(function(){       
      window.scrollTo(0,document.body.scrollHeight); 
      
    }, 10);
    
           
  }

  confirmAddQuestion(){

    let options;
    if(this.testeArray.length > 1){      
      options = this.testeArray.slice(1,(this.testeArray.length));  
      this.adicionaQuestao(this.newQuestion, options,"radio");     
    }else{
      options = null;
      this.adicionaQuestao(this.newQuestion, options,"text");     
    }  
    
             
    this.newQuestion = '';    
    this.isCollapsed = true;
    this.newOptionID = 1;
    this.newOptions = [1];
    
    $('.collapse').collapse('hide');    

    
    this.testeArray = [""];
  }

  cancelQuestion(){              
    this.newQuestion = '';    
    this.isCollapsed = true;
    $('.collapse').collapse('hide');
  }

  addNewOption(){
    this.newOptionID ++;
    this.newOptions.push(this.newOptionID);  
    this.testeArray.push("");     
  }

  deleteNewOption(){
    if(this.newOptions.length > 1){
      let lastIndex = this.newOptions.length-1;
      this.newOptions.splice(lastIndex,1);
      this.testeArray.splice(lastIndex,1);
      this.newOptionID--; 
    }   
  }

  public collapsed(event:any):void {
    
  }
 
  public expanded(event:any):void {

  }

}


