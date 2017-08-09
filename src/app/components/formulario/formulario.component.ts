import { Component, OnInit, TemplateRef } from '@angular/core';

import { TextAreaQuestionModel } from '../../model/textAreaQuestionModel';
import { RadioQuestionModel } from '../../model/radioQuestionModel';
import { Subscription } from 'rxjs/Subscription';

import { ModalComponent } from '../modal/modal.component';

import { DialogService } from "ng2-bootstrap-modal";

 
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public isCollapsed:boolean = true;
 
  questionID;    
  formulario = [];
  
  public subscriptions: Subscription[] = [];
  public messages: string[] = [];



  constructor(private dialogService:DialogService) {
    this.questionID = 0;         
   }

  ngOnInit() {
  }

  adicionaQuestao(){
            
    let q = new RadioQuestionModel();
    q.pergunta = "Orientação para o cliente - Encantar sempre. Capacidade para atuar voltado para a satisfação das necessidades dos clientes internos e externos, buscando antecipar e identificar suas exigências de forma ágil e melhor, quando comparado a referências de excelência. Identifica ações internas e externas que impactam na área, processo, negócio e cliente.";
    q.opcoes.push("1");
    q.opcoes.push("2");
    q.opcoes.push("3");
    q.opcoes.push("4");
    q.opcoes.push("5"); 

    q.id = this.questionID; 
    q.questionNumber = this.questionID+1;
    this.formulario.push( {type:"text", question: q});    
    this.questionID++;  
    console.log(this.formulario);
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

  showConfirm() {
    this.dialogService.addDialog(ModalComponent, { message:'Dialog with red backdrop' }, { backdropColor: 'rgba(0, 0, 0, 0.5)' });
  }

  teste(){
    this.isCollapsed = true;
  }
}


