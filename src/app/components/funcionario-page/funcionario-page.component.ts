import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FuncionarioModel } from '../../model/funcionarioModel';
import { DataService } from '../../providers/data.service';


@Component({
  selector: 'app-funcionario-page',
  templateUrl: './funcionario-page.component.html',
  styleUrls: ['./funcionario-page.component.css']
})
export class FuncionarioPageComponent implements OnInit {


  private key:string;  
  private funcionario:FuncionarioModel;
  
  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {
    this.funcionario = new FuncionarioModel();
    
   }

  ngOnInit() {
    let name = "";
    this.route.queryParams.subscribe(params => {
      this.key = params["key"]; 

    });    

    this.dataService.getUser(this.key).then(snapshot =>{
        let func = snapshot.val();
        
        this.funcionario.setName(func["nome"]);
        this.funcionario.setCargo(func["cargo"]);
        this.funcionario.setAdmissao(func["admissao"]);
        this.funcionario.setCidade(func["cidade"]);
        this.funcionario.setCodigo(func["codigo"]);
        this.funcionario.setCoordenador(func["coordenador"]);
        this.funcionario.setCpf(func["cpf"]);
      })
        .catch(error =>{
          console.log(error);
      });
      console.log(this.funcionario.getName());
      console.log(this.funcionario.getCargo());
  }



}
