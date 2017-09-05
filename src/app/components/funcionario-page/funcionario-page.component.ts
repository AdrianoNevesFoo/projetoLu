import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FuncionarioModel } from '../../model/funcionarioModel';
import { FormularioModel } from '../../model/formularioModel';
import { QuestionModel } from '../../model/questionModel';
import { DataService } from '../../providers/data.service';


@Component({
  selector: 'app-funcionario-page',
  templateUrl: './funcionario-page.component.html',
  styleUrls: ['./funcionario-page.component.css']
})
export class FuncionarioPageComponent implements OnInit {


  private key:string; 
  private dependentes:string;   
  private novoFormulario:FormularioModel;
  private currentFuncionario:FuncionarioModel;
  
  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {
    
    this.novoFormulario = new FormularioModel();
    this.currentFuncionario = new FuncionarioModel();
    
   }

  ngOnInit() {
    let name = "";
    this.route.queryParams.subscribe(params => {
      this.currentFuncionario.setName(params["nome"]);
      params["dependentes"].forEach(element => {
        this.currentFuncionario.addDependente(element);
      });
      this.currentFuncionario.setCpf(params["cpf"]);
      this.currentFuncionario.setCpfSupervisor(params["cpfSupervisor"]);
      this.currentFuncionario.setCargo(params["cargo"]);
    });    


    // this.recuperaFormulario(this.currentFuncionario.getCpf().trim());    
  }

  // recuperaFormulario(key:string){
  //   this.dataService.getFormularioNovo(key)
  //         .then(formulario_snapshot => {              
  //             formulario_snapshot.forEach(um_formulario_snapshot => {
  //               let formKey = um_formulario_snapshot.key;                               
  //               this.novoFormulario.setDataInicio(um_formulario_snapshot.val()["dataInicio"]);
  //               this.novoFormulario.setDataFinal(um_formulario_snapshot.val()["dataFinal"]);
  //               this.novoFormulario.setDescricao(um_formulario_snapshot.val()["descriacao"]);
  //               this.novoFormulario.setQuestoes(um_formulario_snapshot.val()["questoes"]);
  //               um_formulario_snapshot.val()["questoes"].forEach(questao_snapshot =>{
  //                 let currentQuestion = new QuestionModel();
  //                 currentQuestion.setPergunta(questao_snapshot["pergunta"]);
  //                 currentQuestion.setQuestionNumber(questao_snapshot["questionNumber"]);
                  
  //                 // console.log(currentQuestion.getPergunta());
  //                 // console.log(currentQuestion.getQuestionNumber());
  //                 // let question = this.novoFormulario.addQuestion(questao_snapshot["pergunta"]); 
  //                 // console.log(question);
  //               })                
  //             });
  //     }, error=>{        

  //     });
  // }

  openModalForm(){
    $('#modalForm').modal('show');
  }


}
