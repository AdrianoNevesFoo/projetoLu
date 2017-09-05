import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FuncionarioModel } from '../../model/funcionarioModel';
import { FormularioModel } from '../../model/formularioModel';
import { QuestionModel } from '../../model/questionModel';
import { DataService } from '../../providers/data.service';


@Component({
  selector: 'app-analista-view',
  templateUrl: './analista-view.component.html',
  styleUrls: ['./analista-view.component.css']
})
export class AnalistaViewComponent implements OnInit {

  private currentFuncionario:FuncionarioModel;
  private currentCPF:string;
  private novoFormulario:FormularioModel;

  constructor(private route: ActivatedRoute, private dataService: DataService) { 
    this.currentFuncionario = new FuncionarioModel();
    this.novoFormulario = new FormularioModel();
  }

  ngOnInit() {   
   
    this.route.queryParams.subscribe(params => {      
      this.currentCPF = params["cpf"];    
    });
  
    this.dataService.getFuncionario(this.currentCPF.trim())
        .subscribe(
            funcionario => {                              
                this.currentFuncionario = funcionario;

                if(this.currentFuncionario.getSupervisao().length == 0){
                  this.currentFuncionario.setSupervisao("Setor de R.H.");
                } 
            }
        );    

    this.dataService.getFormularioNovo(this.currentCPF)
    .subscribe(formulario => {            
      this.novoFormulario = formulario;    
           
    });
  }

  salvarEstadoAnalista(){
    let updateVector = [];
    let contador = 0;
    let sentinela = true;
    this.novoFormulario.getQuestions().forEach(questao =>{
      let observacaoAnalista = $("#obsAna-"+questao.questionNumber).val();
      let notaAnalista = $("#notaAna-"+questao.questionNumber).val();

      if(notaAnalista.toString().length == 0){
        console.log("Nota analista é nula!");        
        notaAnalista = '0';
      }
            
      this.dataService.updateFormAnalista(this.currentCPF, this.novoFormulario.getFormIDFirebase(), 
      {notaAna:notaAnalista, obsAna:observacaoAnalista},contador.toString())
      .then(result => {
        console.log("Update questao "+contador);
      }, erro => {
        console.log(erro);
        sentinela = false;
      })      
      contador++;       
    });
    
    if(sentinela){
      
      $('#modalSuccess').modal('show');
    }else{
      
    }
  }


  getFormularioRespondido():boolean{    
    let contador = 0;
    let i;
    for(i=0; i<this.novoFormulario.getQuestions().length; i++){
      let observacaoAnalista = $("#obsAna-"+this.novoFormulario.getQuestions()[i].questionNumber).val();
      let notaAnalista = $("#notaAna-"+this.novoFormulario.getQuestions()[i].questionNumber).val();

      if(notaAnalista.toString().length == 0){        
        $('#modalFormError').modal('show');
        return false;
      }else{  
        
        this.novoFormulario.getQuestions()[i].notaAnalista = notaAnalista.toString().trim();
        this.novoFormulario.getQuestions()[i].obsAnalista = observacaoAnalista.toString().trim();      
      }            
       contador++;
    }    
      return true;
  }

  enviarParaSupervisor(){    
    console.log(this.novoFormulario)
    if(this.getFormularioRespondido()){

      this.dataService.enviarFormularioParaSupervisor(this.currentFuncionario.getCpf().trim(), 
                                                      this.currentFuncionario.getCpfSupervisor().trim(), 
                                                      this.novoFormulario);  
      $('#supervisorSuccess').modal('show');                                                                                                          
    }else{
      console.log("Existem campos vazios!!!!"+this.currentFuncionario.getCpf());    
    }
  }


}



