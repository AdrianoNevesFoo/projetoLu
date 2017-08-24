import { Component, OnInit } from '@angular/core';
import { DataService } from '../../providers/data.service'
import { FuncionarioModel } from '../../model/funcionarioModel';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-funcionarios-list',
  templateUrl: './funcionarios-list.component.html',
  styleUrls: ['./funcionarios-list.component.css']
})
export class FuncionariosListComponent implements OnInit {

  private funcionariosBanco: FuncionarioModel[];


  constructor(private dataService: DataService, private auth:AuthService) {      
    this.funcionariosBanco = [];
    this.funcionariosBanco.keys;
  }

  ngOnInit() {

    this.dataService.getFuncionarios()
      .then(funcionarios_snapshot => {              
          funcionarios_snapshot.forEach(um_funcionario_snapshot => {
                let newFuncionario = new FuncionarioModel();
                let funcionarioKey = um_funcionario_snapshot.key;
                let func = um_funcionario_snapshot.val();
                newFuncionario.setName(func["nome"]);
                newFuncionario.setCargo(func["cargo"]);
                newFuncionario.setSupervisao(func["supervisao"]);  
                newFuncionario.setNumberID(func["numberID"]);                  
                this.funcionariosBanco.push(newFuncionario);
          });           
      },
        erro => 
            {
              //  this.showError(erro.message);
            }
      );
  }
}
