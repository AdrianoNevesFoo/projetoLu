import { Component, OnInit, TemplateRef } from '@angular/core';


import { RadioQuestionModel } from '../../model/radioQuestionModel';
import { QuestionModel } from '../../model/questionModel';
import { FormularioModel } from '../../model/formularioModel';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../providers/auth.service';
import { DataService } from '../../providers/data.service';

 
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public isCollapsed:boolean = true;
 
  questionID;    
  
  newQuestion:string;

  newOptions = [1];  
  newOptionID = 1;
  testeArray:string[] = [""];
  private formulario:FormularioModel;
  private dataInicio:string;
  private dataFinal:string;
  private descricao:string;
  private erroForm;

  constructor(private auth:AuthService, private dataService: DataService) {    
    this.questionID = 0;     
    this.formulario = new FormularioModel();  
    this.erroForm = ""; 
   }

  ngOnInit() {
  }

  adicionaQuestao(questao: string){
            
    let q = new QuestionModel();
    q.pergunta = questao;  
     
    q.questionNumber = this.questionID+1;
    this.questionID++;
    this.formulario.addQuestion(q);    
     
  }

  renumeraQuestoes(){
    let aux = 1;
    this.formulario.getQuestions().forEach(element => {      
      element.questionNumber = aux;
      aux++;         
    });    
  }

  removeQuestao(questionNumber){    

    this.formulario.getQuestions().splice((questionNumber-1), 1);    
    if(this.formulario.getQuestions().length == 0){      
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
    this.adicionaQuestao(this.newQuestion);     
      
    this.newQuestion = '';    
    this.isCollapsed = true;
    this.newOptionID = 1;
    this.newOptions = [1];    
    
    $('.collapse').collapse('hide');        

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

  recuperaCabelcalho():boolean{    
    let inicio = $('#dataInicio').val().toString();
    let final = $('#dataFinal').val().toString();
    let descri = $('#formDescricao').val().toString();
    
        
    if((inicio.length == 0)||(final.length == 0)||(descri.length == 0)){   
      this.erroForm = "O cabeçalho precisa ser completamente preenchido antes de enviar o formulário!";     
      $('#myModal').modal('show');
      return false;
    }else{
      this.formulario.setDataInicio(inicio);
      this.formulario.setDataFinal(final);
      this.formulario.setDescricao(descri);      
      return true;
    }
  }

  enviarFormularios(){ 
    if(this.recuperaCabelcalho()){
      if(this.formulario.getQuestions().length == 0){
        this.erroForm = "O formulário não possui nenhuma questão. Adicione pelo menos uma questão para poder enviar."
        $('#myModal').modal('show');
      }else{
        this.dataService.enviaFormularioFuncionarioList(this.formulario);    
      }
    }             
  }

  deleteFormulariosNovos(){
    this.dataService.deleteFormularioNovo();

  }
}


